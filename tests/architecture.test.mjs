import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
const root = new URL("../src/", import.meta.url);
function files(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) =>
    entry.isDirectory()
      ? files(join(dir, entry.name))
      : [join(dir, entry.name)],
  );
}
test("passive views use typed hooks/services and public barrels", () => {
  for (const path of files(root.pathname).filter(
    (path) => path.endsWith(".tsx") && path.includes("/views/"),
  )) {
    const source = readFileSync(path, "utf8");
    assert.ok(
      !/\bfetch\s*\(|localStorage|sessionStorage|\buseState\b/.test(source),
      path,
    );
    assert.ok(!/\bany\b/.test(source), path);
    for (const match of source.matchAll(/from "(\.[^"]+)"/g))
      assert.ok(
        !/\.\.\/.*\/(?:site|use[A-Z]|contact|react)$/.test(match[1]),
        match[1],
      );
  }
});
test("each section owns its stylesheet and customization is centralized", () => {
  const views = files(new URL("views/components/", root).pathname);
  for (const path of views.filter((path) => path.endsWith(".tsx")))
    assert.ok(views.includes(path.replace(/\.tsx$/, ".css")), path);
  assert.ok(
    readFileSync(new URL("styles/theme.css", root), "utf8").includes(
      "--color-accent",
    ),
  );
  assert.ok(
    readFileSync(new URL("models/site.ts", root), "utf8").includes("satisfies"),
  );
});

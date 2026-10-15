import test from "node:test";
import assert from "node:assert/strict";
import { sendContactMessage } from "../src/services/contact.ts";
const data = {
  name: "Demo",
  email: "demo@example.com",
  subject: "Rénovation",
  message: "Un projet de démonstration.",
};

test("the default demo never transmits contact information", async () => {
  const original = globalThis.fetch;
  globalThis.fetch = async () => {
    throw new Error("Demo must not make a request");
  };
  try {
    assert.equal(await sendContactMessage(data), "demo");
  } finally {
    globalThis.fetch = original;
  }
});
test("a configured client endpoint receives the portfolio payload and propagates failures", async () => {
  const original = globalThis.fetch;
  try {
    globalThis.fetch = async (url, options) => {
      assert.equal(url, "https://example.com/contact");
      assert.equal(options.method, "POST");
      assert.deepEqual(JSON.parse(options.body), data);
      return new Response(null, { status: 204 });
    };
    assert.equal(
      await sendContactMessage(data, "https://example.com/contact"),
      "sent",
    );
    globalThis.fetch = async () => new Response(null, { status: 503 });
    await assert.rejects(
      sendContactMessage(data, "https://example.com/contact"),
    );
  } finally {
    globalThis.fetch = original;
  }
});

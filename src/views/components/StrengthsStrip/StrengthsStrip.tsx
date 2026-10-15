import { FiMessageSquare, FiFileText, FiTool } from "react-icons/fi";
import type { ConstructionSite } from "../../../types";
import "./StrengthsStrip.css";
const icons = [FiMessageSquare, FiFileText, FiTool];
export function StrengthsStrip({
  items,
}: {
  readonly items: ConstructionSite["strengths"];
}) {
  return (
    <div className="strengths-strip">
      {items.map((item, index) => {
        const Icon = icons[index] ?? FiTool;
        return (
          <div key={item.title}>
            <Icon aria-hidden="true" />
            <div>
              <strong>{item.title}</strong>
              <p>{item.text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

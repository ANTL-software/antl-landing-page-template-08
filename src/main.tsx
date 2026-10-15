import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HomePage } from "./views/layouts";
import "./styles/theme.css";
import "./styles/global.css";

createRoot(document.getElementById("root")!).render(<StrictMode><HomePage /></StrictMode>);

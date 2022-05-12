import copy from "./clipboard";
import notify from "./notify";

declare global {
  interface Window {
    copy(s: string): void;
  }
}

window.copy = (s: string) => {
  copy(s);
  notify("Copied to clipboard");
};

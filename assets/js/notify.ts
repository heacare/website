export default function notify(s: string) {
  let root: HTMLElement = document.querySelector("#notify-root");
  if (root === null) {
    root = document.createElement("div");
    root.id = "notify-root";
    root.style.position = "fixed";
    root.style.top = "0";
    root.style.right = "0";
    root.classList.add("flex", "flex-col", "items-end", "max-w-sm");
    document.body.append(root);
  }

  const notification = document.createElement("div");
  notification.classList.add(
    "m-4",
    "bg-white",
    "rounded-md",
    "drop-shadow-xl",
    "px-5",
    "py-3",
    "text-right"
  );
  notification.innerText = s;
  root.prepend(notification);
}

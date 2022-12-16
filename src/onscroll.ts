type ScrollData = {
  scrollX: number;
  scrollY: number;
  innerWidth: number;
  innerHeight: number;
};

type ScrollHandler = (data: ScrollData) => void;

let data = <ScrollData>{
  scrollX: 0,
  scrollY: 0,
  innerWidth: 0,
  innerHeight: 0,
};
let ticking = false;
let handlers = <ScrollHandler[]>[];

function dispatch() {
  data = {
    scrollX: window.scrollX,
    scrollY: window.scrollY,
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight,
  };
  if (!ticking) {
    window.requestAnimationFrame(() => {
      for (const handler of handlers) {
        handler(data);
      }
      ticking = false;
    });
    ticking = true;
  }
}

document.addEventListener("scroll", dispatch);
window.addEventListener("resize", dispatch);

export default function onScroll<K extends Node, T>(
  elements: NodeListOf<K>,
  initInfos: (element: Node) => T,
  handler: (info: T, data: ScrollData) => void
) {
  const infos = <T[]>[];
  elements.forEach((element) => {
    infos.push(initInfos(element));
  });
  handlers.push((data: ScrollData) => {
    for (const info of infos) {
      handler(info, data);
    }
  });
}

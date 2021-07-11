import anime from "animejs";

export default function scrollTo(id) {
  const $el = document.getElementById(id);
  anime({
    targets: document.documentElement,
    scrollTop: $el.offsetTop,
    duration: 1000,
    easing: "easeOutExpo",
  });
}

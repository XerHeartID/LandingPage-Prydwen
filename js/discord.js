const t =
  "undefined" != typeof HTMLImageElement &&
  "loading" in HTMLImageElement.prototype;
if (t) {
  const t = document.querySelectorAll("img[data-main-image]");
  for (let e of t) {
    e.dataset.src &&
      (e.setAttribute("src", e.dataset.src), e.removeAttribute("data-src")),
      e.dataset.srcset &&
        (e.setAttribute("srcset", e.dataset.srcset),
        e.removeAttribute("data-srcset"));
    const t = e.parentNode.querySelectorAll("source[data-srcset]");
    for (let e of t)
      e.setAttribute("srcset", e.dataset.srcset),
        e.removeAttribute("data-srcset");
    e.complete &&
      ((e.style.opacity = 1),
      (e.parentNode.parentNode.querySelector(
        "[data-placeholder-image]"
      ).style.opacity = 0));
  }
}
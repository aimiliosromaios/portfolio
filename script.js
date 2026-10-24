const year = document.getElementById("year");
document.documentElement.classList.add("js-ready");
if (year) year.textContent = new Date().getFullYear();

const toggle = document.querySelector(".menu-toggle");
const nav = document.getElementById("site-nav");
if (toggle && nav) {
  toggle.hidden = false;
  const closeMenu = () => {
    toggle.setAttribute("aria-expanded", "false");
    nav.classList.remove("is-open");
  };
  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") !== "true";
    toggle.setAttribute("aria-expanded", String(expanded));
    nav.classList.toggle("is-open", expanded);
  });
  nav.addEventListener("click", event => {
    if (event.target.closest("a")) closeMenu();
  });
  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
      closeMenu();
      toggle.focus();
    }
  });
}

// The original image links remain usable when JavaScript is unavailable.
const images = document.querySelectorAll("a[data-lightbox]");
if (images.length && typeof HTMLDialogElement !== "undefined") {
  const dialog = document.createElement("dialog");
  dialog.className = "image-dialog";
  dialog.setAttribute("aria-label", "Project image viewer");
  const close = document.createElement("button");
  close.className = "dialog-close";
  close.textContent = "Close ×";
  close.autofocus = true;
  const image = document.createElement("img");
  const caption = document.createElement("p");
  dialog.append(close, image, caption);
  document.body.append(dialog);
  let trigger;
  images.forEach(link => link.addEventListener("click", event => {
    event.preventDefault();
    trigger = link;
    image.src = link.href;
    image.alt = link.querySelector("img").alt;
    caption.textContent = link.closest("figure").querySelector("figcaption")?.textContent || image.alt;
    dialog.showModal();
  }));
  close.addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", event => {
    if (event.target === dialog) dialog.close();
  });
  dialog.addEventListener("close", () => trigger?.focus());
}

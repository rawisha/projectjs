// Popup image kod börjar här
const gallery = document.querySelectorAll(".gallery-item .image"),
  popUp = document.querySelector(".popUP"),
  previewImg = popUp.querySelector("img[alt]"),
  currentImg = popUp.querySelector(".current-img"),
  totalImg = popUp.querySelector(".total-img"),
  bgShadow = document.querySelector(".bgShadow"),
  demoimg = popUp.querySelector(".demoimg");
closeIcon = popUp.querySelector(".icon");

window.onload = () => {
  for (let i = 0; i < gallery.length; i++) {
    totalImg.textContent = gallery.length;

    let thumbs = [gallery[i].querySelector("img").alt];
    thumbs.forEach((pics) => {
      const thum = document.createElement("img");
      thum.setAttribute("class", "thumbinfo");
      thum.src = pics;
      demoimg.appendChild(thum);
    });
    gallery[i].onclick = () => {
      function preview() {
        currentImg.textContent = i + 1;
        let activeimg = gallery[i].querySelector("img").alt;
        previewImg.src = activeimg;
        const thumbimgs = document.getElementsByClassName("thumbinfo");
        const mainIMGsrc = document.getElementById("main-img").src;
        for (let i = 0; i < thumbimgs.length; i++) {
          if (thumbimgs[i].src === mainIMGsrc) {
            thumbimgs[i].style.opacity = "1";
          } else {
            thumbimgs[i].style.opacity = ".6";
          }
        }
      }

      const prevBtn = document.querySelector(".prev");
      const nextBtn = document.querySelector(".next");
      if (i === 0) {
        prevBtn.style.display = "none";
      }
      if (i >= gallery.length - 1) {
        nextBtn.style.display = "none";
      }
      prevBtn.onclick = () => {
        i--;
        if (i === 0) {
          preview();
          prevBtn.style.display = "none";
        } else {
          preview();
          nextBtn.style.display = "block";
        }
      };
      nextBtn.onclick = () => {
        i++;

        if (i >= gallery.length - 1) {
          preview();
          nextBtn.style.display = "none";
        } else {
          preview();
          prevBtn.style.display = "block";
        }
      };

      preview();
      popUp.classList.add("show");
      bgShadow.style.display = "block";
      document.querySelector("body").style.overflow = "hidden";

      closeIcon.onclick = () => {
        i;
        prevBtn.style.display = "block";
        nextBtn.style.display = "block";
        bgShadow.style.display = "none";
        popUp.classList.remove("show");
        document.querySelector("body").style.overflow = "auto";
      };
    };
  }
};

// Popup image kod slutar här

// mobile-menu toggle börjar här
let menuOpen = false;
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".mobile-menu");
const links = document.getElementsByClassName("mobile-link");
const documentBody = document.body;

function toggleMenu() {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
    menu.style.right = "0%";
    documentBody.style.overflow = "hidden";
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
    menu.style.right = "-100%";
    documentBody.style.overflow = "auto";
  }
}

window.addEventListener("load", function () {
  menuBtn.addEventListener("click", function () {
    toggleMenu();
  });
  for (let i = 0; links.length; i++) {
    links[i].addEventListener("click", function () {
      toggleMenu();
    });
  }
});
// mobile-menu toggle slutar här

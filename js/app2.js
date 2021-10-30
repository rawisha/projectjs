//mobile menu
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
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function () {
      toggleMenu();
    });
  }
});


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

//ABOUT MODAL START

/*
      ****  TO DO  ****
      Gör så att bilderna renderas ut i inforutan också (nu endast tillfälliga "fasta" placeholders")
      Lägga till profile img id i staff sedan rendera ut det med hjälp av for loopen som är skapad

*/ 


//get the modal
const modal = document.querySelector("#aboutModal");

// get the profile images
/*

Få ut bilderna här sedan appenda med " <img id="profile-img" src="https://via.placeholder.com/150"> <<----", 


const getimg = document.querySelector(".col-3")
const prof = document.querySelector("#profile-img[src]")
const perimg = getimg.querySelector("img[src]")

*/

//get the buttons for opening the modal
const btn0 = document.querySelector("#about-btn-0");
const btn1 = document.querySelector("#about-btn-1");
const btn2 = document.querySelector("#about-btn-2");

//get the closing-icon
const closingIcon = document.querySelector(".closingIcon");

const staff = [
    { position: "Staff 1", name: "[Name 1]", age: "[Age 1]", fact: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, inventore possimus dicta sed earum reprehenderit eligendi perferendis quos incidunt atque mollitia.", contact: "[name1]@funky.com" },
    { position: "Staff 2", name: "[Name 2]", age: "[Age 2]", fact: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, inventore possimus dicta sed earum reprehenderit eligendi perferendis quos incidunt atque mollitia.", contact: "[name2]@funky.com" },
    { position: "Staff 3", name: "[Name 3]", age: "[Age 3]", fact: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, inventore possimus dicta sed earum reprehenderit eligendi perferendis quos incidunt atque mollitia.", contact: "[name3]@funky.com" },
]



//the function for printing out information
function showStaff(valueOne) {
    for(const i in staff[valueOne]) {
      document.querySelector("#"+i).innerHTML = staff[valueOne][i];
      }
}
  
//when clicking the read more button
btn0.onclick = () => {
    //show the modal
    modal.style.display = "block";
    //body = no scroll
    documentBody.style.overflow = "hidden";
    //call the function with a parameter for indexposition
    showStaff(0); 
}
btn1.onclick = () => {
    modal.style.display = "block";
    documentBody.style.overflow = "hidden";
    showStaff(1);
}
btn2.onclick = () => {
    modal.style.display = "block";
    documentBody.style.overflow = "hidden";
    showStaff(2);
}

 //when clicking the closing icon, the modal close, body scrolls
closingIcon.onclick = () => { 
  modal.style.display = "none"; 
  documentBody.style.overflow = "auto";
}
//ABOUT MODAL END




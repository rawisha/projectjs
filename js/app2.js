//MOBILE MENU START
let menuOpen = false;
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".mobile-menu");
const links = document.getElementsByClassName("mobile-link");
const documentBody = document.body;

const toggleMenu = () => {
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
//MOBILE MENU END

//OPEN SIGN START
const openSign = () => {
  const time = new Date();
  let getTime = time.getHours();
  const date = new Date();
  let getDay = date.getDate();

  //for testing different times, that´s why using let
  //getTime = 12;
  //getDay = 0;
  
  //if = opening times for weekdays
  if (getDay >= 1 && getDay <= 5){
    //opening times
    if (getTime >= 10 && getTime <= 17){
      document.querySelector("#js-open").innerHTML = "Hey, We´re open!";
    //closed
    } else {
      document.querySelector("#js-open").innerHTML = "Sorry, we´re closed now";
    }
  //else = opening times for weekend
  } else {
    //opening times
    if (getTime >= 12 && getTime <= 15){
      document.querySelector("#js-open").innerHTML = "Hey, We´re open!";
    //closed
    } else {
      document.querySelector("#js-open").innerHTML = "Sorry, we´re closed now";
    }
  }
}

window.addEventListener("load", openSign);
//OPEN SIGN END

//POPUP GALLERY START
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

    let thumbs = [gallery[i].querySelector("img").src];
    thumbs.forEach((pics) => {
      const thum = document.createElement("img");
      thum.setAttribute("class", "thumbinfo");
      thum.src = pics;
      demoimg.appendChild(thum);
    });
    gallery[i].onclick = () => {
      function preview() {
        currentImg.textContent = i + 1;
        let activeimg = gallery[i].querySelector("img").src;
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
//POPUP GALLERY END

//ABOUT MODAL START
//get the modal
const modal = document.querySelector("#aboutModal");
//get all the profile images in the class
const getimg = document.querySelectorAll(".profile-img")
//get the picture container
const profileimg = document.querySelector("#profImg")
//staffinfo as objects in an array
const staff = [
  {
    position: "Photografer",
    name: "[Name 1]",
    age: "[Age 1]",
    fact: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, inventore possimus dicta sed earum reprehenderit eligendi perferendis quos incidunt atque mollitia.",
    contact: "[name1]@funky.com",
  },
  {
    position: "Photographer",
    name: "[Name 2]",
    age: "[Age 2]",
    fact: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, inventore possimus dicta sed earum reprehenderit eligendi perferendis quos incidunt atque mollitia.",
    contact: "[name2]@funky.com",
  },
  {
    position: "Photographer",
    name: "[Name 3]",
    age: "[Age 3]",
    fact: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, inventore possimus dicta sed earum reprehenderit eligendi perferendis quos incidunt atque mollitia.",
    contact: "[name3]@funky.com",
  },
];

//the function for printing out information, with the sent index from openAboutModal as a parameter
const showStaff = (valueOne) => {
  //for every infoType in the staff const at the sent in index
  for(const infoType in staff[valueOne]) {
    //print out at right position in html with # + infotype. The info that should be printet out comes from const staff[inparameter index][infotype]
    document.querySelector("#"+infoType).innerHTML = staff[valueOne][infoType];
    }
    //for printing out images. the profileimg.src (=the place in html) should be the getimg[inparameter index].src (from the picture array, selected by class earlier)
    profileimg.src = getimg[valueOne].src
}

//function for opening the about modal
const openAboutModal = () => {
  //get the buttons in the about cards, every button with the classname are collected in an array
  const btn = document.querySelectorAll(".about-btn");
  //iterate over every index in the button array
  for (let i = 0; i < btn.length; i++) {
    //listen for clicks on the buttons
    btn[i].addEventListener("click", () => {
      //when clicking, the modal shows up
      modal.style.display = "block";
      //call the showStaff function with the clicked index position as a parameter
      showStaff([i]);
    });
  }
};

//function for closing the about modal - starts with an onclick in the html-doc
const closeAboutModal = () => {
  //hide the modal-div
  modal.style.display = "none";
}

//when the window load, call the openAboutModal function
window.addEventListener("load", openAboutModal);
//ABOUT MODAL END
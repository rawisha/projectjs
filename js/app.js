/********************  MOBILE MENU STARTS HERE ********************/

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
  menuBtn.addEventListener("click", toggleMenu);
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", toggleMenu);
  }
});

/********************  MOBILE MENU ENDS HERE ********************/


/********************  DARK/LIGHT MODE STARTS HERE ********************/

const landingBtn = document.querySelector("#landing-btn");
const landingText = document.querySelector("#landing-text");
let dark = false;

function nightMode() {
  //if the "dark" is false, (=the window is white)
  if (!dark){
    //some dark styling
    documentBody.style.backgroundColor = "rgb(33, 33, 33)";
    documentBody.style.color = "white";
    landingBtn.innerHTML = '<i class="far fa-lightbulb"></i>';
    landingText.innerHTML = "Växla till ljust läge";
    //and "dark" is true (=window is dark)
    dark = true; 
    //else (=the window is dark)
  } else {
    //some light styling
    documentBody.style.backgroundColor = "white";
    documentBody.style.color = "black";
    landingBtn.innerHTML = '<i class="fas fa-lightbulb"></i>';
    landingText.innerHTML = "Växla till mörkt läge";
    //and "dark" is false (=window is white)
    dark = false;
  }
}

window.addEventListener("load", function(){
  //starts listening for clicks on the dark/light button. On click, start nightMode function
  landingBtn.addEventListener("click", nightMode)
});


/********************  DARK/LIGHT MODE ENDS HERE ********************/


/********************  OPEN SIGN STARTS HERE ********************/

//function for showing if the gallery is open or closed
const openSign = () => {
  //delaration of a new date const
  const time = new Date();
  //get the time right now
  let getTime = time.getHours();
  //delaration of a new date const
  const day = new Date();
  //get the day of the week
  let getDay = day.getDay();

  //for testing different times, that´s why using let
  //getTime = 10;
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
  };
};

//when the window loads, start openSign function
window.addEventListener("load", openSign);

/********************  OPEN SIGN ENDS HERE ********************/


/********************  GALLERY STARTS HERE ********************/

//gets the modal
const gallery = document.querySelector("#galleryModal");
//gets the main image space
const showingplace = document.querySelector("#showing-image");
//gets all the images in the gallery
const images2 = document.querySelectorAll(".gallery-image");
//declaration - empty array
const images = [];
//loops over the images. Fills the array with images as objects
images2.forEach(pic => {
  return images.push({url: pic.src})
});
//gets the prev and next button elements
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");


//function for opening the about modal
const openGalleryModal = () => {
  //get the images in the gallery, every image with the classname are collected in an array
  const selImg = document.querySelectorAll(".gallery-image");
  //iterate over every index in the img array
  for (let i = 0; i < selImg.length; i++) {
    //listen for clicks on the images
    selImg[i].addEventListener("click", () => {
      //when clicking, the modal shows up
      gallery.style.display = "flex";
      //call the functions that shows the gallery modal content with the clicked index position as a parameter
      setShowingImage(selImg[i].src);
      //call the thumbnail function
      setThumbs();
    });
  };
  //get the buttons and listen for clicks, click = calling a function
  document.querySelector("#prev-btn").addEventListener("click", prevImage);
  document.querySelector("#next-btn").addEventListener("click", nextImage);
};

//function for closing the modal
const closeGalleryModal = () => {
  //hide the modal-div
  gallery.style.display = "none";
};

window.addEventListener("click", (event) => {
  if (event.target.id === "galleryModal") {
    closeGalleryModal();
  }
});

//function for the main image. the parameter src is sent from the onclick in previous function (openGalleryModal or setThumbs)
const setShowingImage = (src) => {
  //the img element in the showingplace get the src that has been sent in to the function
  showingplace.setAttribute("src", src);
  //get the new active thumbnail
  setActiveThumbnail();
};

//function for the thumbnails
const setThumbs = () => {
  document.querySelector("#thumbnails-wrapper").innerHTML = images
  //map = take the "in-array", add something, ang get a new array
  .map((img) => `<img src="${img.url}" class="thumbnail" onclick="setShowingImage(this.src)">`)
  //takes the array and put it back to a string without the ,
  .join("");
  //get the new active thumbnail
  setActiveThumbnail();
}

//function for the active thumbnail
const setActiveThumbnail = () => {
  //get the thumbnail images, every image with the classname are collected in an array
  const thumbs = document.querySelectorAll(".thumbnail");
  //loop for checking if the src of the element is the same as the showingplace src = the active one
  for (let i = 0; i < thumbs.length; i++) {
    //if the img in thumbs[i] src attribute is the same as the showingplace src 
    if (thumbs[i].src === showingplace.src){ 
      //instead of a border we used opacity to mark active thumbnail
      //style without opacity
      thumbs[i].style.opacity = "1";
    } else {
      //style with opacity
      thumbs[i].style.opacity = "0.5";
    }
    //if the image src on index is the same as showingplace src & i = 0 (=first img)
    if(thumbs[i].src === showingplace.src && i === 0){
      //hide button
      prevBtn.style.display = "none";
      //if the image src on index is the same as showingplace src & i isn´t 0 (=not first img)
    }else if(thumbs[i].src === showingplace.src && i !== 0){
      //show button
      prevBtn.style.display = "block";
    }
    //if the image src on index is the same as showingplace src & i is array lenght -1 (=last img)
    if(thumbs[i].src === showingplace.src && i === thumbs.length - 1){
      //hide button
      nextBtn.style.display = "none";
      //if the image src on index is the same as showingplace src & i isn´t array lenght -1 (=not last img)
    }else if(thumbs[i].src === showingplace.src && i !== thumbs.length - 1){
      //show button
      nextBtn.style.display = "block";
    }    
  }
};

//function for previous picture btn
const prevImage = () => {
  //button is displayed
  nextBtn.style.display = "block"
  //get the thumbnail images, every image with the classname are collected in an array
  const thumbs = document.querySelectorAll(".thumbnail");
  //loop for checking if the src of the element is the same as the showingplace src
  for (let i = 0; i < thumbs.length; i++) {
    //if the image src on index is the same as showingplace src & i = 1 (=second img)
    if(thumbs[i].src === showingplace.src && i === 1){
      //remove arrow button
      prevBtn.style.display = "none";
    }
    //if the image src on index is the same as showingplace src & i not 0 (=first img) 
    if (thumbs[i].src === showingplace.src && i !== 0){ 
      //set showingplace attribute to thumbs[i-1].src (=the picture before)
      showingplace.setAttribute("src", thumbs[i-=1].src);
      //get the new active thumbnail 
      setActiveThumbnail();
  }};
};

//function for next picture btn
const nextImage = () => {
  //button is displayed
  prevBtn.style.display = "block"
  //get the thumbnailimages, every image with the classname are collected in an array
  const thumbs = document.querySelectorAll(".thumbnail");
  //loop for checking if the src of the element is the same as the showingplace src
  for (let i = 0; i < thumbs.length; i++) {
    //if the image src on index is the same as showingplace src & i isn´t array lenght -2 (=second last img)
    if(thumbs[i].src === showingplace.src && i === thumbs.length - 2){
      //remove arrow button
      nextBtn.style.display = "none";
    }
    //if the image src on index is the same as showingplace src & i isn´t array lenght -1 (=last img)
    if (thumbs[i].src === showingplace.src && i !== thumbs.length - 1) { 
      //set showingplace attribute to thumbs[i+=1].src (=the img after)
      showingplace.setAttribute("src", thumbs[i+=1].src);
      //get the new active thumbnail
      setActiveThumbnail();
    }
  };
};

//when the window load, call the openGalleryModal function
window.addEventListener("load", openGalleryModal);

/********************  GALLERY ENDS HERE **********************/


/********************  ABOUT MODAL START HERE **********************/

//get the modal
const modal = document.querySelector("#aboutModal");
//get all the profile images in the class
const getimg = document.querySelectorAll(".profile-img");
//get the picture container
const profileimg = document.querySelector("#profImg");
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
    //print out at right position in html with # + infotype (infotype = position, name, age osv..). The info that should be printet out comes from const staff[inparameter index][infotype]
    document.querySelector("#"+infoType).innerHTML = staff[valueOne][infoType];
    }
    //for printing out images. the profileimg.src (=the place in html) should be the getimg[inparameter index].src (from the picture array, selected by class earlier)
    profileimg.src = getimg[valueOne].src;
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
  };
};

//function for closing the about modal - starts with an onclick in the html-doc
const closeAboutModal = () => {
  //hide the modal-div
  modal.style.display = "none";
}
//listen for clicks outside the modal
window.addEventListener("click", (event) => {
  //if the id of the target (the element that triggered the event) is "aboutModal"
  if (event.target.id === "aboutModal") {
    //call the closing function
    closeAboutModal();
  }
});
//when the window load, call the openAboutModal function
window.addEventListener("load", openAboutModal);

/********************  ABOUT MODAL ENDS HERE **********************/
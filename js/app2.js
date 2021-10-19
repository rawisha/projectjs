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

//ERROR RAD 27 - Cannot read properties of undefined (reading 'addEventListener)
//Detta fel är även på Christians kod. Hur lösa? Fråga C?
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


// Popup image kod börjar här
const gallery = document.querySelectorAll(".gallery-item .image"), // här konstaterar vi klasserna
popUp = document.querySelector(".popUP"), // här sätter vi klassen till popUp
previewImg = popUp.querySelector("img[alt]"), // här hämtar vi bilderna från popup klassen
currentImg = popUp.querySelector(".current-img"), // här hämtar vi klassen current img från popup
totalImg = popUp.querySelector(".total-img"),
bgShadow = document.querySelector(".bgShadow"), // här hämtar vi bgshadow klassen som är utanför popUP diven
closeIcon = popUp.querySelector(".icon");

window.onload = ()=>{ // här targetar vi window där all dom sitter
    for(let i = 0; i < gallery.length; i++){ // här räknar vi hur många bilder som finns i galleryn, om mindre än i(0) så plusar vi på med 1
        totalImg.textContent = gallery.length; // här sätter vi "i" till total img och sätter det i text fältet med textContent
        let bilder = i; // här sätter vi en början/index som kallas för bilder och kopplar det till i där i börjar på 0
        let klickbilder; // här kosntaterar vi en variabel som heter klickbilder
        gallery[i].onclick = ()=>{ // här sätter vi igång en onlick event på gallery med en funtion som körs nedanför
            
            klickbilder = bilder; // här sätter vi bilderna som klickas igenom att 
            console.log(i)
            function preview(){
                currentImg.textContent = bilder + 1; // eftersom biderna räknas från 0 så plusar vi på med 1 så det blir 1 av antal bilder
                let activeimg = gallery[bilder].querySelector("img").alt; // här hämtar vi in alt attributet till bilderna som klickas
                previewImg.src = activeimg; // här skickar vi in bildernas src/länk som klickades på till previewimg
                
            }
            
            const prevBtn = document.querySelector(".prev");
            const nextBtn = document.querySelector(".next");
            if(bilder === 0){ // if sats som kollar om bilder/index är = med 0
                prevBtn.style.display = "none"; // om bilder är lika med 0 så skall prev knappen gömmas med display = none
            }
            if(bilder >= gallery.length - 1){ // här räknar vi längden av galleryn/antal bilder om det är större eller lika med och sätter stop med -1
                nextBtn.style.display = "none"; // här sätter vi next button till none om det når sista bilden.
            }
            prevBtn.onclick = ()=>{ 
                bilder--; // här minskar vi bilder/index med 1 när vi trycker tillbaka knappen
                if(bilder === 0){
                    preview()
                    prevBtn.style.display = "none";
                }else{
                    preview()
                    nextBtn.style.display = "block";
                }
                
            }
            nextBtn.onclick = ()=>{
                bilder++; // ökar vi bilder/index med 1 när vi trycker nästa knappen
                if(bilder >= gallery.length - 1){  // här stoppar vi med -1 när den väl når sista bilden annars ökar den bilder med 1 hela tiden.
                    preview()
                    nextBtn.style.display = "none";
                }else{
                    preview()
                    prevBtn.style.display = "block";
                }
                
            }

            preview() // här anropar vi själva preview functionen så bilderna visas upp
            popUp.classList.add('show'); // här lägger vi till show klassen när det klickas på bilderna.
            bgShadow.style.display = "block"; // här ändrar vi bgshadow till synlig med block attributet
            document.querySelector("body").style.overflow = "hidden"; // här tar vi bort overflow så scrollen går bort runt omrking

            closeIcon.onclick = () =>{ // här skapar vi functionen för "stänga" knappen
                bilder = klickbilder; // här uppdaterar vi bilderna och sätter rätt position så man inte får upp gammal bild
                prevBtn.style.display = "block"; // här sätter vi tillbaks prev knappen till synlig igen
                nextBtn.style.display = "block"; // här sätter vi tillbaks next knappen till synlig igen
                bgShadow.style.display = "none"; // här tar vi bort bgshadow när galleryn stängs
                popUp.classList.remove('show'); // här sätter vi show klassen till inaktiv / opacity till 0 
                document.querySelector("body").style.overflow = "auto"; // här sätter vi overflow till auto igen
                
            }
        }
    }
}

// Popup image kod slutar här





//dark/light mode
const btn = document.querySelector("#landing-btn");
let night = false;

function nightMode() {
  if (!night){
    document.querySelector("body").style.backgroundColor = "rgb(33, 33, 33)";
    /*Testar endast med dessa två som test, skapa klass för text som ska ändra färg?*/
    document.querySelector(".intro-header").style.color = "white";
    document.querySelector(".intro-left").style.color = "white";
    /*Lägg in att månen byts mot sol + byter till vit färg*/
    night = true; 
  }
  else{
    document.querySelector("body").style.backgroundColor = "white";
    /*Testar endast med dessa två som test, skapa klass för text som ska ändra färg?*/
    document.querySelector(".intro-header").style.color = "black";
    document.querySelector(".intro-left").style.color = "black";
    /*Lägg in att solen byts mot måne + byter till svart färg*/
    night = false;
  }
}

window.addEventListener("load", function(){//när sidan lästs in
  btn.addEventListener("click", function() {//börjar den lyssna efter klick
      nightMode();//vid klick, start nightMode function
  });
});

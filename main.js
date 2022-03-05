//navbar behaving on scroll 

window.addEventListener('scroll', () => {
     document.querySelector('nav').classList.toggle 
      ('window_scroll' , window.scrollY > 0)   
})


// menu open/close
//open :
const menu = document.querySelector(".nav_menu");
const menuBtn = document.querySelector("#open-menu");
const closeBtn = document.querySelector("#close-menu");

menuBtn.addEventListener('click', () => {
      menu.style.display = "flex";
      closeBtn.style.display = "inline-block";
      menuBtn.style.display = "none"
})


//close:
const closeNav = () => {
      menu.style.display = "none";
      closeBtn.style.display = "none";
      menuBtn.style.display = "inline-block"
}
closeBtn.addEventListener('click', closeNav);
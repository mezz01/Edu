//navbar behaving on scroll 

window.addEventListener('scroll', () => {
     document.querySelector('nav').classList.toggle 
      ('window_scroll' , window.scrollY > 0)   
})





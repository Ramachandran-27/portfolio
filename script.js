document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");
  
    function highlightNav() {
      let currentSection = "";
  
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
  
        if (scrollY >= sectionTop - sectionHeight / 3) {
          currentSection = section.getAttribute("id");
        }
      });
  
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").substring(1) === currentSection) {
          link.classList.add("active");
        }
      });
      document.querySelector(".intro").classList.add("active");
    }
  
    window.addEventListener("scroll", highlightNav);
  });

function dropDown(e){
  document.querySelector(".menu svg").classList.toggle("highlight");
  document.querySelectorAll(".nav-item").forEach(o=>{o.classList.toggle("visible")});
}

document.querySelector(".menu").addEventListener("click",dropDown);
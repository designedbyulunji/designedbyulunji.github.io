const toggleBtn = document.querySelector(".toggle-btn");

toggleBtn.addEventListener("click", ()=>{
    const navLinks = document.querySelector(".nav-links");
    toggleBtn.classList.toggle("active")
    navLinks.classList.toggle("active");
})

const navSlide = () => {
    const burger = document.querySelector('.fa-solid');
    const nav = document.querySelector('.nav-sidebarToggle');
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        });
    
    }

navSlide();
        

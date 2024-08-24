document.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#1a252f';
    } else {
        navbar.style.backgroundColor = '#2c3e50';
    }
});

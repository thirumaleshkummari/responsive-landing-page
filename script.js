window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'linear-gradient(90deg, #ff7f50, #ff1493)';
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'linear-gradient(90deg, #0000ff, #00ffff)';
        navbar.style.boxShadow = 'none';
    }
});

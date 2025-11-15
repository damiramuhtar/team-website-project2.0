// Жабу терезесі
document.getElementById('close-popup').addEventListener('click', function () {
    document.querySelector('.welcome-popup').style.display = 'none';
});

// Стрелка наверх
const scrollToTopButton = document.getElementById('scroll-to-top');

window.addEventListener('scroll', function () {
    if (window.scrollY > 200) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

scrollToTopButton.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

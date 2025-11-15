// Навигация по секциям
const navButtons = document.querySelectorAll('.nav-btn');

navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.nav-btn.active').classList.remove('active');
        btn.classList.add('active');

        const section = document.getElementById(btn.dataset.section);
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

// Кнопка наверх
window.onscroll = function () {
    const btn = document.querySelector('.scroll-up');
    if (window.scrollY > 200) btn.style.display = 'block';
    else btn.style.display = 'none';
};

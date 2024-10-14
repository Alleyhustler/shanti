// Dark Mode Toggle Function
const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
    const modeText = document.getElementById('modeToggle');
    if (document.body.classList.contains('dark-mode')) {
        modeText.innerText = "Light Mode";
    } else {
        modeText.innerText = "Dark Mode";
    }
};

document.getElementById('modeToggle').addEventListener('click', toggleDarkMode);

// Optional: Parallax Effect
window.addEventListener('scroll', function() {
    const parallaxImage = document.querySelector('.left-image img');
    const scrollPosition = window.scrollY;
    parallaxImage.style.transform = `translateY(${scrollPosition * 0.2}px)`; // Adjust scroll speed
});

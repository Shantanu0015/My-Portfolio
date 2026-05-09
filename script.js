const menuIcon = document.querySelector('#menu-icon');
const nav = document.querySelector('nav');

if (menuIcon && nav) {
    menuIcon.onclick = () => {
        menuIcon.classList.toggle('fa-xmark');
        nav.classList.toggle('active');
    };
}

// Typewriter Loader Logic
const loaderWrapper = document.getElementById('loader-wrapper');
const loaderTextElement = document.querySelector('.loader-text');

if (loaderWrapper && loaderTextElement) {
    // Disable scrolling while loading
    document.body.style.overflow = 'hidden';
    
    const textToType = "Welcome to the website...";
    let i = 0;
    
    function typeWriter() {
        if (i < textToType.length) {
            loaderTextElement.innerHTML += textToType.charAt(i);
            i++;
            setTimeout(typeWriter, 100); // Speed of typing
        } else {
            // Done typing, wait a bit then fade out
            setTimeout(() => {
                loaderWrapper.classList.add('fade-out');
                // Re-enable scrolling
                document.body.style.overflow = 'auto';
                document.body.style.overflowX = 'hidden';
            }, 800);
        }
    }
    
    // Start typewriter effect after a tiny delay
    setTimeout(typeWriter, 300);
}

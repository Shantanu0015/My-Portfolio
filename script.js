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
                
                // Play the tune
                const bgMusic = document.getElementById('bg-music');
                if (bgMusic) {
                    bgMusic.volume = 0.4; // Slightly lower volume
                    bgMusic.play().catch(error => {
                        console.log("Autoplay blocked by browser. User must interact first.");
                        // Optional: Show a play button if blocked, but usually just clicking anywhere later can trigger it
                    });
                }
                
                // Play music if user clicks anywhere (to bypass autoplay restrictions)
                document.body.addEventListener('click', () => {
                    if (bgMusic && bgMusic.paused) {
                        bgMusic.play();
                    }
                }, { once: true });
                
            }, 800);
        }
    }
    
    // Start typewriter effect after a tiny delay
    setTimeout(typeWriter, 300);
}

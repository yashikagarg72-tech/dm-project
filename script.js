document.addEventListener('DOMContentLoaded', () => {
    
    // --- Sticky Header Element Control ---
    const header = document.querySelector('header');
    const handleScroll = () => {
        if (window.scrollY > 20) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    };
    window.addEventListener('scroll', handleScroll);

    // --- Mobile Hamburger Menu Architecture ---
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close mobile navigation menu on active link clicks
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // --- Modern Reveal-On-Scroll (Intersection Observer API) ---
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Optimize DOM tracking cycles
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

    // --- Global High-Conversion Form Submission Handler ---
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Extract input components safely
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn ? submitBtn.innerHTML : "SUBMIT";
            
            // Provide conversion assurance signals
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.innerHTML = "PROCESSING...";
                submitBtn.style.opacity = "0.7";
            }
            
            // Simulating high-speed performance backend delivery API hook
            setTimeout(() => {
                form.reset();
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = "SUCCESS! THANK YOU";
                    submitBtn.style.backgroundColor = "#2C2C2C";
                    submitBtn.style.borderColor = "#2C2C2C";
                }
                
                // Revert CTA design state post complete loop cycle
                setTimeout(() => {
                    if (submitBtn) {
                        submitBtn.innerHTML = originalText;
                        submitBtn.style.backgroundColor = "";
                        submitBtn.style.borderColor = "";
                        submitBtn.style.opacity = "1";
                    }
                }, 4000);
            }, 1200);
        });
    });
});
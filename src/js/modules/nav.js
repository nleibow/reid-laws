const Nav = () => {
    // Nav
    const elementsReverse = [];

    [].forEach.call(document.querySelectorAll("nav a"), (elem) => {
        elementsReverse.unshift(elem.getAttribute('href'));
    });

    elementsReverse.shift();
    elementsReverse.pop();
    window.console.log(elementsReverse);

    function stuck(nav) {
        nav.classList.add("stuck");
    }

    function unstuck(nav) {
        document.querySelector('a[href="' + elementsReverse[elementsReverse.length - 2] + '"]').classList.remove("active");
        nav.classList.remove("stuck")
    }
// Adds active state on scroll
    document.addEventListener("scroll", () => {
        const scrollLocation = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        const nav = document.querySelector(".navigation");

        for (let i = 0; i < elementsReverse.length ; i++) {
            let el = document.querySelector(elementsReverse[i]);
            let elementScrollLocation = el.offsetTop - scrollLocation;
            if (elementScrollLocation < 200 && (-el.offsetHeight) < elementScrollLocation - 100) {
                for (let i = 0; i < elementsReverse.length ; i++) {
                    window.console.log( elementsReverse[i]);
                    window.console.log(-el.offsetHeight, "-el offset");
                    window.console.log(elementScrollLocation - 100, "-scrollLocation");
                    document.querySelector('nav a[href="' + elementsReverse[i] + '"]').classList.remove("active");
                }
                document.querySelector('nav a[href="' + elementsReverse[i] + '"]').classList.add("active");
            }

            if(elementScrollLocation > 90) {
                document.querySelector('nav a[href="' + elementsReverse[2] + '"]').classList.remove("active");
            }
        }

        if (nav.offsetTop - scrollLocation == 0) {
            stuck(nav);
        } else {
            unstuck(nav);
        }

    });

    // Smooth scrolls page on nav click
    [].forEach.call(document.querySelectorAll("nav a"), (elem) => {
        elem.addEventListener('click', (e) => {
            if (!(elem.getAttribute('href').indexOf('http') > -1)) {
                e.preventDefault();
                toggleNav();
                const scrollToElement = document.querySelector(elem.getAttribute('href'));
                window.scroll({top: scrollToElement.offsetTop - 75, behavior: 'smooth'});
            }
        })
    });

    // Mobile Nav
    document.getElementById('hamburger').addEventListener("click", toggleNav);
    document.getElementById('close-x').addEventListener("click", toggleNav);

    function toggleNav() {
        let nav = document.getElementById('nav');
        if(window.innerWidth < 760) {
            if (!nav.classList.contains("show")){
                nav.classList.add('show');
                document.body.style.overflow = 'hidden';
                document.getElementById('hamburger').classList.add("hide");
                document.getElementById('close-x').classList.add("show");
            }else {
                nav.classList.remove('show');
                document.body.style.overflow = 'auto';
                document.getElementById('hamburger').classList.remove("hide");
                document.getElementById('close-x').classList.remove("show");
            }
        } else {
            nav.classList.remove('show');
            document.body.style.overflow = 'auto';
        }
    }

    //Resize for mobile and desktop nav
    window.addEventListener("resize", () => {
        if(window.innerWidth < 768) {
            document.getElementById('nav').classList.remove('show');
            document.getElementById('hamburger').style.display = '';
            document.body.style.overflow = 'auto';
        } else {
            document.getElementById('nav').classList.add('show');
            document.body.style.overflow = 'auto';
        }
    });
setTimeout( () => {
    const navBtn2 = document.getElementById('calcBtn2');
    const navBtn1 = document.getElementById('calcBtn1');
    navBtn1.addEventListener('click',  ()=> {
        window.console.log('works')
    });
    navBtn2.addEventListener('click',  ()=> {
        window.console.log('works')
    });
}, 300)
}


export default Nav
 
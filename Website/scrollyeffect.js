    const header = document.getElementById("pageHeader");
    const trigger = document.getElementById("coolscrolly");

    window.addEventListener("scroll", () => {
        // When user scrolls 120px past the banner text
        if (window.scrollY > 150) {
            header.classList.add("header-scrolled");
        } else {
            header.classList.remove("header-scrolled");
        }
    });
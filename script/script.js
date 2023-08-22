const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});


document.addEventListener("DOMContentLoaded", function() {
    const allProductBtn = document.getElementById("allProductBtn");
    const manBtn = document.getElementById("spritBtn");
    const womenBtn = document.getElementById("lornaBtn");
    const productItems = document.querySelectorAll(".product");

    function showProducts(category) {
        productItems.forEach(item => {
            if (item.classList.contains(category) || category === "all") {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    }

    allProductBtn.addEventListener("click", function() {
        showProducts("all");
    });

    manBtn.addEventListener("click", function() {
        showProducts("sprit");
    });

    womenBtn.addEventListener("click", function() {
        showProducts("lorna");
    });
});

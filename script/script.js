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

    spritBtn.addEventListener("click", function() {
        showProducts("sprit");
    });

    lornaBtn.addEventListener("click", function() {
        showProducts("lorna");
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const allProductBtn = document.getElementById("allItems");
    const manBtn = document.getElementById("spritItem");
    const womenBtn = document.getElementById("lornaItem");
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

    allItems.addEventListener("click", function() {
        showProducts("all");
    });

    spritItem.addEventListener("click", function() {
        showProducts("sprit");
    });

    lornaItem.addEventListener("click", function() {
        showProducts("lorna");
    });
});

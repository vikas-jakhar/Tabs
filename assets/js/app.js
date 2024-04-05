const tab = document.querySelectorAll(".tab-text");

tab.forEach(e => {
    e.addEventListener("click", function () {
        const tabactive = document.querySelector(".tab-text.active");
        e.classList.toggle("active");
        tabactive && tabactive.classList.remove("active");
    });
});

const tab1 = document.querySelector(".tab-1");
const tab2 = document.querySelector(".tab-2");
const tab3 = document.querySelector(".tab-3");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");

one.addEventListener("click", function () {
    tab1.classList.toggle("d-block");
    tab2.classList.remove("d-block");
    tab3.classList.remove("d-block");
});

two.addEventListener("click", function () {
    tab1.classList.remove("d-block");
    tab2.classList.toggle("d-block");
    tab3.classList.remove("d-block");
});

three.addEventListener("click", function () {
    tab1.classList.remove("d-block");
    tab2.classList.remove("d-block");
    tab3.classList.toggle("d-block");
});
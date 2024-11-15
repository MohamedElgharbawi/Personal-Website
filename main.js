let btn = document.querySelector("#scroll");
window.onscroll = _ => window.scrollY ? btn.style.display = "block" : btn.style.display = "none";
window.scrollY ? btn.style.display = "block" : btn.style.display = "none"
document.querySelector('.date').append(new Date().getFullYear());
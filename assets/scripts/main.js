const button = document.querySelector("button"),
    toast = document.querySelector(".toast"),
    close = document.querySelector(".close"),
    progress = document.querySelector(".progress");

button.addEventListener("click", () => {
    toast.classList.add("active");
    progress.classList.add("active");

    setTimeout(() => {
        toast.classList.remove("active");
    }, 4500);//1s=1000milliseconds
    setTimeout(() => {
        progress.classList.remove("active");
    }, 5000);//1s=1000milliseconds
});
close.addEventListener('click', () => {
    toast.classList.remove('active');
    setTimeout(() => {
        progress.classList.remove("active");
    }, 300);//1s=1000milliseconds
})
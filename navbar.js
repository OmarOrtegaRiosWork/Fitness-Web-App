const doc = document;
const resourcesOpen = doc.querySelector(".resourcesdropdown");
const resourcesClose = doc.querySelector(".resourcesnavbar");
const overlaynav = doc.querySelector(".overlaynav");


resourcesOpen.addEventListener("click", () => {
    overlaynav.classList.add("overlaynav--active");
});


resourcesClose.addEventListener("click", () => {
    overlaynav.classList.remove("overlaynav--active");
});
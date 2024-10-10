var images = document.querySelectorAll('.card-img-top');
var modal = document.getElementById('imageModal');
var modalImg = document.getElementById('modalImage');
var closeBtn = document.getElementsByClassName('close')[0];

console.log("Images found: ", images.length);

images.forEach(function (image) {
    image.onclick = function () {
        console.log("Image clicked: ", this.src);
        modal.style.display = "block";
        modalImg.src = this.src;
    }
});

closeBtn.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
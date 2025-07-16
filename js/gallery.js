function upDate(previewPic) {
    console.log(previewPic);
    document.getElementById("image").style.backgroundImage = "url('" + previewPic.src + "')";
    document.getElementById("image").innerHTML = previewPic.alt;
}

function unDo() {
    document.getElementById("image").style.backgroundImage = "url('')";
    document.getElementById("image").innerHTML = "Hover or focus over an image below to display here.";	
}

function addTabFocus() {
    img = document.querySelectorAll('.preview');
    for (let i = 0; i < img.length; i++) {
        img[i].setAttribute('tabindex', '0');
    }
    console.log(img);
}
function upDate(previewPic) {
    console.log(previewPic);
    document.getElementById("image").style.backgroundImage = "url('" + previewPic.src + "')";
    document.getElementById("image").innerHTML = previewPic.alt;
}

function unDo() {
    document.getElementById("image").style.backgroundImage = "url('')";
    document.getElementById("image").innerHTML = "Hover over an image below to display here.";	
}

function tabFocus() {
    img = document.querySelectorAll(".caption preview");
    for (let i = 0; i < img.length; i++) {
        img[i].setAttribute("tabindex", "0");
    }
}
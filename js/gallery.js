function upDate(previewPic) {
    console.log(previewPic);
    document.getElementById("image").style.backgroundImage = "url('" + previewPic.src + "')";
    document.getElementById("image").innerHTML = previewPic.alt;
}

function unDo() {
    document.getElementById("image").style.backgroundImage = "url('')";
    document.getElementById("image").innerHTML = "Hover over an image below to display here.";	
    for (let i = 0; i < document.images.length; i++) {
        document.images[i].style.filter = "blur(0px)";
        document.images[i].setAttribute("tabindex", "0");
    }	
}
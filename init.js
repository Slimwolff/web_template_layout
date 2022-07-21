window.onload = function() {

    colorGallery();
}


let gallery = document.querySelector('.gallery-wrapper');

colors = ['e8f3fe','cce4fd','a4cefc','77b6fb','4b9cf9','2382f7','057af0','196bde','1557c0'];


function colorGallery(){
    let galleryChilds = gallery.childElementCount;
    let count = 0;
    for(let i=0; i<galleryChilds; i++) {
        if(count==colors.length-1){count=0;}
        gallery.children[i].style.backgroundColor = "#"+colors[count];
        count++;
    }
}

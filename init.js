let gallery = document.querySelector('.gallery-wrapper'), navHead = document.querySelectorAll('.header-nav-inner');

const COLORS = ['e8f3fe','cce4fd','a4cefc','77b6fb','4b9cf9','2382f7','057af0','196bde','1557c0'];


function colorGallery(){
    let galleryChilds = gallery.childElementCount;
    let count = 0;
    for(let i=0; i<galleryChilds; i++) {
        if(count==colors.length-1){count=0;}
        gallery.children[i].style.backgroundColor = "#"+colors[count];
        count++;
    }
}

function colorHeadNav() {
    for(let i=0; i<navHead.length; i++) {
        navHead[i].style.backgroundColor = "#"+colors[i];
    }
}


function colorObjects(arrayObj){
    let c = 0;
    var obj;
    for(let i=0; i<arrayObj.length; i++) {
        if (arrayObj[i] instanceof HTMLElement) {
            obj = arrayObj[i].children;
        } else if (arrayObj[i] instanceof HTMLCollection || arrayObj[i] instanceof NodeList) {
            obj = arrayObj[i];
        }
        let objLength = obj.length;
        for(let a=0; a<objLength; a++) {
            if(c==COLORS.length-1) c=0;
            obj[a].style.backgroundColor = "#"+COLORS[c];
            c++;
        }
    }
}


window.onload = function() {

    colorObjects([gallery,navHead]);
    //colorGallery();
    //colorHeadNav();
}


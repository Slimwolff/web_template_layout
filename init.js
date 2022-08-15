let gallery = document.querySelector('.gallery-wrapper'), footer = document.querySelector('.footer-gallery');

const COLORS = ['#e8f3fe','#cce4fd','#a4cefc','#77b6fb','#4b9cf9','#2382f7','#057af0','#196bde','#1557c0'];




/* OLD FUNCTIONS TO COLOIRIZE OBJECTS
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
*/



function colorObjects(array){
    let c = 0;
    var obj;

    for(let i=0; i<array.length; i++) {

        if (array[i].children instanceof HTMLCollection) {
            obj = array[i].children;
        } else {
            obj = array[i];
        }

        let objLength = obj.length;

        for(let a=0; a<objLength; a++) {
            if(c==COLORS.length-1) c=0;
            obj[a].style.backgroundColor = COLORS[c];
            c++;
        }
    }
}


window.onload = () => {

    colorObjects([gallery,footer]);
    //colorGallery();
    //colorHeadNav();
}


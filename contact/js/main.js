$('.explore').click(function(){
  window.scroll(0,findPos(document.getElementsByClassName("box")[0]));
})

function findPos(obj) {
    var curtop = 0;
    if (obj.offsetParent) {
        do {
            curtop += obj.offsetTop;
        } while (obj = obj.offsetParent);
    return [curtop];
    }
}

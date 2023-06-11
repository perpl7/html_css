window.addEventListener("load", borderBox);

function borderBox() {
  var inputs = document.querySelectorAll(".side-site");
  inputs.forEach(inp => inp.addEventListener("input", portfolio));

  function portfolio() {
    var image1 = document.getElementById('id-head-site1');
    var image2 = document.getElementById('id-head-site2');
    var image3 = document.getElementById('id-head-site3');
    var img1 = document.getElementByIde("id-side-site1");
    var img2 = document.getElementById("id-side-site2");
    var img3 = document.getElementById("id-side-site3");

    let zindex = '';

    if (img1.checked) {
        zindex = `z-index: ${0};`
        image1.style.zIndex = zindex;
    }
    else if (img2.checked) {
        zindex = `z-index: ${0};`
        image2.style.zIndex = zindex;
    }
    else if (img3.checked) {
        zindex = `z-index: ${0};`
        image3.style.zIndex = zindex;
    }

    
  }
}
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var width = c.width;
var height = c.height;
console.log(width);

var imageData = ctx.createImageData(width, height);

var a1 = width;
var a2 = height;

for (var i = 0; i < a1; i++) {
    for (var j = 0; j < a2; j++) {
        Pixel(i, j, i / a1 * 255, j / a2 * 255, 255 - (i / a1 * 255), 255);
    }
}

console.log(imageData);
ctx.putImageData(imageData, 0, 0);

function Pixel(x, y, r, g, b, a) {
    var pixelIndex = (y * width + x) * 4;
    imageData.data[pixelIndex] = r;
    imageData.data[pixelIndex + 1] = g;
    imageData.data[pixelIndex + 2] = b;
    imageData.data[pixelIndex + 3] = a;
}

///////////////////////////////////////////////////////////////////////////////////////

var iD = ctx.getImageData(0, 0, c.width, c.height);

async function downloadIt(filename = 'renderedImage.png', format = 'image/png') {
    const dataURL = c.toDataURL(format); // Change format as needed

    const firstLink = document.getElementById("downloadLink");
    const link = document.createElement('a');
    link.textContent = "Download your image!";
    link.download = filename;
    link.href = dataURL;
    // link.click();
    firstLink.appendChild(link);

    document.body.insertBefore(c, link);
}

downloadIt(); // Call with default options
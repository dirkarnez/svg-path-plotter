var draw = SVG().addTo('body').size(300, 130)

var path = draw.path(`M0 0 ${Array(100).fill("").map((_, i) => {
    const x = i + 1;
    const y = Math.pow(x, 2);
    return `C ${(x - 0.5)}, ${(y / 3)} ${(x - 0.5)}, ${(y * 2 / 3)} ${x}, ${y}`;
}).join(" ")}`)
path.fill('none').move(20, 20)
path.stroke({ color: '#f06', width: 4, linecap: 'round', linejoin: 'round' })


function generateCirclePathElement(cx, cy, radius) {
  var path = document.createElementNS("http://www.w3.org/2000/svg", "path");

  var d = "M" + (cx - radius) + "," + cy;

  // Approximation of a circle using cubic Bézier curves
  d += "C" + (cx - radius) + "," + (cy + radius / 3) + " " +
       (cx + radius) + "," + (cy + radius / 3) + " " +
       (cx + radius) + "," + cy;

  d += "C" + (cx + radius) + "," + (cy - radius / 3) + " " +
       (cx - radius) + "," + (cy - radius / 3) + " " +
       (cx - radius) + "," + cy;

  path.setAttribute("d", d);
  path.setAttribute("stroke", "black");
  path.setAttribute("fill", "none");

  return path;
}

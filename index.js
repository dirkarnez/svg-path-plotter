var draw = SVG().addTo('body').size(300, 130)

var path = draw.path(`M0 0 ${Array(100).fill("").map((_, i) => {
    const x = i + 1;
    const y = Math.pow(x, 2);
    return `C ${(x - 0.5)}, ${(y / 3)} ${(x - 0.5)}, ${(y * 2 / 3)} ${x}, ${y}`;
}).join(" ")}`)
path.fill('none').move(20, 20)
path.stroke({ color: '#f06', width: 4, linecap: 'round', linejoin: 'round' })

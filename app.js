// write code here
function degreesToRadians(degrees) {
    return degrees * (Math.PI / 180);
}

let degrees = prompt("มุม(องศา)");
let radians = degreesToRadians(degrees).toFixed(2);
alert(`${degrees} องศา = ประมาณ ${radians} เรเดียน`);
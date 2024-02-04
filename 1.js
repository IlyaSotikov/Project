const A = prompt("Введите координату точки A:");
const B = prompt("Введите координату точки B:");
const C = prompt("Введите координату точки C:");

const lengthAC = Math.abs(C - A);
const lengthBC = Math.abs(B - C);

alert (`Длина отрезка AC: ${lengthAC}`);
alert (`Длина отрезка BC: ${lengthBC}`);
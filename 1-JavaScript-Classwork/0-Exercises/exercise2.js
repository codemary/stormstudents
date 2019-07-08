let a = ["id", "name", "adress", "age"];

let data = [
    [1, "Hannah", "Berlin", 29],
    [2, "Lorraine", "Berlin", 29],
    [3, "Marcel", "Hamburg", 39]
]
console.log(data[0][1]);

for (let i = 0; i < 1; i++) {
    for (let j = 0; j < data.length; j++) {
        console.log(`
        ${a}
        ${data[j]}`);
    }
}

let b = [32, 34, 63, 54, 24, 85, 97, 90, 38, 3, 6, 23, 76, 79, 53];

let search = 54;


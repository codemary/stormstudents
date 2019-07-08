
console.log("-------rest_arguments-------")
function showName(firstName, lastName, ...titles) {
    console.log(`${firstName} ${lastName}`); //Julius Cäsar
    console.log(titles); //[ 'Consul', 'Imperator' ]
    console.log(titles[0]); //Consul
    console.log(titles[1]); //Imperator
    console.log(titles.length); //2
    
}
showName("Julius", "Cäsar", "Consul", "Imperator");

console.log("-------arguments_variable-----")
function showVar() {
    console.log("Argument variable", arguments.length);
    console.log(arguments[0]);
}

showVar("Hello", "World");

console.log("--------DOES NOT WORK WELL!-------");

function funCt() {
    let showArg = () => console.log(arguments[0]);
    showArg();
}
funCt(1);
funCt(243, 1);
funCt("abcd");
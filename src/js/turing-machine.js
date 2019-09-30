function turingMachine() {
    var output = document.getElementById('output').innerHTML;
    var parse = output.split(/<\/?span>/).filter(Boolean);
    console.log(parse);
    document.getElementById('modal-output').innerHTML = output;
};
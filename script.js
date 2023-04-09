function count() {
    var start = document.getElementById('start').value;
    var end = document.getElementById('end').value;
    var step = document.getElementById('step').value;
    var result = document.getElementById('result');

    start = parseFloat(start);
    end = parseFloat(end);
    step = parseFloat(step);

    array = []

    for (let index = start; index <= end; index = index + step) {
        array.push(index);
    }
    
    result.innerHTML = `${array} `
}
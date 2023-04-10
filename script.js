function count() {
    var start = document.getElementById('start');
    var end = document.getElementById('end');
    var step = document.getElementById('step');
    var result = document.getElementById('result');

    if (start.value.length === 0 || end.value.length === 0) {
        window.alert('Fill in all fields, please!')
    } else {

        let startValue = parseInt(start.value);
        let endValue = parseInt(end.value);
        let stepValue = parseInt(step.value);

        stepValue = stepValue <= 0 ? 1 : stepValue;

        if (startValue <= endValue) {
            //count up
            let values = [];
            for (let index = startValue; index <= endValue; index += stepValue) {
                values.push(index);
            }
            result.textContent = values.join(',');
        } else {
            //countdown
            let values = [];
            for (let index = startValue; index >= endValue; index -= stepValue) {
                values.push(index);
            }
            result.textContent = values.join(',');
        }
    }
}
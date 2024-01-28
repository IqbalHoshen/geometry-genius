function getInputValue(inputTextValue) {

    const InputValue = document.getElementById(inputTextValue);
    const InputText = InputValue.value;
    const FloatValue = parseFloat(InputText);
    InputValue.value = '';

    return FloatValue;
}

function outputValues(shapeText, getArea, unit) {

    const resultTextArea = document.getElementById('result');
    const count = resultTextArea.childElementCount;
    const p = document.createElement('p');
    p.classList.add('my-4');
    p.innerHTML = `${count + 1}. ${shapeText} ${getArea} ${unit} <button class="btn btn-sm btn-success">convert</button>`

    resultTextArea.appendChild(p);

}

function nanCheck(input1, input2) {
    if (isNaN(input1) || isNaN(input2) || input1 === '' || input2 === '') {
        alert("Please enter valid numeric values!");
        return true; // Exit function early
    }
}

function TriangleArea() {
    const base = getInputValue("TriangleInput1");
    const height = getInputValue("TriangleInput2");
    const check = nanCheck(base, height);

    if (check === true) {
        return;
    }
    const area = 0.5 * base * height;
    outputValues("Triangle Area is : ", area, " cm²")
}

function RectangleArea() {
    const w = getInputValue("RectangleInput1");
    const l = getInputValue("RectangleInput2");
    const check = nanCheck(w, l);

    if (check === true) {
        return;
    }
    const area = w * l;
    outputValues("Rectangle Area is : ", area, " cm²")
}

function ParallelogramArea() {
    const b = getInputValue("ParallelogramInput1");
    const h = getInputValue("ParallelogramInput2");
    const check = nanCheck(b, h);

    if (check === true) {
        return;
    }
    const area = b * h;
    outputValues("Parallelogram Area is : ", area, " cm²")
}

function RhombusArea() {
    const d1 = getInputValue("RhombusInput1");
    const d2 = getInputValue("RhombusInput2");
    const check = nanCheck(d1, d2);

    if (check === true) {
        return;
    }
    const area = 0.5 * d1 * d2;
    outputValues("Rhombus Area is : ", area, " cm²")
}

function PentagonArea() {
    const p = getInputValue("PentagonInput1");
    const b = getInputValue("PentagonInput2");
    const check = nanCheck(p, b);

    if (check === true) {
        return;
    }
    const area = 0.5 * p * b;
    outputValues("Pentagon Area is : ", area, " cm²")

}
function EllipseArea() {
    const a = getInputValue("EllipseInput1");
    const b = getInputValue("EllipseInput2");
    const check = nanCheck(a, b);

    if (check === true) {
        return;
    }
    const area = 3.1416 * a * b;
    const areaTakeTwoPoint = area.toFixed(2);
    outputValues("Ellipse Area is : ", areaTakeTwoPoint, " cm²")
}
function getHistory() {
    return document.getElementById("history-value").innerText;
}

function printHistory(num) {
    document.getElementById("history-value").innerText=num;
}

// OUTPUT

function getOutput() {
    return document.getElementById("output-value").innerText;
}

function printOutput(num) {
    if(num == "") {
        document.getElementById("output-value").innerText=num;
    }else {
        document.getElementById("output-value").innerText=getFormattedNumber(num);
    }
}

function getFormattedNumber(num) {
    if(num == "-") {
        return "";
    }
    let  n = Number(num);
    let value = n.toLocaleString("en");
    return value;
}

function reverseNumberFormt(num) {
    return Number(num.replace(/,/g,''));
}

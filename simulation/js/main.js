//Your JavaScript goes in here
let voltage1 = 0;
let voltage2 = 0;
let r1 = 0;
let r2 = 0;
let r3 = 0;
let rgain = 0;
let gain = 0;
let vout1 = 0;
const V_type = document.querySelector("#ACDC");
V_type.addEventListener('change', function () {
    if (V_type.value == 'Alternative' || V_type.value == 'Direct') {
        V1id.disabled = false;
        V2id.disabled = false;
        R1id.disabled = false;
        R2id.disabled = false;
        R3id.disabled = false;
        Rgainid.disabled = false;

    }
});
var V1id = document.getElementById("voltage1");
var V2id = document.getElementById("voltage2");
var R1id = document.getElementById("Resistance-1");
var R2id = document.getElementById("Resistance-2");
var R3id = document.getElementById("Resistance-3");
var Rgainid = document.getElementById("Rgain");
var Voutid = document.getElementById("rgain-display");
var V_outid = document.getElementById("getvoutid");
var Graph_id = document.getElementById("graphid");
V1id.disabled = true;
V2id.disabled = true;
R1id.disabled = true;
R2id.disabled = true;
R3id.disabled = true;
Rgainid.disabled = true;
V_outid.disabled = false;

Graph_id.disabled = true;
function getVoltage(id) {
    if (id === 'voltage1') {
        voltage1 = document.getElementById(id).value;
        document.getElementById("voltage-1-display").innerText = voltage1+"V";
        document.getElementById("voltage-1-display-svg").innerHTML = "V1: " + voltage1 + " volts";
    }

    else {
        voltage2 = document.getElementById(id).value;
        document.getElementById("voltage-2-display").innerText = voltage2+"V";
        document.getElementById("voltage-2-display-svg").innerHTML = "V2: " + voltage2 + " volts";
    }

    // console.log(voltage1, voltage2);

    // console.log(document.getElementById("voltage-1-display-svg").innerText)
}

function getResistance(id) {

    if (id === 'Resistance-1') {
        r1 = document.getElementById(id).value;
        document.getElementById("r-1-display").innerText = r1+"Ω";

        document.getElementById("r1-svg-display").innerHTML = r1;
        document.getElementById("r10-svg-display").innerHTML = r1;
    }

    else if (id === 'Resistance-2') {
        r2 = document.getElementById(id).value;
        document.getElementById("r-2-display").innerText = r2+"Ω";

        document.getElementById("r2-svg-display").innerHTML = r2;
        document.getElementById("r20-svg-display").innerHTML = r2;
    }

    else if (id === 'Resistance-3') {
        r3 = document.getElementById(id).value;
        document.getElementById("r-3-display").innerText = r3+"Ω";

        document.getElementById("r3-svg-display").innerHTML = r3;
        document.getElementById("r30-svg-display").innerHTML = r3;
    }

    else {
        rgain = document.getElementById(id).value;
        document.getElementById("rgain-display").innerText = rgain+"Ω";

        document.getElementById("rgain-svg-display").innerHTML = rgain;
    }
}
function get_Vout() {
    gain = (1 + (2 * r1 / rgain) * (r3 / r2));
    vout1 = gain * (voltage1 - voltage2);
    vout1 = vout1.toFixed(3);
    document.getElementById("Vout_svg_display").innerHTML = vout1;
    Graph_id.disabled = false;

}
function makeGraph() {

}
function graph() {

    if (V_type.value == 'Alternative') {
        var exp = "((Math.sin(10*x-3.14))*vout1)";
        // Generate values
        var xValues = [];
        var yValues = [];
        for (var x = 0; x <= 5; x += 0.0001) {
            xValues.push(x);
            yValues.push(eval(exp));
        }

        // Display using Plotly
        var data = [{ x: xValues, y: yValues, mode: "lines" }];
        var layout = { title: "y = " + exp };
        var layout2 = { title: "Voltage(Volts) vs Time(Seconds)" + " " }
        Plotly.newPlot("myPlot", data, layout2);
    }
    else if (V_type.value == 'Direct') {
        var exp = "vout1";
        // Generate values
        var xValues = [];
        var yValues = [];
        for (var x = 0; x <= 10; x += 1) {
            xValues.push(x);
            yValues.push(eval(exp));
        }

        // Define Data
        var data = [{
            x: xValues,
            y: yValues,
            mode: "lines"
        }];

        // Define Layout
        var layout = { title: "y = " + exp };
        var layout1 = { title: "Voltage(Volts) vs Time(Seconds)" + " " }

        // Display using Plotly
        Plotly.newPlot("myPlot", data, layout1);
    }
}

function openNav() {
    document.getElementById("mySidepanel").style.width = "500px";
    document.getElementById("mySidepanel").style.height = "100%";
}

function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
}


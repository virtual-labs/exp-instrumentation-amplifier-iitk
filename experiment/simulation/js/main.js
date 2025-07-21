var sw1 = false
var sw2 = false
var sw3 = false
s1count = 0;
s2count = 0;
s3count = 0;
v1coun = 0;
v2count = 0;
voltage1 = 0
voltage2 = 0
mode = "";
r1 = 100
r2_1 = 22000
r2_2 = 100000
r3 = 100
r4 = 100000
function getVoltage(id) {
    if (id === 'voltage1') {
        voltage1 = document.getElementById(id).value;
        document.getElementById("voltage-1-display").innerText = voltage1;
        volt_1 = document.getElementById('V_1').innerHTML = voltage1 + " volts";
    }

    else {
        voltage2 = document.getElementById(id).value;
        document.getElementById("voltage-2-display").innerText = voltage2;
        volt_2 = document.getElementById('V_2').innerHTML = voltage2 + " volts";
    }
}
function rswitch1() {
    // if(s1count!=1){
    //     document.getElementById("bar_s1").style.transform = "rotate(30deg)";
    //     document.getElementById("bar_s1").style.transformOrigin = "131.51px 268.36px";
    //     document.getElementById("bar_s1").style.transition = 'transform 0.5s';
    //     switch_1color = document.getElementById('s1').style.fill = 'green';
    //     sw1 = true;
    // }
    // if (sw1 === false) {

    // }
    // else {
    //     document.getElementById("bar_s1").style.transform = "rotate(0deg)";
    //     switch_1color = document.getElementById('s1').style.fill = '#ff0000';
    //     sw1 = false;
    // }
    if (mode === "common_mode" || mode === "Slew_rate" || mode === "CMRR_ratio") {
        if (sw1 === false) {
            document.getElementById("bar_s1").style.transform = "rotate(30deg)";
            document.getElementById("bar_s1").style.transformOrigin = "131.51px 268.36px";
            document.getElementById("bar_s1").style.transition = 'transform 0.5s';
            document.getElementById('s1').style.fill = 'green';
            sw1 = true;
        }
        else {
            document.getElementById("bar_s1").style.transform = "rotate(0deg)";
            document.getElementById('s1').style.fill = '#ff0000';
            sw1 = false;
        }
    }
}

function rswitch2() {
    if (mode === "differential_mode") {
        if (sw2 === false) {
            document.getElementById("bar_s2").style.transform = "rotate(-35deg)";
            document.getElementById("bar_s2").style.transformOrigin = "161.8px 285.4px";
            document.getElementById("bar_s2").style.transition = 'transform 0.5s';
            switch_2color = document.getElementById('srpo').style.fill = 'green';
            sw2 = true;
        }
        else {
            document.getElementById("bar_s2").style.transform = "rotate(0deg)";
            switch_2color = document.getElementById('srpo').style.fill = '#ff0000';
            sw2 = false;
        }
    }

}

function rswitch3() {
    if (sw3 === false) {
        switch_3color = document.getElementById('s3').style.fill = 'green';
        sw3 = true;
    }
    else {
        switch_3color = document.getElementById('s3').style.fill = '#ff0000';
        sw3 = false;
    }
}

function alertfunc(id) {
    if (id === "CommonMode") {
        but1 = document.getElementById('CommonMode').style.backgroundColor = 'green';
        but2 = document.getElementById('DifferentialMode').style.backgroundColor = '#2f85ee';
        but3 = document.getElementById('CMRR').style.backgroundColor = '#2f85ee';
        but4 = document.getElementById('SlewRate').style.backgroundColor = '#2f85ee';
        alert('STEPS TO PERFORM COMMON MODE :\n \n1.  Switch1 (S1) and Switch3 (S3) is Closed. \n2.  Switch2 (S2) is Open. \n3.  V1 source is active \n4.  V2 source is not active ')
        s2count = 1;
        mode = "common_mode";
        console.log(mode);
        document.getElementById("voltage1").disabled = false;
        document.getElementById("voltage2").disabled = true;
        document.getElementById("change").innerHTML = "22K Ω";

        document.getElementById("bar_s1").style.transform = "rotate(0deg)";
        document.getElementById('s1').style.fill = '#ff0000';
        sw1 = false;
        document.getElementById("bar_s2").style.transform = "rotate(0deg)";
        switch_2color = document.getElementById('srpo').style.fill = '#ff0000';
        sw2 = false;
        switch_3color = document.getElementById('s3').style.fill = '#ff0000';
        sw3 = false;
        document.getElementById("multi").innerHTML = "0V";

        document.getElementById("tab11").style.display = "block";
        document.getElementById("tab2").style.display = "none";
        document.getElementById("tab3").style.display = "none";
        document.getElementById("tab4").style.display = "none";

        numberOutput = document.getElementById("number-output");
        numberOutput.innerHTML = "0";

        document.getElementById("cmrr_ratio").style.display = "none";
        document.getElementById("rate_slew").style.display = "none";

    }
    else if (id === "DifferentialMode") {
        but1 = document.getElementById('CommonMode').style.backgroundColor = '#2f85ee';
        but2 = document.getElementById('DifferentialMode').style.backgroundColor = 'green';
        but3 = document.getElementById('CMRR').style.backgroundColor = '#2f85ee';
        but4 = document.getElementById('SlewRate').style.backgroundColor = '#2f85ee';
        alert('STEPS TO PERFORM DIFFERENTIAL MODE :\n \n1.  Switch1 (S1) is open.  \n2.  Switch2 (S2) and Switch3 (S3) is closed. \n3.  V1,V2 source is active')
        s1count = 1;
        mode = "differential_mode";
        document.getElementById("voltage1").disabled = false;
        document.getElementById("voltage2").disabled = false;
        document.getElementById("change").innerHTML = "100K Ω";

        document.getElementById("bar_s1").style.transform = "rotate(0deg)";
        document.getElementById('s1').style.fill = '#ff0000';
        sw1 = false;
        document.getElementById("bar_s2").style.transform = "rotate(0deg)";
        switch_2color = document.getElementById('srpo').style.fill = '#ff0000';
        sw2 = false;
        switch_3color = document.getElementById('s3').style.fill = '#ff0000';
        sw3 = false;
        document.getElementById("multi").innerHTML = "0V";
        document.getElementById("tab11").style.display = "none";
        document.getElementById("tab2").style.display = "block";
        document.getElementById("tab3").style.display = "none";
        document.getElementById("tab4").style.display = "none";

        numberOutput = document.getElementById("number-output");
        numberOutput.innerHTML = "0";
        document.getElementById("cmrr_ratio").style.display = "none";
        document.getElementById("rate_slew").style.display = "none";
    }
    else if (id === "CMRR") {
        but1 = document.getElementById('CommonMode').style.backgroundColor = '#2f85ee';
        but2 = document.getElementById('DifferentialMode').style.backgroundColor = '#2f85ee';
        but3 = document.getElementById('CMRR').style.backgroundColor = 'green';
        but4 = document.getElementById('SlewRate').style.backgroundColor = '#2f85ee';
        alert('STEPS TO PERFORM CMRR MODE :\n \n1.  Switch1 (S1) and Switch3 (S3) is Closed. \n2.  Switch2(S2) is Open. \n3.  V1 source is active. \n4.  V2 source is not active. ')
        mode = "CMRR_ratio";
        document.getElementById("voltage1").disabled = false;
        document.getElementById("voltage2").disabled = true;
        document.getElementById("change").innerHTML = "100K Ω";

        document.getElementById("bar_s1").style.transform = "rotate(0deg)";
        document.getElementById('s1').style.fill = '#ff0000';
        sw1 = false;
        document.getElementById("bar_s2").style.transform = "rotate(0deg)";
        switch_2color = document.getElementById('srpo').style.fill = '#ff0000';
        sw2 = false;
        switch_3color = document.getElementById('s3').style.fill = '#ff0000';
        sw3 = false;
        document.getElementById("multi").innerHTML = "0V";

        document.getElementById("tab11").style.display = "none";
        document.getElementById("tab2").style.display = "none";
        document.getElementById("tab3").style.display = "block";
        document.getElementById("tab4").style.display = "none";

        numberOutput = document.getElementById("number-output");
        numberOutput.innerHTML = "0";

        document.getElementById("cmrr_ratio").style.display = "block";
        document.getElementById("rate_slew").style.display = "none";
    }
    else if (id === "SlewRate") {
        but1 = document.getElementById('CommonMode').style.backgroundColor = '#2f85ee';
        but2 = document.getElementById('DifferentialMode').style.backgroundColor = '#2f85ee';
        but3 = document.getElementById('CMRR').style.backgroundColor = '#2f85ee';
        but4 = document.getElementById('SlewRate').style.backgroundColor = 'green';
        alert('STEPS TO PERFORM SLEW RATE :\n \n1.  Switch1 (S1) and Switch3 (S3) is closed. \n2.  Switch2 (S2) is open. \n3.  V1 source is active.')
        mode = "Slew_rate";
        document.getElementById("voltage1").disabled = false;
        document.getElementById("voltage2").disabled = true;
        document.getElementById("change").innerHTML = "100K Ω";

        document.getElementById("bar_s1").style.transform = "rotate(0deg)";
        document.getElementById('s1').style.fill = '#ff0000';
        sw1 = false;
        document.getElementById("bar_s2").style.transform = "rotate(0deg)";
        switch_2color = document.getElementById('srpo').style.fill = '#ff0000';
        sw2 = false;
        switch_3color = document.getElementById('s3').style.fill = '#ff0000';
        sw3 = false;
        document.getElementById("multi").innerHTML = "0V";

        document.getElementById("tab11").style.display = "none";
        document.getElementById("tab2").style.display = "none";
        document.getElementById("tab3").style.display = "none";
        document.getElementById("tab4").style.display = "block";

        numberOutput = document.getElementById("number-output");
        numberOutput.innerHTML = "0";
        document.getElementById("cmrr_ratio").style.display = "none";
        document.getElementById("rate_slew").style.display = "block";
    }
}

function calculate(id) {
    if (id === "out_v") {
        if (sw1 === true && sw3 === true && mode === "common_mode") {
            v_out = ((r4 / (r3 + r4)) * voltage1 * (1 - ((r2_1 * r3) / r4))).toFixed(2);
            document.getElementById("multi").innerHTML = v_out;
        }
        else if (sw1 === true && sw3 === true && (mode === "CMRR_ratio" || mode === "Slew_rate")) {
            v_out = ((r4 / (r3 + r4)) * voltage1 * (1 - ((r2_2 * r3) / r4))).toFixed(2);
            document.getElementById("multi").innerHTML = v_out;
        }
        else if (sw2 === true && sw3 === true) {
            v_out = (voltage2 - voltage1) * (r2_2 / r1).toFixed(2);
            document.getElementById("multi").innerHTML = v_out;
        }
        else {
            alert("Please turn on the required switches and select the voltage")
        }
    }
    else if (id === "cmrr_ratio") {
        if (sw1 === true && sw3 === true && mode === "CMRR_ratio") {

            v_out = ((r4 / (r3 + r4)) * voltage1 * (1 - ((r2_2 * r3) / r4))).toFixed(2);
            v_in = voltage1;
            cmrr = Math.abs(((voltage1 / v_out) * (1 + (r2_2 / r1))).toFixed(2));
            console.log(cmrr);
            numberOutput = document.getElementById("number-output");
            numberOutput.innerHTML = cmrr;
        }
        else {
            alert("Please turn on the required switches and select the voltage");
        }
    }
    else if (id === "rate_slew") {
        if (sw1 === true && sw3 === true && mode === "Slew_rate") {
            var minMicroseconds = 1;
            var maxMicroseconds = 10;
            var randomMicroseconds = minMicroseconds + Math.random() * (maxMicroseconds - minMicroseconds);
            v_out = ((r4 / (r3 + r4)) * voltage1 * (1 - ((r2_2 * r3) / r4))).toFixed(2);
            slew_rate=Math.abs((v_out/randomMicroseconds).toFixed(2));
            numberOutput = document.getElementById("number-output");
            numberOutput.innerHTML = slew_rate;
        }
        else{
            alert("Please turn on the required switches and select the voltage");
        }
    }


}
function openNav() {
    document.getElementById("mySidepanel").style.width = "500px";
    document.getElementById("mySidepanel").style.height = "100%";
}

function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
}

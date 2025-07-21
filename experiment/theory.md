An Operational Amplifier, or op-amp for short, is fundamentally a voltage amplifying device designed to be used with external feedback components such as resistors and capacitors between its output and input terminals. These feedback components determine the resulting function or “operation” of the amplifier and by virtue of the different feedback configurations whether resistive, capacitive or both, the amplifier can perform a variety of different operations, giving rise to its name of “Operational Amplifier”.<br><br>
An Operational Amplifier is basically a three-terminal device which consists of two high impedance inputs. One of the inputs is called the Inverting Input, marked with a negative or “minus” sign, ( – ). The other input is called the Non-inverting Input, marked with a positive or “plus” sign ( + ).<br><br>
A third terminal represents the operational amplifier's output port which can both sink and source either a voltage or a current. In a linear operational amplifier, the output signal is the amplification factor, known as the amplifier's gain ( A ) multiplied by the value of the input signal.<br>

<center><img src="images/op-amp-in-schematics.png" width="25%" alt="Operational Amplifier Diagram" title="Operational Amplifier"> </center>
<center>Fig.1 Operational Amplifier</center><br/>

<h3>Common Mode Gain</h3>
Common-mode voltage gain refers to the amplification given to signals that appear on both inputs relative to the common (typically ground). … This means the output is unaffected by voltages that are common to both inputs. <br><br>
Voltage applied to both input is common, it is referred as common mode voltage V<sub>cm</sub>. The common mode voltage V<sub>cm</sub> can be DC, AC and a combination of AC and DC.<br><br>

<center><img src="images/CommonModeGain.png" width="25%" alt="Common Mode Gain" title="Common Mode Gain"> </center>
<center>Fig.2 Common Mode Gain circuit</center><br/>

<center> V<sub>cm</sub> = (V<sub>1</sub> + V<sub>2</sub>)/2 </center><br>
V<sub>ocm</sub> = A<sub>cm</sub> &times; V<sub>cm</sub><br>
A<sub>cm</sub> = V<sub>ocm</sub> / V<sub>cm</sub><br>

<br>
<h3>Differential Mode Gain</h3>
Instead of applying superposition theorem with V<sub>1</sub> and V<sub>2</sub> separately, a better way is to first combine V<sub>1</sub> and V<sub>2</sub> in a different format, viz. (V<sub>1</sub> - V<sub>2</sub>). This is known as the differential mode input - V<sub>d</sub>. <br><br>
Differential mode component: V<sub>d</sub> = (V<sub>1</sub> - V<sub>2</sub>)<br><br>
Gain = V<sub style="font-size:0.4rem;">OUT</sub> / (V<sub>1</sub> - V<sub>2</sub>)<br><br>
Gain = V<sub style="font-size:0.4rem;">OUT</sub> / V<sub>d</sub>  <br><br>

This gain is known as the Differential Gain (A<sub>d</sub>) as it is based on the differential input alone.<br>

<h3>The common-mode rejection ratio (CMRR)</h3>
The common-mode rejection ratio (CMRR) is defined as the ratio of differential voltage gain A<sub>d</sub> to the common-mode voltage gain A<sub>CM</sub>.<br>
i.e. CMRR = A<sub>d</sub> / A<sub>CM</sub><br>

<center><img src="images/Common-Mode-Rejection-Ratio-CMRR.png" width="25%" alt="The common-mode rejection ratio" title="The common-mode rejection ratio"> </center>
<center>Fig.3 The common-mode rejection ratio circuit</center><br/>

<h3>Slew Rate</h3>
Slew rate is defined as the maximum rate of change of output voltage caused by a step input voltage and is expressed in volts per microseconds. <br><br>

<center><img src="images/Slew-Rate-in-Op-Amp.png" width="25%" alt="Slew-Rate-in-Op-Amp" title="Slew-Rate-in-Op-Amp"> </center>
<center>Fig.4 Slew Rate Op-Amp circuit</center><br/>

V<sub>s</sub> = V<sub>m</sub>Sin ωt<br><br>
V<sub>o</sub> = V<sub>m</sub> Sin ωt<br>
dV<sub>o</sub> / dt = V<sub>m</sub> ω Cos ωt<br>
SR  =  dV<sub>o</sub>/dt |<sub>max</sub> V/µs<br><br>

But, Slew rate:<br><br>

Put max value of Cos ωt in the equation:<br><br>
SR = V<sub>m</sub> ω  &nbsp;&nbsp; Where  (ω = 2πf)<br><br>
SR = V<sub>m</sub> 2πf<br><br>
Slew rate indicates how rapidly the output of an op-amp can change in response to changes in the input frequency.

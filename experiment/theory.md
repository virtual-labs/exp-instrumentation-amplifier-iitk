<h3>Introduction:</h3>
An Instrumentation amplifier is not just an integrated circuit (IC), but an amplifier to provide high differential gain and high common-mode rejection.<br>This type of amplifier is in the differential amplifier family because It amplifies the difference between two inputs.<br> The importance of an Instrumentation amplifier is that it can reduce unwanted noise that is picked up by the circuit. <br>The ability to reject noise or unwanted signals common to all IC pins is called the common-mode rejection ratio (CMRR).<br> Instrumentation amplifiers are very useful due to their high CMRR.<br> Other characteristics, such as : <br>

- Loop Gain: The gain within the feedback loop of the amplifier, which affects accuracy, stability, and rejection of common-mode signals. High loop gain helps maintain precise amplification. <br> 

- Low DC Offset: ensures that the amplifier does not introduce unwanted DC voltage at the output, which is critical for accurate low-level signal measurements.  <br>

- Low Drift: refers to minimal variation in amplifier performance due to temperature changes or time, ensuring reliable and consistent signal amplification in precision applications. make this IC very important in circuit design.
<p align="center">
  <img src="circuit1.jpg" alt="Instrumentation Amplifier Circuit" width="600" height="350">
</p>
The most commonly used instrumentation amplifier circuit is shown in fig 1.<br>
The gain of the circuit is given as:
<p align="left">
  <img src="equation1.jpg" alt="gain of circuit" width="600" height="130">
</p>


An instrumentation amplifier is a differential op-amp circuit providing high input impedance with ease of gain adjustment through the variation of a single resistor.<br>It is a type of differential amplifier that has been outfitted With input buffer amplifiers, which eliminate the need f or input impedance matching and thus make<br> the Amplifier particularly suitable for use in measurement And test equipment.<br> Additional characteristics include Very low DC offset, low drift, low noise, very High open-loop gain, very high common-mode rejection ratio, <br>and very high input the input of impedance always the input of instrumentation amplifier is the output from the transducers and will a small signal.<br>These are used where great accuracy and stability of the circuit are required for both short and long-term.<br>
The output voltage of the Instrumentation amplifier circuit can be calculated using the below formulae:<br><br>
<p align="left">
  <img src="equation2.jpg" alt="" width="600" height="130">
</p>

<br><br>
Where, (V2-V1) = Voltage difference of the input voltages<br>
 R = Resistor value the circuit <br>
Rg  = Gain Resistor <br>
So the value of R and Rg decides the gain of the amplifier. The value of gain can be calculated by using eqn(3) :<br>
<p align="left">
  <img src="equation3.jpg" alt="" width="550" height="110">
</p>

The amplifier’s gain is referred to as the factor by which the amplifier amplifies the input signal.<br> The resistance values represent the gain of an instrumentation amplifier.<br> The gain also depends on the type of feedbacks being used. The positive feedback provides higher gain, whereas negative feedback provides better stabilities of the system.
<h2>Understanding the Instrumentation Amplifier Circuit</h2>

<h3>Instrumentation Amplifier Design</h3>
An instrumentation amplifier is a combination of 3 typical amplifiers.<br> They are connected in a specific order to build an instrumentation amplifier. <br>We can segregate the instrument amplifier design into two-part.<br>
The first part is “Two input and two output”. <br>Two standard operational amplifiers are connected, as shown in the amplifier circuit figure.<br> Both of them are provided with negative feedback as it stabilizes the circuit more.<br> The output of both the amplifier is connected with three resistors.<br>
The second part is a basic “Differential Amplifier”.<br>  The output of both the previous amplifier acts as input for the last amplifier.<br> Outputs are connected with two identical valued resistors with the amplifier. <br>
The positive section is grounded, and negative feedback is associated with the negative terminal and the o/p of this op-amp <br>is the final output of the instrument amplifier.
This intimidating circuit is constructed from a buffered differential amplifier stage with <br>three new resistors linking the two buffer circuits together as shown in fig:2.
<p align="center">
  <img src="circuit2.png" alt="Instrumentation Amplifier Circuit" width="600" height="350">
</p>

Consider all resistors to be of equal value except for Rgain.<br>The negative feedback of the upper-left op-amp causes the voltage at point 1 (top of Rgain) to be equal to V1.<br> Likewise, the voltage at point 2 (bottom of Rgain) is held to a value equal to V2.<br> This establishes a voltage drop across Rgain equal to the voltage difference between V1 and V2. <br>That voltage drop causes a current through Rgain, and since the feedback loops of the two input op-amps draw no current, that<br> same amount of current through Rgain must be going through the two “R” resistors above and below it.<br>This produces a voltage drop between points 3 and 4 equal to:
<p align="left">
  <img src="equation4.jpg" alt="" width="600" height="130">
</p>
The regular differential amplifier on the right-hand side of the circuit then takes this voltage drop<br> between points 3 and 4 and amplifies it by a gain of 1 (assuming again that all “R” resistors are of equal value)<br>
<h3>Instrumentation Amplifier Characteristics</h3>
Let us look at the characteristics of the instrumentation amplifiers at a glance.<br>
•	Instrumentation Amplifiers are Differential Amplifiers made up of three op-amps.<br>
•	It provides a higher open-loop gain than typical op-amps.<br>
•	It has higher CMRR, higher input impedance, low offset voltages, lower output impedances, making it close to the ideal op-amp.<br>
•	Instrumentation amplifiers provide higher accuracy and precision when used in testing and measuring.<br>
•	Instrumentation amplifiers are available in ICs for commercial purposes.<br>


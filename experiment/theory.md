<h3>Introduction:</h3>
An Instrumentation amplifier is an integrated circuit (IC) that is used to amplify a signal.This type of amplifier is in the differential amplifier family because it amplifies the difference between two inputs.The importance of an Instrumentation amplifier is that it can reduce unwanted noise that is picked up by The circuit.The ability to reject noise or unwanted signals common to all IC pins is called the common-mode rejection ratio (CMRR).Instrumentation amplifiers are very useful due to their high CMRR.Other characteristics, such as high open loop Gain, low DC offset and low drift, make this IC very important in circuit design.<br><br>

![image](https://user-images.githubusercontent.com/99191853/217315960-675f70e8-e610-4653-9727-3ad4e885dc79.png)

The most commonly used instrumentation amplifier circuit is shown in Fig. 1. The gain of the circuit is : <br>

![image](https://user-images.githubusercontent.com/99191853/217316447-c19f08c2-8016-4b60-bdc2-f4f110976011.png)

An instrumentation amplifier is a differential op-amp circuit providing high input impedance with ease of gain adjustment through the variation of a single resistor.It is a type of differential amplifier that has been outfitted With input buffer amplifiers, which eliminate the need for input impedance matching and this make the Amplifier particularly suitable for use in measurement and test equipment.Additional characteristics include very low DC offset, low drift, low noise, very high open-loop gain, very high common-mode rejection Ratio and very high input, the input of Impedance always the input of instrumentation amplifier is the output from the transducers and will a small signal.These are used where great accuracy and stability of the circuit are required for both short and long-term.<br>
The output voltage of the Instrumentation amplifier circuit can be calculated using the below formulae :<br>
Vout = (V2-V1)(1+(2R/Rg))<br>
Where,<br> 
(V2-V1) = Voltage difference of the input voltages<br>
R = Resistor value the circuit <br>
Rg  = Gain Resistor <br>
So the value of R and Rg decides the gain of the amplifier. The value of gain can be calculated by :<br>
Gain = (1+(2R/Rg))<br>
The amplifier’s gain is referred to as the factor by which the amplifier amplifies the input signal.The resistance values represent the gain of an instrumentation amplifier.The gain also depends on the type of feedbacks being used. The positive feedback provides higher gain, whereas negative feedback provides better stabilities of the system.<br>

<h2>Understanding the Instrumentation Amplifier Circuit</h2>

<h3>Instrumentation Amplifier Design</h3>
An instrumentation amplifier is a combination of 3 typical amplifiers.They are connected in a specific order to build an instrumentation amplifier.We can segregate the instrument amplifier design into two-part.The first part is “Two input and two output”.Two standard operational amplifiers are connected, as shown in the amplifier circuit figure.Both of them are provided with negative feedback as it stabilizes the circuit more.The output of both the amplifier is connected with three resistors.<br>
The second part is a basic “Differential Amplifier”.The output of both the previous amplifier acts as input for the last amplifier.Outputs are connected with two id entical valued resistors with the amplifier.
The positive section is grounded, and negative feedback is associated with the negative terminal and the o/p of this op-amp is the final output of the instrument amplifier.
This intimidating circuit is constructed from a buffered differential amplifier stage with three new resistors linking the two buffer circuits together.<br>

![image](https://user-images.githubusercontent.com/99191853/217320974-9426df28-c306-446b-987a-b96214056f67.png)

Consider all resistors to be of equal value except for Rgain.The negative feedback of the upper-left op-amp causes the voltage at point 1 (top of Rgain) to be equal to V1.Likewise, the voltage at point 2 (bottom of Rgain) is held to a value equal to V2.This establishes a voltage drop across Rgain equal to the voltage difference between V1 and V2.That voltage drop causes a current through Rgain, and since the feedback loops of the two input op-amps draw no current, that same amount of current through Rgain must be going through the two “R” resistors above and below it.This produces a voltage drop between points 3 and 4 equal to : <br>

![image](https://user-images.githubusercontent.com/99191853/217321415-372f8147-16df-485b-b65b-4c5ccd2c9bc1.png)

The regular differential amplifier on the right-hand side of the circuit then takes this voltage drop between points 3 and 4 and amplifies it by a gain of 1 (assuming again that all “R” resistors are of equal value). <br>
<h3>Instrumentation Amplifier Characteristics :</h3><br>
Let us look at the characteristics of the instrumentation amplifiers at a glance.<br>
•	Instrumentation Amplifiers are Differential Amplifiers made up of three op-amps.<br>
•	It provides a higher open-loop gain than typical op-amps.<br>
•	It has higher CMRR, higher input impedance, low offset voltages, lower output impedances, making it close to the ideal op-amp.<br>
•	Instrumentation amplifiers provide higher accuracy and precision when used in testing and measuring.<br>
•	Instrumentation amplifiers are available in ICs for commercial purposes.<br>


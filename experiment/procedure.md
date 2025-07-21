Here is a general procedure for measuring the operational amplifier (Op-Amp) parameters of Common mode gain (CM gain), Differential mode gain (DM gain), Common mode rejection ratio (CMMR), and Slew rate:<br>
1. Common mode gain (CM gain):<br>
a) Connect the balanced differential input signal to the inputs of the Op-Amp.<br>
b) Measure the output voltage with a differential probe and note the value.<br>
c) Repeat the measurement for various input voltage levels to obtain the relationship between the input voltage and the output voltage.<br>
d) The common mode gain is then calculated as the slope of the output voltage vs. input voltage curve.<br>

2. Differential mode gain (DM gain):<br>
a) Connect an unbalanced differential input signal to the inputs of the Op-Amp.<br>
b) Measure the output voltage with a differential probe and note the value.<br>
c) Repeat the measurement for various input voltage levels to obtain the relationship between the input voltage and the output voltage.<br>
d) The differential mode gain is then calculated as the slope of the output voltage vs. input voltage curve.<br>

3. Common mode rejection ratio (CMMR):<br>
a) The CMMR is calculated as the ratio of the differential mode gain (obtained in step 2) to the common mode gain (obtained in step 1).<br>

4. Slew rate:<br>
a) Connect a step input signal to the inputs of the Op-Amp.<br>
b) Observe the output waveform on an oscilloscope and note the rise time of the waveform.<br>
c) The slew rate is then calculated as the change in voltage divided by the rise time.<br>
d) Calculate slew rate, SR=2*3.14*F Vm/10^6  v/us <br>
e) Increase the input frequency slowly until the output is just barely a triangular wave.<br><br>
    The slew rate SR = change in the output voltage amplitude /change in the output time v/us. 

Note: These procedures assume that the Op-Amp is connected in a non-inverting configuration and that the input and feedback resistors are properly chosen to ensure stability and desired gain. The exact procedure for measuring each parameter may vary depending on the specific Op-Amp and test equipment being used.

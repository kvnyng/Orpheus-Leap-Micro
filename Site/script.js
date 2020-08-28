function showtechicaldetails(){
  document.getElementById("mainheader").style.display ="none"
  document.getElementById("subheader").innerHTML ='<a href="/" style="text-decoration: none;font-size: 24px">◄</a> Technical details'
  document.getElementById("subheader").style.marginBottom ='14px'
  document.getElementById("subheader").style.fontSize ='24px'
  document.getElementById("text").innerHTML ='The board features: ATmega32u4, 20 digital input/output pins (of which 7 can be used as PWM outputs and 12 as analog inputs), a 16 MHz crystal oscillator, a micro USB connection, a power jack, built-in USB communication, an ICSP header, a reset button, keyboard simulation and mouse simulation. All compenents will come soldered on.'
  document.getElementById("get-button").style.display ="none"
  document.getElementById("tech-button").style.display ="none"
}
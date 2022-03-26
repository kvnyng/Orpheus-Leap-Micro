# Orpheus Leap Micro

<img src="http://cloud-jrox24mrn.vercel.app/orpheus_leap_micro_final.png" width= "500px">

During the summer of 2020, Hack Club hosted [*Summer of Making*](https://summer.hackclub.com)! It was three months of non-stop hardware hacking! They partnered with GitHub, to give out $50,000 worth of hardware grants and help makers like me!

With that said, to further rep and hype up Summer Of Making, I was asked to design a general-purpose Arduino PCB to commerate the event. With gracious funding from Github and Adafruit, the Orpheus Leap was put into production and 500 were made, shipped, and received by all Summer of Making Hack Clubbers!

This repo holds the Gerber, Eagle files, and documentation for the board. 

# Design

The Orpheus Leap is based off of the Arduino compatible Pro Micro design. Powered by the ATmega32U4, the main features of Orpheus Leap are as follows:

### Features

**Pins**
* 20 I/O pins 
* 7 PWM Channels
* 12 Analog Inputs

**Memory**
* 32 KB Flash Memory (of which 4 KB used for bootloader)
* 2.5 KB SRAM
* 1 KB EEPROM

**Power**
* 5V Logic
* 7-12V input range with VIN pin
* 40 mA output per I/O pin

**Miscellaneous**
* Built-in USB Support (no need for programmer)
* Can act as USB device (keyboard, mouse, game controller, etc)
* A beautiful Orpheus shaped PCB
* ICSP headers for ICSP programming

<!-- # Photos -->
<hr width="50%">

**PCB designed by Kevin Yang, 2020. Supported by Hack Club & GitHub.**

# Orpheus-Leap-Micro

For the Summer of 2020, Hack Club has been hosting *Summer of Making*, 3 months of fun, hardware hacking! Partnered with Github, they are giving out $50,000 worth of hardware grants, hosting Show and Tells, and more!

With that said, to further rep and hype up Summer Of Making, I was asked to design a general-purpose Arduino PCB that can be distributed like stickers. This is the Github Repo for the Gerber, Eagle, and documentation for the board.

# Design
The Orpheus Leap is based off of Arduino's Pro Micro design. Using the atmega32u4, the main features of Orpheus Leap are as follows:

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
* 7-12V input range
* 40 mA output per I/O pin

**Miscellaneous**
* Built-in USB Support (no need for programmer)
* Can act as USB device (keyboard, mouse, game controller, etc)

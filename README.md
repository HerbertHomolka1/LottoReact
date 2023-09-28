# Intro

This is my lotto simulator written in react. 
![image](https://github.com/HerbertHomolka1/LottoReact/assets/110294810/e5f8cc31-1c27-4a90-bf00-9706498e6b0c)


## Components

The application consists of the following main components:

- App.jsx: This is the main component that renders the Lotto Simulator.

- Card.jsx: This component represents individual lotto buttons. It can be used for selecting numbers, will appear as x and change color upon selection. 

- markThatButton.js: A utility function for handling the marking of lotto buttons and updating the count of selected numbers.

- startGame.js: A utility function for simulating the lotto game by generating random numbers.

## Functionality

Users can click on lotto buttons to select numbers. The selected buttons change their appearance to indicate selection. User can only select 6 numbers.

The application keeps track of the number of selected buttons and displays it to the user.

Users can play the lotto game by clicking the "Play" button, which draws (generates a random set of) numbers and logs them to the console. The idea was to have the drawn number buttons change their color, but I have problems here.

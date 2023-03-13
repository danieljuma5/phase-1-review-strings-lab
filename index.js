// Declaring the currentUser
const currentUser = 'Grace Hopper';

//Declaring welcomeMessage and interpolating currentUser

const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;


//Outputting welcome message to upperCase
const excitedWelcomeMessage = welcomeMessage.toUpperCase();

//Declaring shortGreeting to take initial letter of currentUser
const shortGreeting = `Welcome, ${currentUser.slice(0,1)}!`;
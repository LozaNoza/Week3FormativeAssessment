//Using the help of https://stackoverflow.com/questions/20533127/detect-empty-git add value-on-prompt I created a username promt where the the user has 2 chances to enter a username which will be printed in the main HTML document
//Initally I wanted to have this as a loop ing feture until the user enters thier name but I was uable to find any information that I understood on the internet. If there is an easy way to do this please let me know
var userName = prompt ("What is your name?")
var n = userName.length;
if (n > 0){
    document.write(userName)
} else {
    var userName = prompt ("What is your name again?")
    document.write(userName)
}
//DAY 35
//TASK 1 (Write a function that returns random boolean value true or false)
function getrandomboolean():boolean{
    return Math.random() > 0.6;
}
getrandomboolean();
console.log(getrandomboolean()); //Result "False"
//We get output randomly true or false 

//TASK 2 (Create a function that generates a random hexadecimal color code)
function getrandomcolor():string{
    let color = `#` + Math.floor(Math.random()*0xffffff).toString(14).padStart(6,`0`); 
    return color;
}
getrandomcolor();
console.log(getrandomcolor()); //Result "#9813c6"
//We generate random num, converted into hexadecimal, and give command that it must be 6 characters long

//TASK 3 (Simulate a dice roll and return a random integer b/w 1 and 6)
function rolldice(): number{
    return Math.floor(Math.random()*6)+1; //it calculates random integer from 1 to 6
}
rolldice();
console.log(rolldice()); //Result "4" , it is a random integer and it can be change.
//We can get any random integer b/w 1 to 6 
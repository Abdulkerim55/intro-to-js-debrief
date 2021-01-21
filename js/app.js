//1. GenBuzz

let myNumber=15;
if (typeof(myNumber)!=='number' ){
    console.log('This is not a number');
}
else if(myNumber%5 == 0 && myNumber%3 == 0 ){
console.log('GenBuzz');
}
else if (myNumber%3 == 0){     
    console.log('Gen');
}
else if (myNumber%5 == 0){
    console.log('Buzz');
}
else  {
    console.log(myNumber);
}


//2. E-commerce Item List
     //Items:Shoes- $50 , Jeans- $25, Hat- $12, Socks- $2

const items='';
switch(items){
case 'shoes':
console.log(` ${items} are $50`);
break;
case 'Jeans':
    console.log(`${items} are $25`);

break;
case 'Hat':
    console.log(`${items} are $12`);
break;
case 'Socks':
    console.log(`${items} are $2`);
break;
default:
    console.log('Invalid Item');

}


//3. Print a random integer (whole number) between 50 and 100 to the console
//console.log(Math.floor(Math.random() * (max - min ))+min); --if >= min
//console.log(Math.floor(Math.random() * (max - min ))+min+1);---if >min

console.log(Math.floor(Math.random()*(100-50))+50);  //-- for min>=5 and <=100
  
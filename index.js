//Create a button , on click of which new Heading tag h1 should be added with text as "MERN stack" on the screen above button
function que1()
{
    document.getElementsByClassName("ques1")[0].innerText = "MERN STACK";
}

//Write code to get 1st H1 element from a webpage using DOM

let element = document.getElementsByTagName('h1')[0];
console.log(element.innerText);

//Write code to implement timer clock using JS -- display HH:MM:SS -- the time should keep updating every second

function currentTime() {
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";
  
      
    if(hh > 12){
        session = "PM";
     }
  
    //  hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
     ss = (ss < 10) ? "0" + ss : ss;

     hh = (hh>12)? "0" + (hh-12) : hh;
      
     let time = hh + ":" + mm + ":" + ss + " " + session;
  
    document.getElementById("clock1").innerText = time; 
    let t = setTimeout(function(){ currentTime() }, 1000); 
  
  }
  
  currentTime();

  //Create an HTML page having content as Hello world and a button named Replace Text. When user will click on this button page content should be changed to "Welcome to Elevation academy"
  function que4()
  {
      document.getElementById("ques4").innerText= "Welcome to Elevation Academy"
  }

  //Create an HTML page having content as Hello world and a button named "Hide Text." When user will click on this button hide the "Hello World" text

  $("#que5").click(function(){
    $("#ques5").toggle();
   })

//Given an array of 0's and 1's find out number of 0's

let arr=[0,0,0,1,1]
let c=0;
for(let i=0;i<arr.length;i++)
{
    if(arr[i]==0)
    {
        c++;
    }
}
console.log(c);

// Given an array find out total no. of odd and even nos.

let arr1 = [2,3,4,5,6,7,8];
let odd =0;
let even =0;

for(let j=0;j<arr1.length;j++)
{
    if(arr1[j]%2==0)
    {
        even++;
    }
    else{
        odd++;
    }
}
console.log("Even:"+even);
console.log("Odd:"+odd);

//Given a string find out number of vowels 

let string = "Ribhu";
let vowel=0;

for(let k=0;k<string.length;k++)
{
    if(string[k]=="A"||string[k]=="a")
    {
        vowel++;
    }
    if(string[k]=="E"||string[k]=="e")
    {
        vowel++;
    }
    if(string[k]=="I"||string[k]=="i")
    {
        vowel++;
    }
    if(string[k]=="O"||string[k]=="o")
    {
        vowel++;
    }
    if(string[k]=="U"||string[k]=="u")
    {
        vowel++;
    }
}

console.log("Vowel:"+vowel);


//OR

const count = string.match(/[aeiou]/gi).length;

console.log(count);


// Pass By Value: In Pass by value, function is called by directly passing the value of the variable as an argument. So any changes made inside the function does not affect the original value.

// In Pass by value, parameters passed as an arguments create its own copy. So any changes made inside the function is made to the copied value not to the original value .
function Passbyvalue(a, b) {
    let tmp;
    tmp = b;
    b = a;
    a = tmp;
    console.log(`Inside Pass by value 
        function -> a = ${a} b = ${b}`);
}
  
let a = 1;
let b = 2;
console.log(`Before calling Pass by value 
        Function -> a = ${a} b = ${b}`);
  
Passbyvalue(a, b);
  
console.log(`After calling Pass by value 
       Function -> a =${a} b = ${b}`);


//Pass by Reference: In Pass by Reference, Function is called by directly passing the reference/address of the variable as an argument. So changing the value inside the function also change the original value. In JavaScript array and Object follows pass by reference property.

// In Pass by reference, parameters passed as an arguments does not create its own copy, it refers to the original value so changes made inside function affect the original value. 

function PassbyReference(obj) {
    let tmp = obj.a;
    obj.a = obj.b;
    obj.b = tmp;
  
    console.log(`Inside Pass By Reference 
        Function -> a = ${obj.a} b = ${obj.b}`);
}
  
let obj = {
    a: 10,
    b: 20
  
}
console.log(`Before calling Pass By Reference 
    Function -> a = ${obj.a} b = ${obj.b}`);
  
PassbyReference(obj)
  
console.log(`After calling Pass By Reference 
    Function -> a = ${obj.a} b = ${obj.b}`);
// Calculator
// Write a program to make a simple calculator using switch statement that takes operator and two numbers from user and print the result after operation.

// Note: You have to complete Calculator. No need to take any input



const Calculator = (A, B, C) => 
{
	 switch (A) {
        case '-':
           return(B-C);
        case '/':
          return(B/C)
        case '+':
          return(B+C);
        case '*':
          return(B*C);
    }
    
};

// Check whether the condition is fulfilled or not?


const Check_divisibility = (N) =>
        {
        if ((N % 9) === 0 && (N % 6) === 0)
        {
            return ("Divisible by both");
        }
        else
        {
            return ("Not Divisible by both");
        }
        };


// Eligible Voter


const voter = (a) => {
  if (a >= 18){
  return ("Eligible for Voting");
}
else{
  return ("Not Eligible for Voting");
}
};



// Find Relation


const findRelation = (x,y) => {
  if(x < y){
    return `${x} is smaller than ${y}`;
  }
  else if(x > y){
    return `${x} is greater than ${y}`;
  }
  else if(x == y){
    return `${x} is equal to ${y}`;
  }
};



const getValue = (a) => {
  if (a === "P"|| a==="p") {
     console.log("PrepBytes");
 } else if (a === "Z" || a === "z"){
     console.log("Zenith");
 } else if (a === "E" || a === "e") {
     console.log(" Expert Coder");
 } else if (a === "D" || a === "d") {
     console.log("Data Structure");
 }else{
     console.log("folseeee");
 }
};
getValue("p");


const Max_out_of_three = (A,B,C) => {
  if(A>B && A>C){
    console.log(A);
  }else if(B>A && B>C){
    console.log(B); 
    
  }else if(C>A && C>B){
    console.log(C);
  }
  else{
    console.log("-1");
  }
};

// Second Smallest
// You are given 
// 3
//  distinct integers 
// X
// ,
// Y
// ,
//  and 
// Z
// ,
//  and your task is to find and return the second smallest integer among the three provided integers.


const findSndSmallest = (x,y,z) => {
  if((y > x && y < z)||(y < x && y > z)){
    console.log(y);
}
else if((x > y && x < z)||(x > z && x < y)){
console.log(x);
}
else{
console.log(z);
}
};

// Check whether the triangle is Acute or Obtuse
// Write a program takes takes three angles and checks whether the triangle is acute or obtuse.




const Triangle_Check = (A,B,C) => {
  if (A < 90 && B < 90 && C < 90) {
    console.log("actue");
 } else if (A > 90 || B > 90 || C > 90) {
     console.log("obtuse");
 }

   
};






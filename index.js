var katzDeliLine = [];

// takeANumber function must satisfy 3 conditions
// 1) adds a person to the line.
// 2) appends the person to the end of the line if there are already people in it. 
// 3) properly handles multiple people being added.

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.indexOf(name)+1} in line.`;
}
  
//nowServing function must satisfy  2 conditions:
// 1) returns the line is empty when no one is in line
// 2) returns an announcement about the person it is serving, and shifts the line
  
function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0)
  return "There is nobody waiting to be served!";
  else (katzDeliLine.length>0);
  return `Currently serving ${katzDeliLine.shift()}.`;
}

// currentLine(katzDeliLine) must satisfy 2 conditions:
// 1) returns "The line is currently empty." if no one is in line
// 2) says who is in line when there are people waiting

function currentLine(katzDeliLine){
  var string=`The line is currently:`;
  if (katzDeliLine.length===0)
  return "The line is currently empty.";
  else (katzDeliLine.length > 0);
  for (let i=0; i < katzDeliLine.length; i++){
    string += ` ${i+1}. ${katzDeliLine[i]},`;
  }
  return string.slice(0,string.length-1);
}



// 1) set up a customer count, totaling the all the customers from the day
// 2) every time the function is run it adds to the customer count
// 3) function should return a string "Welcome your ticker # is ____"

customer_start=0;

function ticketWheel(num){
  var phrase= 'Welcome your ticket number is '
  let customer_count = num+customer_start++;
  phrase += ` ${customer_count} `;
  return console.log(phrase)
}

  ticketWheel(1)
  ticketWheel(1)
  ticketWheel(1)
  ticketWheel(1)
  ticketWheel(1)
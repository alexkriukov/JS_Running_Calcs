
const monthNumber = 3;
let result3 = "";

switch (monthNumber) {
     case 1:
          result3 = "January";
          break;
     case 2:
          result3 = "February";
          break;
     case 3:
          result3 = "March";
          break;
     case 4:
          result3 = "April";
          break;
     case 5:
          result3 = "May";
          break;
     case 6:
          result3 = "June";
          break;
}

console.log(result3);


let day = "Monday";
let message;

if (day === "Monday") {
     message = "It's Monday!";
} 
else if (day === "tuesday") {
     message = "It's Tuesday!";
} 
else if (day === "Wednesday") {
     message = "It's Wednesday!";
} 
else if (day === "Thursday") {
     message = "It's Thursday!";
} 
else if (day === "Friday") {
     message = "It's Friday!";
} 
else if (day === "Saturday") {
     message = "It's Saturday!";
} 
else if (day === "Sunday") {
     message = "It's Sunday!";
} 
else {
     message = "Invalid day!";
}

console.log(message);


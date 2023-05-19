let username, password, role;

function login() {
  username = prompt("Please enter your username:");
  password = prompt("Please enter your password:");
  role = prompt("Enter your role (admin, teacher, student):");


  if (!username || !password || !role) {
    
    alert("Please provide all required information.");
  } else {
    
    switch (role) {
      case "admin":
        alert("Welcome back to the class portal, admin!");
        break;
      case "teacher":
        alert("Thank you for logging in, teacher!");
        break;
      case "student":
        alert("Welcome to the class portal, student!");
        break;
      default:
        alert("Role out of range.");
        break;
    }
  }
}


function calculateAverage(a, b, c, d) {
  
  let average;

  
  average = (a + b + c + d) / 4;

  
  average = Math.round(average);

  
  console.log("Average:", average);

  
  if (average <= 74) {
    console.log("Hello, student, your average is", average + ". The letter equivalent is F");
  } else if (average >= 70 && average <= 80) {
    console.log("Hello, student, your average is", average + ". The letter equivalent is B");
  } else if (average >= 80&& average <= 90) {
    console.log("Hello, student, your average is", average + ". The letter equivalent is A");
  } else if (average > 95) {
    console.log("Hello, student, your average is", average + ". The letter equivalent is A+");
  }
}


login();

calculateAverage(80, 85, 90, 95);

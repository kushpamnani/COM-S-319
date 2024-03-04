// Author: Kush Pamnani
// ISU Netid : kushp@iastate.edu
// Date : February 15th, 2024

//1. function to find the maximum of two parameters
function maxOfTwo(n1, n2) {
  return n1 > n2 ? n1 : n2;
}

//2. function to find the maximum of two arrays
//this function interates over through the array and compares each element with the max value
function maxOfArray(array) {
  if (array.length === 0) return -Infinity; // Returns -Infinity if the array is empty
  let max = array[0]; // Initialize max with the first element of the array
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i]; // Update max if a larger number is found
    }
  }
  return max; // Return the maximum value found
}

//3. function that displays properties (keys) and theird values for a given object
function showProperties(movie) {
  for (let key in movie) {
    console.log(key, ": ", movie[key]);
  }
}

//4. creates a circle object with an area function, which calculates the area of the circle based on its radius
function Circle(radius) {
  this.radius = radius;

  this.area = function () {
    return Math.PI * this.radius * this.radius;
  };
}

//5. function that extends a Circle object with getter and setter for radius
function Circle2(radius) {
  this.radius = radius;

  this.getRadius = function () {
    return this.radius;
  };

  this.setRadius = function (newRadius) {
    this.radius = newRadius;
  };

  this.area = function () {
    return Math.PI * this.radius * this.radius;
  };
}

//6. Implementing the function using javaScript's property accessors (getters and setters)
function Circle3(initialRadius) {
  let radius = initialRadius; // Encapsulate the radius within the scope of the Circle3 function

  Object.defineProperty(this, "radius", {
    get: function () {
      return radius;
    },
    set: function (newRadius) {
      if (newRadius > 0) {
        // Optional: add validation to ensure radius is positive
        radius = newRadius;
      }
    },
  });

  this.area = function () {
    return Math.PI * radius * radius; // Use the encapsulated radius variable
  };
}

//7. function which calculates the average grade of students containing different subject grades
function calculateAverageGrade(grades) {
  let total = 0;
  let count = 0;

  for (let key in grades) {
    if (grades.hasOwnProperty(key)) {
      total += grades[key];
      count++;
    }
  }

  return count > 0 ? total / count : 0;
}

//8. function that calculates and returns average grade for all students
function calculateAverageGrade(students) {
  const averages = {};

  students.forEach((student) => {
    for (let name in student) {
      const grades = student[name];
      let sum = 0;
      let count = 0;
      for (let subject in grades) {
        sum += grades[subject];
        count++;
      }
      averages[name] = sum / count;
    }
  });

  return averages;
}

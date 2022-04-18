//Assignment 03 - Constructors and Data


//fetch('./data/data.json')
//  .then((response) => {
  //  return response.json()
//  })
//  .then((data) => {
    // Work with JSON data here

//    console.log(data)
//let x = data;
//console.log(x)
//})
//  .catch((err) => {
    // Do something for an error here
//  })



const carsJSON = `[
  {
    "name": "PPaolo Maldini",
    "jobTitle": "Front End Developer",
    "company": "Web Weavers",
    "experience": "3 years",
    "school": "University of Washington",
    "major": "Marketing",
    "email": "paolo@example.com",
    "linkedInUrl": "paolo.linkedinprofile.com",
    "codeLanguages": [
        "HTML", "CSS", "JavaScript", "Node", "Express"
    ]
  },
  {
    "name": "Barbara Bonansea",
    "jobTitle": "Software Engineer",
    "company": "Excellence in the Cloud",
    "experience": "12 years",
    "school": "University of Southern California",
    "major": "Computer Science",
    "email": "barbara@example.com",
    "linkedInUrl": "barbara.linkedinprofile.com",
    "codeLanguages": [
        "HTML", "JavaScript", "C", "Go"
    ]
  },
  {
    "name": "Javier Hernandez",
    "jobTitle": "User Experience Engineer",
    "company": "Web Sites and More",
    "experience": "5 years",
    "school": "Seattle University",
    "major": "Performing Arts",
    "email": "javier@example.com",
    "linkedInUrl": "javier.linkedinprofile.com",
    "codeLanguages": [
        "HTML", "CSS"
    ]
  },
  {
    "name": "Maribel Dominguez",
    "jobTitle": "Front End Engineer",
    "company": "Bits and Bytes",
    "experience": "6 years",
    "school": "University of Washington",
    "major": "Mechanical Engineering",
    "email": "maribel@example.com",
    "linkedInUrl": "maribel.linkedinprofile.com",
    "codeLanguages": [
       "HTML", "CSS", "JavaScript", "React", "Vue", "Redux"
    ]
  }
]`

const cars = JSON.parse(carsJSON)
console.log(Object.entries(cars));
console.log(Object.values(cars));



const container = document.querySelector('#list-container')

 //Loop through all elements of the list
let carsHTML = cars.map(function(el) {
let car =`<article class="car">
   <ul>
    <li class="left1">Name: ${el.name}</li>
    <li class="right">School: ${el.school}</li>
    <li class="right">Major: ${el.major}</li>
    <li class="right">Email: ${el.email}</li>
   </ul>
  </article>`;

console.log(car);

return car;

})

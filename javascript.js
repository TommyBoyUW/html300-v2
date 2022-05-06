

// Code that requires the DOM be loaded should not be run until the DOM is loaded
document. addEventListener("DOMContentLoaded", function(){

//locate form andle submit event
const form1 = document.querySelector('#form1')


form1.addEventListener('submit', function(event){
//Prevent 404 error from form trying to send to server
	event.preventDefault()
  // Handle input
  const userInput1 = document.querySelector('#form1 .input').value
const userNumber1 = parseInt(userInput1)

	// Proceed if a number
	if(!isNaN(userNumber1)){

//set array
    let array1 = [11,22,33,44,55,66,77,88];
		//use ES6 Fid method
let results1 = array1.find(value => value > userInput1);
	//output the result of the input
		const text = document.createTextNode(`Input of ${userInput1} results in ${results1} using the Find method`)
    const p = document.createElement('p')
    p.appendChild(text)
    this.appendChild(p)
    this.classList.add('submitted')
	}});


//locate form andle submit event
  const form2 = document.querySelector('#form2')
//Prevent 404 error from form trying to send to server
form2.addEventListener('submit', function(event){
	event.preventDefault()
  // Handle input
  const userInput2 = document.querySelector('#form2 .input').value
const userNumber2 = parseInt(userInput2)
	// Proceed if a number
  if(!isNaN(userNumber2)){
  	// Handle output
		//set array
    let array2 = [11,22,33,44,55,66,77,88];
				//use ES6 filter method
let results2 = array2.filter(function(value){
      return value > userNumber2;
    })
			//output the result of the input
		const text = document.createTextNode(`Input of ${userInput2} results in ${results2} using the ES6 Filter method`)
    const p = document.createElement('p')
    p.appendChild(text)
    this.appendChild(p)
    this.classList.add('submitted')
	}});



//locate form andle submit event
    const form3 = document.querySelector('#form3')
//Prevent 404 error from form trying to send to server
form3.addEventListener('submit', function(event){
	event.preventDefault()
  // Handle input
  const userInput3 = document.querySelector('#form3 .input').value
const userNumber3 = parseInt(userInput3)
	// Proceed if a number
	if(!isNaN(userNumber3)){

//set array
    let array3 = [11,22,33,44,55,66,77,88];
				//use ES6 every method
let results3 = array3.every(function(value){
      return value > userInput3;
      })
	//output the result of the input
		const text = document.createTextNode(`Input of ${userInput3} results in ${results3} using the ES6 Every method`)
    const p = document.createElement('p')
    p.appendChild(text)
    this.appendChild(p)
    this.classList.add('submitted')
	}});




//locate form andle submit event
    const form4 = document.querySelector('#form4')
//Prevent 404 error from form trying to send to server
form4.addEventListener('submit', function(event){
	event.preventDefault()
  // Handle input
  const userInput4 = document.querySelector('#form4 .input').value
const userNumber4 = parseInt(userInput4)
	// Proceed if a number
  if(!isNaN(userNumber4)){


    let array4 = [11,22,33,44,55,66,77,88];
				//use ES6 includes method
let results4 = array4.includes(userNumber4);
	//output the result of the input
		const text = document.createTextNode(`Input of ${userInput4} results in ${results4} using the ES6 Includes method`)
    const p = document.createElement('p')
    p.appendChild(text)
    this.appendChild(p)
    this.classList.add('submitted')
	}});
})

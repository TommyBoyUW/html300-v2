
//Assignment 03 - Constructors and Data

//fetch JSON data from file
fetch('./data/data.json')
          .then(function (response) {
              return response.json();
          })
          //address JSON data here
          .then(function (data) {
              appendData(data);

          })
          //catch error if fail to load
          .catch(function (err) {
              console.log('error: ' + err);
          });

function appendData(data) {
const cards = data;
const container = document.querySelector('#template-hook')
let cardList = cards.forEach(function(el){
  // Loop through all elements of the list


    // Build HTML code
    let list = document.createElement('div')
    list.innerHTML = `
    <div class="profile">
      <div class="left">
        <div class="left1">
      <img src="img/headshot.jpg"  class="photo" alt="Paolo is ">
    </div>
    <div class="left1">
      <p class="name">${el.name}</p>
    </div>
    <div class="left1">
      <p class="jobtitle">${el.jobTitle}</p>
    </div>
    </div>
      <div class="right">
        <p><strong>Company: </strong>${el.company}</p>
        <p><strong>Experience: </strong>${el.experience}</p>
        <p><strong>School: </strong>${el.school}</p>
        <p><strong>Major: </strong>${el.major}</p>
        <p><strong>Email: </strong>${el.email}</p><br>
        <p><strong>Languages: </strong>${el.codeLanguages}</p><br>
        <div class="linkedin">
          <div class="linkedin">
        <img src="img/linkedin.svg"  class="logo" alt="linkedin">
      </div>
      <div class="linkedin" id="email">
        <p id="email">${el.linkedInUrl}</p>
      </div>
    </div>
    </div>
  </div>
    `
    // Insert HTML into page
    container.append(list)
  })
};

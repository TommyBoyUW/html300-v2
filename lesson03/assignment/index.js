
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
//insert JSON data, pass to cards
function appendData(data) {
const cards = data;
//hook to body of HTML
const container = document.querySelector('#template-hook');

  // Loop through all elements of the list
 let cardList = cards.map(function(el) {

    // Build HTML code
  let list = document.createElement('div');
//create template literal card
    list.innerHTML =
   `
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
    `;
    // Insert HTML into page
    container.append(list);
});
}

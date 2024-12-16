function myFunction() {
  // This function will change the content of the 'demo' paragraph
  document.getElementById("demo").innerHTML = "I can change paragraphs at the click of a button!";
}

function myFunction2() {
  // This function will retrieve the first paragraph (name) and display it as the website owner's name
  const element = document.getElementsByTagName("p"); // Get all <p> elements
  const name = element[0].innerHTML; // The first <p> contains the name: "Ric Brian P. Boado"
  document.getElementById("demo").innerHTML = 'The owner of this website is... ' + name;
}

function changeProfilePicture() {
  // This function will change the profile picture dynamically
  document.getElementById("profileImage").src = "https://via.placeholder.com/200"; // New image URL
}
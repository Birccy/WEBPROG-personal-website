// This function will change the content of the 'demo' paragraph
function myFunction() {
  document.getElementById("demo").innerHTML = "I can change paragraphs at the click of a button!";
}

// This function will retrieve the first paragraph (name) and display it as the website owner's name
function myFunction2() {
  const element = document.getElementsByTagName("p"); // Get all <p> elements
  const name = element[0].innerHTML; // The first <p> contains the name: "Ric Brian P. Boado"
  document.getElementById("demo").innerHTML = 'The owner of this website is... ' + name;
}

// Array of random profile picture URLs
const randomImages = [
    "https://via.placeholder.com/200/FF0000/FFFFFF?text=Random+1",
    "https://via.placeholder.com/200/00FF00/FFFFFF?text=Random+2",
    "https://via.placeholder.com/200/0000FF/FFFFFF?text=Random+3",
    "https://via.placeholder.com/200/FFFF00/FFFFFF?text=Random+4",
    "https://via.placeholder.com/200/FF00FF/FFFFFF?text=Random+5"
];

// Function to change profile picture to a random one
function changeProfilePicture() {
  var profilePic = document.getElementById("profileImage");
  
  // Check if the profile image element exists
  if (profilePic) {
    // Generate a random index between 0 and the length of the randomImages array
    var randomIndex = Math.floor(Math.random() * randomImages.length);

    // Change the src attribute to a randomly selected image from the array
    profilePic.src = randomImages[randomIndex];
  } else {
    console.error("Profile image element not found.");
  }
}
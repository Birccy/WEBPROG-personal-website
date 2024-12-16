function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
  }


  function myFunction2() {
    const element = document.getElementsByTagName("p");
    document.getElementById("demo").innerHTML = 'The name of the website ' + element[0].innerHTML;
  }
document.addEventListener("DOMContentLoaded", function () {
  var button = document.getElementById("search-btn");

  button.addEventListener("click", function () {
    fetch("superheroes.php")
      .then(function (response) {
        return response.text();
      })
      .then(function (data) {
        alert(data);
      })
      .catch(function (error) {
        alert("Something went wrong: " + error);
      });
  });
});

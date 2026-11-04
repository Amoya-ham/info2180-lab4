document.addEventListener("DOMContentLoaded", function () {
  var button = document.getElementById("search-btn");
  var input = document.getElementById("search-input");
  var result = document.getElementById("result");

  button.addEventListener("click", function () {
    var query = input.value.trim();

    fetch("superheroes.php?query=" + encodeURIComponent(query))
      .then(function (response) {
        return response.text();
      })
      .then(function (data) {
        result.innerHTML = data;
      })
      .catch(function (error) {
        result.innerHTML = "<p class='not-found'>Something went wrong.</p>";
      });
  });
});

const searchInput = document.querySelector("#actions__input");
const searchBtn = document.querySelector(".actions__btn");

searchInput.addEventListener("input", function (e) {
  const pokeNames = document.querySelectorAll(".poke-name");
  const search = searchInput.value.toLowerCase();

  pokeNames.forEach((pokeName) => {
    pokeName.parentElement.style.display = "block";

    if (!pokeName.innerHTML.toLowerCase().includes(search)) {
      pokeName.parentElement.style.display = "none";
    }
  });
});

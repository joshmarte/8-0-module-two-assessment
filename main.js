fetch("https://ghibliapi.herokuapp.com/films").then((res) => {
  res.json().then((data) => {
    for (let item of data) {
      let option = document.createElement("option");
      option.value = item.title;
      option.textContent = item.title;

      if (item.title === "Castle in the Sky") {
        option.setAttribute("selected", "selected");
      }
      document.querySelector("#moviesList").append(option);
    }
  });
});

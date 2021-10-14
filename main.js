fetch("https://ghibliapi.herokuapp.com/films").then((res) => {
  res.json().then((data) => {
    for (let i = 0; i < data.length; i++) {
      let option = document.createElement("option");
      option.value = i;
      option.textContent = data[i].title;

      if (data[i].title === "Castle in the Sky") {
        option.setAttribute("selected", "selected");
      }
      document.querySelector("#moviesList").append(option);
    }

    document
      .querySelector("#dropDown select")
      .addEventListener("change", (event) => {
        document.querySelector("#display-info h3").textContent =
          data[event.target.value].title;
        document.querySelector("#display-info #year").textContent =
          data[event.target.value].release_date;
        document.querySelector("#display-info #desc").textContent =
          data[event.target.value].description;
      });
  });
});

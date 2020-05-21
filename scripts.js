document.addEventListener("DOMContentLoaded", function () {
  let button = document.createElement("button");
  button.innerText = "Add Square";
  document.body.appendChild(button);


  let colors = ["red", "green", "blue"];

  button.addEventListener("click", function () {
    let blackSquare = document.createElement("div");
    blackSquare.className = "square";
    blackSquare.id = "squareNum";
    document.body.appendChild(blackSquare);
        
    blackSquare.addEventListener("click", function () {
      let randomColor = Math.floor(Math.random() * 3);
      blackSquare.style.backgroundColor = colors[randomColor];
    });
  });
});

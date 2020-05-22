document.addEventListener("DOMContentLoaded", function () {
  let button = document.createElement("button");
  button.innerText = "Add Square";
  document.body.appendChild(button);


  let colors = ["red", "green", "blue"];
  let squareNum = 1

  button.addEventListener("click", function () {
    let blackSquare = document.createElement("div");
    blackSquare.innerText = squareNum++;
    blackSquare.className = "square";
    document.body.appendChild(blackSquare);
        
    blackSquare.addEventListener("click", function () {
      let randomColor = Math.floor(Math.random() * 3);
      blackSquare.style.backgroundColor = colors[randomColor];
    });
  });
});

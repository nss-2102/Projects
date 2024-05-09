function selectColor() {
    var selectedColor = document.getElementById("colorPicker").value;
    document.querySelector(".column").style.backgroundColor = selectedColor;

    document.getElementById("hexCode").value = selectedColor;
  }
  document
    .getElementById("colorPicker")
    .addEventListener("input", selectColor);
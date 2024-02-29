function clickButton(name) {
  let div = document.getElementById("tag");
  div.style.backgroundColor = div.style.backgroundColor === name ? "transparent" : name;
  div.innerText = name + "Tag";
}

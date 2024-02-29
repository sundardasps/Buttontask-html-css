function clickButton(name) {
  let div = document.getElementById("tag");
  div.style.backgroundColor = div.style.backgroundColor === name ? null : name;
  div.innerText = div.style.backgroundColor === name ? name : null;
}

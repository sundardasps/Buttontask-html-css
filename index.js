function clickButton(name) {
  let div = document.getElementById(`tag-${name}`);
  div.style.backgroundColor =
    div.style.backgroundColor === name ? "transparent" : name;
}

let portion = 0;

function refresh() {
  // Finds the span with id="portion" and updates its text
  document.getElementById("portion").innerText = portion;
}

function more() {
  if (portion < 10) {
    portion++;
    refresh();
  }
}

function less() {
  if (portion > 0) {
    portion--;
    refresh();
  }
}
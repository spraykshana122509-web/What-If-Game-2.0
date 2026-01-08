let ideas = [];

function addIdea() {
  const input = document.getElementById("ideaInput");
  if (input.value.trim() !== "") {
    ideas.push(input.value);
    input.value = "";
    alert("Added!");
  } else {
    alert("Please type a What If idea!");
  }
}

function spin() {
  if (ideas.length === 0) {
    alert("Add at least one What If idea first!");
    return;
  }
  const random = Math.floor(Math.random() * ideas.length);
  document.getElementById("result").innerText = ideas[random];
}

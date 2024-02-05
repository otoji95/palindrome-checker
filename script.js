function palindrome(str) {
  return true;
}

console.log(palindrome("A man, a plan, a canal. Panama"));

const button = document.getElementById("check-btn");
const input = document.getElementById("text-input");
function handleInputCheck(e) {
  e.preventDefault();
  if (input.value == "") {
    alert("Please input a value.");
  }
}

button.addEventListener("click", handleInputCheck);

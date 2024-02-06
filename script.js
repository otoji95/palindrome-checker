function isPalindrome(str) {
  if (str.length == 1) return true;

  let matches = str
    .match(/[A-Za-z0-9]+/g)
    .join("")
    .toLowerCase();
  for (let i = 0, j = matches.length - 1; i < j; i++, j--) {
    if (matches[i] !== matches[j]) {
      return false;
    }
  }
  return true;
}

const button = document.getElementById("check-btn");
const input = document.getElementById("text-input");
const result = document.getElementById("result");
const para = document.createElement("p");
result.appendChild(para);

function handleInputCheck(e) {
  e.preventDefault();
  if (input.value == "") {
    alert("Please input a value.");
  }

  let answer = palindrome(input.value);
  para.innerText = answer ? `${input.value} is a palindrome.` : `${input.value} is not a palindrome.`;
}

button.addEventListener("click", handleInputCheck);

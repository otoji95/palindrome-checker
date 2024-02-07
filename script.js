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
const strong = document.createElement("strong");
result.appendChild(para);
para.appendChild(strong);
para.setAttribute("id", "input-return");

function handleInputCheck(e) {
  e.preventDefault();
  if (input.value == "") {
    alert("Please input a value.");
    return;
  }

  let answer = isPalindrome(input.value);
  strong.innerText = input.value;

  if (para.childNodes.length > 1) {
    para.removeChild(para.childNodes[1]);
  }

  const resultText = document.createTextNode(answer ? " is a palindrome." : " is not a palindrome.");
  if (para.childNodes.length === 1) {
    para.appendChild(resultText);
  } else {
    para.insertBefore(resultText, para.childNodes[1]);
  }
}

button.addEventListener("click", handleInputCheck);

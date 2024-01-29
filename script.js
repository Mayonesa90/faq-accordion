const text = document.querySelectorAll("#card-content");
const btn = document.querySelectorAll("#card-btn");

btn[0].addEventListener("click", () => expand(text[0], btn[0]));
btn[1].addEventListener("click", () => expand(text[1], btn[1]));
btn[2].addEventListener("click", () => expand(text[2], btn[2]));
btn[3].addEventListener("click", () => expand(text[3], btn[3]));

function expand(currentText, currentBtn) {
    if (currentText.style.display == "none") {
        currentText.style.display = "block";
        currentBtn.style.backgroundImage = "url('assets/images/icon-minus.svg')";
    } else {
        currentText.style.display = "none";
        currentBtn.style.backgroundImage = "url('assets/images/icon-plus.svg')";
    }
    //currentText.style.display = "none";
}

// function toggleText(currentText) {
//     if ()
//     currentText.toggle(() => expand(currentText));
// }

console.log(text)


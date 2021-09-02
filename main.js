const inputEl = document.querySelector(".to-copy");
const inputPaste = document.querySelector(".to-paste");
let writeBtn = document.querySelector(".write-btn");
let readBtn = document.querySelector(".read-btn");

const results = document.querySelector(".clipboard-results");

// console.log(writeBtn, readBtn, results);
// The way i understand
// 1) Write to Clipboard

writeBtn.addEventListener("click", () => {
  const inputValue = inputEl.value.trim();
  if (inputValue) {
    navigator.clipboard
      .writeText(inputValue)
      .then(() => {
        inputEl.value = "";
        if (writeBtn.innerText !== "Copied!") {
          const originalText = writeBtn.innerText;
          writeBtn.innerText = "Copied!";
          setTimeout(() => {
            writeBtn.innerText = originalText;
          }, 1000);
        }
      })
      .catch((err) => {
        console.log("SomeThing went wrong...");
      });
  }
});

//  2) Readin from Clipboard
readBtn.addEventListener("click", () => {
  navigator.clipboard
    .readText()
    .then((text) => {
      inputPaste.value = text;
    })
    .catch((err) => {
      console.log(err);
    });
});

//   Writing to the Clipboard
// navigator.clipboard
//   .writeText("Hello")
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log("SomeThing went wrong...");
//   });

// //Reading from The clipboard
// navigator.clipboard
//   .readText()
//   .then((text) => {
//     console.log(text);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

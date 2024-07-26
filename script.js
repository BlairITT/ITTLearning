document
  .getElementById("dataForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const inputField = document.getElementById("inputField").value;
    const resultDiv = document.getElementById("result");

    puter.kv
      .set("userInput", inputField)
      .then(() => {
        return puter.kv.get("userInput");
      })
      .then((value) => {
        resultDiv.innerHTML = "Response from Puter: " + value;
      })
      .catch((error) => {
        resultDiv.innerHTML = "Error: " + error.message;
      });
  });

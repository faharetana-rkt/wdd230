const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener('click', () => {
    if (input.value !== "") {
        const newList = document.createElement("li");
        const delButton = document.createElement("button");
        newList.textContent = input.value;
        delButton.textContent = "❌";
        delButton.ariaLabel = `Deleting ${input.value}`;
        newList.append(delButton);
        list.append(newList);
        delButton.addEventListener('click', () => {
            newList.remove();
            input.focus();
        })
        input.value = "";
    } else {
        alert("Please enter your favorite scripture.")
        input.focus();
    }
})

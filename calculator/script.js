const display = document.getElementById("display");

const buttons = document.querySelectorAll(".buttons");

let expression = "";

buttons.forEach((button) => {

    button.addEventListener("click", () => {

        const value = button.value;

        // CLEAR
        if (value === "C") {
            expression = "";
            display.innerText = "0";
        }

        // EQUALS
        else if (value === "=") {

            try {
                expression = eval(expression).toString();
                display.innerText = expression;
            }

            catch (error) {
                display.innerText = "Error";
                expression = "";
            }

        }

        // NORMAL BUTTONS
        else {
            expression += value;
            display.innerText = expression;
        }

    });

});
let num = Number(prompt("Enter a number bigger than 100", 0));

while (num <= 100) {
    if (confirm("Please obey!")) {
        num = prompt("Enter it", 0);
    }
    else alert("You're going to hell");
}

alert("Thank you!");
 // Function to change button color
 function changeColor() {
    const button = document.querySelector('.color-button');
    const colors = ['red', 'green', 'blue', 'yellow', 'purple'];
    const currentColor = button.style.backgroundColor;
    let newColor;
    do {
        newColor = colors[Math.floor(Math.random() * colors.length)];
    } while (newColor === currentColor);
    button.style.backgroundColor = newColor;
}

// Function to display greeting based on current time
function displayGreeting() {
    const now = new Date();
    const hours = now.getHours();
    let greeting;
    if (hours < 12) {
        greeting = "Good morning!";
    } else if (hours < 18) {
        greeting = "Good afternoon!";
    } else {
        greeting = "Good evening!";
    }
    alert(greeting);
}

// calculate the sum of two numbers
function calculateSum() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers");
        return;
    }
    const sum = num1 + num2;
    document.getElementById('result').innerText = `Result: ${sum}`;
}
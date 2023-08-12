const resultElement = document.getElementById('lr');
    const buttons = document.querySelectorAll('.btnbox');
    let currentInput = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const buttonText = button.textContent;

            if (buttonText === 'DEL') {
                currentInput = currentInput.slice(0, -1); // Remove the last character
            } else if (buttonText === 'RESET') {
                currentInput = ' ';
            } else if (buttonText === '=') {
                try {
                    currentInput = eval(currentInput).toString();
                } catch (error) {
                    currentInput = 'Error';
                }
            } else {
                currentInput += buttonText;
            }

            resultElement.textContent = currentInput;
        });
    });
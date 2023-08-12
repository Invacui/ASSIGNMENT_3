const resultElement = document.getElementById('lr');
    const buttons = document.querySelectorAll('.btnbox');
    let currentInput = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const buttonText = button.textContent;

            if (buttonText === 'DEL') {
                currentInput = currentInput.slice(0, -1); // Remove the last character
            } else if (buttonText === 'RESET') {
                currentInput = '0';
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

            // Set opacity based on currentInput value
            if (currentInput === '' || currentInput === '0') {
                resultElement.style.opacity = '0.5';
            } else {
                resultElement.style.opacity = '1';
            }

        });
    });
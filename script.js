// Function to show a specific message and hide others
function showMessage(messageNumber) {
    // Get all message boxes
    const messageBoxes = document.querySelectorAll('.message-box');
    
    // Hide all message boxes
    messageBoxes.forEach(box => {
        box.classList.add('hidden');
    });
    
    // Show the selected message box
    const selectedMessageBox = document.getElementById(`message${messageNumber}`);
    selectedMessageBox.classList.remove('hidden');
}
// Function to show a specific message and hide others
function showMessage(messageNumber) {
    // Hide the intro message
    document.getElementById('intro-message').style.display = 'none';
    
    // Get all message boxes
    const messageBoxes = document.querySelectorAll('.message-box');
    
    // Hide all message boxes
    messageBoxes.forEach(box => {
        box.classList.add('hidden');
    });
    
    // Show the selected message box
    const selectedMessageBox = document.getElementById(`message${messageNumber}`);
    selectedMessageBox.classList.remove('hidden');
}

// Function to show the buttons after the intro message is clicked
function showButtons() {
    // Show the navigation buttons by adding the 'show' class
    document.querySelector('.nav-buttons').classList.add('show');
    // Optionally, hide the intro message after the buttons appear
    document.getElementById('intro-message').style.display = 'none';
}

// Call this function when the user clicks the intro message
document.getElementById('intro-message').addEventListener('click', showButtons);
{
    
}
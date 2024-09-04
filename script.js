document.getElementById('showPassword').addEventListener('change', function() {
    const passwordInput = document.getElementById('passwordInput');
    passwordInput.type = this.checked ? 'text' : 'password';
});

document.getElementById('loginButton').addEventListener('click', function() {
    const passwordInput = document.getElementById('passwordInput').value;
    const loginContainer = document.getElementById('loginContainer');
    const setupContainer = document.getElementById('setupContainer');

    // Replace 'yourpassword' with the password you want to set
    if (passwordInput === 'G') {
        loginContainer.style.display = 'none';
        setupContainer.style.display = 'block';
    } else {
        alert('Incorrect password!');
    }
});

document.getElementById('setupButton').addEventListener('click', function() {
    const nameInput = document.getElementById('nameInput').value;
    if (nameInput.trim() !== '') {
        localStorage.setItem('username', nameInput);
        document.getElementById('setupContainer').style.display = 'none';
        document.getElementById('chatContainer').style.display = 'flex';
        initializeChat();
    } else {
        alert('Please enter your name.');
    }
});

document.getElementById('sendButton').addEventListener('click', sendMessage);
document.getElementById('uploadImageButton').addEventListener('click', () => {
    document.getElementById('imageInput').click();
});
document.getElementById('emojiButton').addEventListener('click', () => {
    document.getElementById('emojiPicker').style.display = 'block';
});
document.querySelectorAll('.emoji').forEach(button => {
    button.addEventListener('click', function() {
        const emoji = this.getAttribute('data-emoji');
        document.getElementById('messageInput').value += emoji;
        document.getElementById('emojiPicker').style.display = 'none';
    });
});
document.getElementById('imageInput').addEventListener('change', sendImage);

function initializeChat() {
    const username = localStorage.getItem('username');
    const chatWindow = document.getElementById('chatWindow');

    // Example of pre-filled messages
    const welcomeMessage = document.createElement('div');
    welcomeMessage.className = 'chat-message';
    welcomeMessage.textContent = `Welcome, ${username}!`;
    chatWindow.appendChild(welcomeMessage);
}

function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const chatWindow = document.getElementById('chatWindow');
    const username = localStorage.getItem('username');

    if (messageInput.value.trim() !== '') {
        const messageElement = document.createElement('div');
        messageElement.className = 'chat-message user';
        messageElement.textContent = messageInput.value.trim();
        chatWindow.appendChild(messageElement);
        chatWindow.scrollTop = chatWindow.scrollHeight;

        // Simulate receiving a message
        setTimeout(() => {
            const responseElement = document.createElement('div');
            responseElement.className = 'chat-message other';
            responseElement.textContent = `${username} received your message.`;
            chatWindow.appendChild(responseElement);
            chatWindow.scrollTop = chatWindow.scrollHeight;
        }, 1000);

        messageInput.value = '';
    }
}

function sendImage(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const chatWindow = document.getElementById('chatWindow');
            const imgElement = document.createElement('img');
            imgElement.src = e.target.result;
            imgElement.className = 'chat-image';
            imgElement.style.maxWidth = '100%';
            imgElement.style.marginBottom = '10px';
            chatWindow.appendChild(imgElement);
            chatWindow.scrollTop = chatWindow.scrollHeight;
        };
        reader.readAsDataURL(file);
    }
}

// Function to simulate sending notifications
function sendNotification() {
    if (Notification.permission === 'granted') {
        new Notification('New Message', {
            body: 'You have received a new message.',
            icon: 'notification-icon.png' // Provide path to an icon image
        });
    }
}

// Request notification permission
if (Notification.permission !== 'denied') {
    Notification.requestPermission();
}

// Simulate receiving a new message
setTimeout(sendNotification, 5000); // Simulate after 5 seconds

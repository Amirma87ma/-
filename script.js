const chatHistory = document.getElementById('chat-history');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

// Dummy data for chat history
const chatMessages = [
  {
    text: 'Hello! How are you today?',
    sender: 'Bot',
  },
  {
    text: 'I am a simple text chat program.',
    sender: 'Bot',
  },
];

// Function to add a new message to the chat history
function addMessage(message) {
  const chatMessage = document.createElement('div');
  chatMessage.classList.add('chat-message');
  if (message.sender === 'User') {
    chatMessage.classList.add('user-message');
  } else {
    chatMessage.classList.add('bot-message');
  }
  chatMessage.textContent = message.text;
  chatHistory.appendChild(chatMessage);
  chatHistory.scrollTop = chatHistory.scrollHeight;
}

// Function to send a message from the user
function sendUserMessage() {
  const userMessage = {
    text: messageInput.value,
    sender: 'User',
  };
  addMessage(userMessage);
  messageInput.value = '';
  // Add your code to send the message to the server here
}

// Add event listener to send button
sendButton.addEventListener('click', sendUserMessage);

// Add

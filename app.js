
const johnSelectorBtn = document.querySelector('#john-selector');
const janeSelectorBtn = document.querySelector('#jane-selector');
const chatHeader = document.querySelector('.chat-header');
const chatMessages = document.querySelector('.chat-messages');
const chatInputForm = document.querySelector('.chat-input-form');
const chatInput = document.querySelector('.chat-input');


let messageSender = "John"
const updateMessageSender = (name) => {
    messageSender = name;
    chatHeader.innerText = `${messageSender} chatting...`;
    chatInput.placeholder = `Type here, ${messageSender}...`;
  
    if (name === 'John') {
      johnSelectorBtn.classList.add('active-person-btn');
      janeSelectorBtn.classList.remove('active-person-btn');
    }
    if (name === 'Jane') {
      janeSelectorBtn.classList.add('active-person-btn');
      johnSelectorBtn.classList.remove('active-person-btn');
    }

    // auto-focus on input field
    chatInput.focus();
}

johnSelectorBtn.onclick = () => updateMessageSender('John');
janeSelectorBtn.onclick = () => updateMessageSender('Jane');

const createChatMessageElement = (message) => `
  <div class="message ${message.sender === 'John' ? 'sender-bg' : 'receiver-bg'}">
    <div class="message-sender">${message.sender}</div>
    <div class="message-text">${message.text}</div>
    <div class="message-timestamp">${message.timestamp}</div>
  </div>
`

const sendMessage = (e) => {
    e.preventDefault();

    const timestamp = new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true});

    const message = {
        sender: messageSender,
        text: chatInput.value,
        timestamp,
      }

    //   Add message to the DOM
    chatMessages.innerHTML += createChatMessageElement(message)
      /* Clear input field */
  chatInputForm.reset()

}

chatInputForm.addEventListener('submit', sendMessage)
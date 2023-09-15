
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
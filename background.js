chrome.action.onClicked.addListener((tab) => {
  chrome.storage.sync.get(['passwordLength', 'includeUppercase', 'includeNumbers', 'includeSymbols'], (settings) => {
    const password = generatePassword(settings.passwordLength, settings.includeUppercase, settings.includeNumbers, settings.includeSymbols);
    copyToClipboard(password);
  });
});

function generatePassword(length = 12, includeUppercase = true, includeNumbers = true, includeSymbols = true) {
  const lowercase = 'abcdefghijklmnopqrstuvwxyz';
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  const symbols = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

  let characters = lowercase;
  if (includeUppercase) characters += uppercase;
  if (includeNumbers) characters += numbers;
  if (includeSymbols) characters += symbols;

  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    console.log('Password copied to clipboard');
  });
}
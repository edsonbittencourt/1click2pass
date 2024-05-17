document.addEventListener('DOMContentLoaded', () => {
    chrome.storage.sync.get(['passwordLength', 'includeUppercase', 'includeNumbers', 'includeSymbols'], (settings) => {
      document.getElementById('passwordLength').value = settings.passwordLength || 12;
      document.getElementById('includeUppercase').checked = settings.includeUppercase !== false;
      document.getElementById('includeNumbers').checked = settings.includeNumbers !== false;
      document.getElementById('includeSymbols').checked = settings.includeSymbols !== false;
    });
  
    document.getElementById('save').addEventListener('click', () => {
      const passwordLength = parseInt(document.getElementById('passwordLength').value);
      const includeUppercase = document.getElementById('includeUppercase').checked;
      const includeNumbers = document.getElementById('includeNumbers').checked;
      const includeSymbols = document.getElementById('includeSymbols').checked;
  
      chrome.storage.sync.set({
        passwordLength,
        includeUppercase,
        includeNumbers,
        includeSymbols
      }, () => {
        alert('Settings saved');
      });
    });
  });
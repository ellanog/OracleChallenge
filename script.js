function encryptText() {
    let inputText = document.getElementById('inputText').value;
    let encryptedText = inputText.replace(/[aeiou]/g, function (match) {
        return match === 'a' ? 'ai' :
               match === 'e' ? 'enter' :
               match === 'i' ? 'imes' :
               match === 'o' ? 'ober' :
               'ufat';
    });
    document.getElementById('outputText').value = encryptedText;
}

function decryptText() {
    let inputText = document.getElementById('inputText').value;
    let decryptedText = inputText.replace(/ai|enter|imes|ober|ufat/g, function (match) {
        return match === 'ai' ? 'a' :
               match === 'enter' ? 'e' :
               match === 'imes' ? 'i' :
               match === 'ober' ? 'o' :
               'u';
    });
    document.getElementById('outputText').value = decryptedText;
}

document.getElementById('encryptBtn').addEventListener('click', encryptText);
document.getElementById('decryptBtn').addEventListener('click', decryptText);

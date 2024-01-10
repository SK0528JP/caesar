function encrypt() {
    var message = document.getElementById("message").value;
    var shift = parseInt(document.getElementById("shift").value);
    var result = document.getElementById("result");

    if (!message || isNaN(shift)) {
        alert("フォーマットテキスト・鍵番号を入力してください。");
        return;
    }

    var encryptedMessage = caesarCipher(message, shift);
    result.value = encryptedMessage;
}

function decrypt() {
    var message = document.getElementById("message").value;
    var shift = parseInt(document.getElementById("shift").value);
    var result = document.getElementById("result");

    if (!message || isNaN(shift)) {
        alert("フォーマットテキスト・鍵番号を入力してください。");
        return;
    }

    var decryptedMessage = caesarCipher(message, -shift);
    result.value = decryptedMessage;
}

function caesarCipher(message, shift) {
    return message.split('').map(function (char) {
        if (char.match(/[a-z]/i)) {
            var code = char.charCodeAt();
            var offset = char.toUpperCase() === char ? 65 : 97;
            char = String.fromCharCode((code - offset + shift + 26) % 26 + offset);
        }
        return char;
    }).join('');
}

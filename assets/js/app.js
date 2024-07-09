const regex = /^[a-z\s]+$/;

function showNoMessageStyle() {
    document.getElementById("enc-dec-text-section").style.display = "none";
    document.getElementById("rigth-section-img").style.display = "block";
    document.getElementById("rigth-section-text").style.display = "block";
}

function showOutputMessageStyle() {
    document.getElementById("rigth-section-img").style.display = "none";
    document.getElementById("rigth-section-text").style.display = "none";
    document.getElementById("enc-dec-text-section").style.display = "block";
    document.getElementById("enc-dec-text-output").style.display = "block";
}

function encrypt() {
    let userInput = document.getElementById("text-input").value

    if (userInput === '') {
        showNoMessageStyle();
    } else if (regex.test(userInput)) {
        let outputMessage = userInput.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat');
        showOutputMessageStyle()
        document.getElementById("enc-dec-text-output").textContent = outputMessage;
    } else {
        alert('Por favor ingrese solo letras minúsculas, el uso de numeros tampoco esta permitido.');
    }
    return
}

function copyText() {
    let outputMessage = document.getElementById("enc-dec-text-output").textContent;
    navigator.clipboard.writeText(outputMessage).then(() => {
        alert('Mensaje copiado exitosamente al portapapeles');
    }).catch(err => {
        alert('Ocurrio un error al copiar el mensaje al portapapeles, por favor intente de nuevo.');
        console.error('Error al copiar el mensaje: ', err);
    });
}

function decrypt() {
    let userInput = document.getElementById("text-input").value

    if (userInput === '') {
        showNoMessageStyle();
    } else if (regex.test(userInput)) {
        let outputMessage = userInput.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u');
        showOutputMessageStyle()
        document.getElementById("enc-dec-text-output").textContent = outputMessage;
    } else {
        alert('Por favor ingrese solo letras minúsculas, el uso de numeros tampoco esta permitido.');
    }

    return
}
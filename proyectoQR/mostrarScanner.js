document.getElementById('button-scanner').addEventListener('click', function() {
    iniciarEscaneo();
    document.getElementById('container').style.display = 'block';
})

function closeSesion() {
    document.getElementById('container').style.display = 'none'
}


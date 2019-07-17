function carregar() {
var msg = window.document.getElementById('msg');
var img = window.document.getElementById('imagem');
var data = new Date();
var hora = data.getHours();
msg.innerHTML = `It's ${hora} o'clock.`;

if (hora >= 0 && hora < 12) {
    //BOM DIA!
    img.src = 'img/dia.jpg';
    document.body.style.background = '#5a9aad';
} else if (hora >= 12 && hora <= 18){
    //Boa tarde
    img.src = 'img/tarde.jpg';
    document.body.style.background = '#F9BA72';

} else {
    // Boa noite
    img.src = 'img/noite.jpg'
    document.body.style.background = '#553CB6';

}
}

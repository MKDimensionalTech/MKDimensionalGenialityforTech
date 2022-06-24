window.onload = function(){
    const h = document.getElementById('Historia')
    const main = document.getElementById('fehatb');
    main.addEventListener('click', fecha)
    const bclose= document.getElementById('fechar');
    bclose.addEventListener('click', fechar)
    const bopen = document.getElementById('abrir');
    bopen.addEventListener('click', abre)
    const esconder = document.getElementsByClassName('esconder');
    window.document.write ('aaaaaaaaa' + h.innerHTML)
    function abre(){
        bclose.style.visibility='visible'
        bopen.style.visibility='hidden'
        esconder.style.visibility='visible'
        window.alert('menu abriu')
    }
    function fechar(){
        bclose.style.visibility='hidden'
        bopen.style.visibility='visible'
        esconder.style.visibility='hidden'
    }
    function fecha(){
        bclose.style.visibility='hidden'
        bopen.style.visibility='visible'
        esconder.style.visibility='hidden'
    }
}
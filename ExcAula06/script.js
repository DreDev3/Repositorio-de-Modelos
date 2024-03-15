function logar() {
    let nome = document.querySelector('.nome')
    let senha = document.querySelector('.senha')
    let tela = document.querySelector('.log')
    let logsair = document.querySelector('.muda')
    let info = document.querySelector('.info')
    let infoD = document.querySelector('.info2')

    if (nome.value.trim() === '') {
        alert('Verificar nome e tentar novamente!')
        e.preventDefault()
    }
    else if (nome = 'André') {
    }

    if (senha.value.trim() === '') {
        alert('Verificar senha e tentar novamente!')
        e.preventDefault()
    }

    else if (senha = 1234) {
        tela.innerHTML = `Bem vindo <p> <strong>${nome}</strong></p>`
        logsair.style.display = 'block'
        info.style.display = 'block'
        infoD.style.display = 'block'
    }
}

function sair() {
    location.reload()
}


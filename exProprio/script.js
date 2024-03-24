//Relógio
function relogio() {
    let rel = document.querySelector('.relogio')
    let data = new Date()
    let h = data.getHours()
    let m = data.getMinutes()

    rel.innerHTML = `${h}:${m}`
}
setInterval(relogio, 1000)
//[FIM] Relógio
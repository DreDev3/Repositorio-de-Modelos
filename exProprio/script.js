//Relógio
function relogio() {
    let rel = document.querySelector('.relogio')
    let data = new Date()
    let h = data.getHours()
    let m = data.getMinutes()

    rel.innerHTML = `${h}:${m}`
}
setInterval(relogio, 1000);
//[FIM] Relógio

//Envio do form de email
(function() {
    emailjs.init("N3QtUB-PvgOmGHV3f")
  })()
  
  function enviar() {
    var nome = document.getElementById("nome").value
    var email = document.getElementById("email").value
    var mensagem = document.getElementById("txtarea").value

    var templateParams = {
      from_name: nome,
      from_email: email,
      message: mensagem
    };
    
    emailjs.send("service_3vd8n7q", "template_v1lpksb", templateParams)
      .then(function(response) {
        alert("E-mail enviado com sucesso!")
      }, function(error) {
        console.error("Erro ao enviar e-mail:", error)
      })
  }
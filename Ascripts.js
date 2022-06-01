Function carregar(){
           Var msg = window.document.getElementById(“msg”)
            Var img = window.document.getElementById(“imagem”)
            Var data = new Date()
            Var hora = date.getHours
            Msg.innerHTML = “As horas são ${hora}  horas.”
        If (hora >= 0 && hora < 12){//bom dia
            Img.src= “fotomanha.png”
            Document.body.style.background=”#e2cd9f”
      } else if(hora >= 12 && hora < 18){//boa tarde
            Img.src=”fototarde”
            Document.body.style.background=”#b9846f”
      }else {//boa noite
            Img.src=”fotonoite.png”
           Document.body.style.background=”#515154”
     }
}

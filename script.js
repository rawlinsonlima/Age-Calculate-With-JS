function carregar() {
  const msg = document.getElementById("msg");
  const img = document.getElementById("imagem");
  const diaMes = document.getElementById("dia");
  const data = new Date();
  const hora = data.getHours();
  const min = data.getMinutes();
  const day = data.getDate();
  const mes = data.getMonth();
  const ano = data.getFullYear();
  msg.innerHTML = `Agora são ${hora}:${min} horas`;
  diaMes.innerHTML = `do dia ${day}/${mes} de ${ano}`;
  if (hora >= 0 && hora < 16) {
    img.src = "./img/manha.jpg";
    document.body.style.background = "#b5b9ba";
  } else if (hora >= 16 && hora <= 18) {
    img.src = "./img/tardinha.jpg";
    document.body.style.background = "#401a00";
  } else {
    img.src = "./img/noite.jpg";
    document.body.style.background = "##433357";
  }
}

function verificar() {
  const data = new Date();
  const ano = data.getFullYear();
  const fAno = document.getElementById("txtano");
  const res = document.querySelector("div#res");
  if (fAno.value.length == 0 || fAno.value > ano) {
    window.alert("[ERROR] Verifique os dados e tente novamente!");
  } else {
    let fSex = document.getElementsByName("radsex");
    const idade = ano - Number(fAno.value);
    let profilePhoto = "";
    let gender = "";

    if (fSex[0].checked) {
      gender = "Homem";
      if (idade >= 0 && idade <= 13) {
        //crianca
        profilePhoto = '<img src= "./img/homem-crianca.jpg" alt="Foto" />';
      } else if (idade <= 29) {
        //jovem
        profilePhoto = '<img src= "./img/homem-jovem.jpg" alt="Foto" />';
      } else if (idade <= 50) {
        // adulto
        profilePhoto = '<img src= "./img/homem-adulto.jpg" alt="Foto" />';
      } else {
        // idoso
        profilePhoto = '<img src= "./img/homem-idoso.jpg" alt="Foto" />';
      }
    } else if (fSex[1].checked) {
      gender = "Mulher";
      if (idade >= 0 && idade <= 13) {
        //crianca
        profilePhoto = '<img src= "./img/mulher-crianca.jpg" alt="Foto" />';
      } else if (idade <= 29) {
        //jovem
        profilePhoto = '<img src= "./img/mulher-jovel.jpg" alt="Foto" />';
      } else if (idade <= 50) {
        // adulto
        profilePhoto = '<img src= "./img/mulher-adulta.jpg" alt="Foto" />';
      } else {
        // idoso
        profilePhoto = '<img src= "./img/mulher-idosa.jpg" alt="Foto" />';
      }
    } else if (fSex[2].checked) {
      gender = "Outro";
      profilePhoto = '<img src= "./img/outros.png" alt="Foto" />';
    }
    res.innerHTML = `${profilePhoto}
      <p>Detectamos ${gender} com  ${idade} anos.</p>
      `;
  }
}

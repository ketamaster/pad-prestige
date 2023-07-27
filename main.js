let cbuxl = document.getElementById("cbuxl");
let cbu = document.getElementById("cbu");
let registrar = document.getElementById("modal-button");
let bienvenida = document.getElementById("bienvenida");
let info = document.getElementById("info");
let retirar = document.getElementById("retirar");
let exitos = document.getElementById("exitos");
let premioEnviado = document.getElementById("premioEnviado");
let contraseña = document.getElementById("contraseña");
let noIngreso = document.getElementById("noIngreso");
let soporte = document.getElementById("soporte");
let demorasPago = document.getElementById("demorasPago");
let solicitoUsuario = document.getElementById("solicitoUsuario");
let cbuEquivocado = document.getElementById("cbuEquivocado");
let ordenLlegada = document.getElementById("ordenLlegada");
let demorasCargas = document.getElementById("demorasCargas");
let form = document.getElementById("form");
let form_button = document.getElementById("formButton");
let usuario = document.getElementById("usuario");
let modal = document.getElementById("myModal");
let btn = document.getElementById("pad-button-reg");
let span = document.getElementsByClassName("close")[0];

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let inputNombre = document.getElementById("name").value;
  let inputCBU = document.getElementById("number").value;
  let inputAlias = document.getElementById("alias").value;

  if (inputNombre.length != 0 && inputCBU != 0 && inputAlias.length != 0) {
    cbuxl.addEventListener("click", () => {
      const texto = `Buenas! 👋🏼 *POR FAVOR NUNCA ENVÍE DINERO SIN CONSULTAR CBU ANTES* ⚠️ Nuestro cbu va cambiando, si envia dinero a una cuenta inactiva lo pierde.

*Cuenta a nombre de:* *${inputNombre}*
🔹*CBU:* *${inputCBU}*
🔹*ALIAS:* *${inputAlias}*

😄 Estimado cliente, se le informa que para cargas menores a $3.000 se debe abonar un recargo de $30 💰
Ejemplo: $1.000 = $1.030

Si no envían los $30 se les descontará del total de su carga.
Ejemplo: $1.000 = $970

Envíe el comprobante de la transferencia seguido de su usuario *para poder cargarle las fichas*. 💥 *MÍNIMO DE CARGA: $800* 

📲 Para jugar ingrese aquí jugalodos.com`;
      const elementoTemporal = document.createElement("textarea");
      elementoTemporal.value = texto;
      document.body.appendChild(elementoTemporal);
      elementoTemporal.select();
      elementoTemporal.setSelectionRange(0, 9999);
      document.execCommand("copy");
      document.body.removeChild(elementoTemporal);
    });

    cbu.addEventListener("click", () => {
      const texto = `${inputCBU}`;
      const elementoTemporal = document.createElement("textarea");
      elementoTemporal.value = texto;
      document.body.appendChild(elementoTemporal);
      elementoTemporal.select();
      elementoTemporal.setSelectionRange(0, 9999);
      document.execCommand("copy");
      document.body.removeChild(elementoTemporal);
    });

    document.getElementById("name").value = "";
    document.getElementById("number").value = "";
    document.getElementById("alias").value = "";
  } else {
    alert("Por favor, completa todos los datos!!");
  }
});

registrar.addEventListener("click", function (e) {
  e.preventDefault();
  let user = document.getElementById("usuario").value;
  console.log(user);

  const texto = `👑 *USUARIO CREADO* 👑

📲 Para jugar ingrese aquí jugalodos.com
*SU USUARIO ES:* ${user}
*CONTRASEÑA:* bet123

*Para cargar dinero a su cuenta CONSULTE NUESTRO CBU VIGENTE* 📩`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);

  document.getElementById("usuario").value = "";

  modal.style.display = "none";
});

bienvenida.addEventListener("click", () => {
  const texto = `Hola! 😃 Bienvenido/a Caba Prestige 👑 
Tu casino online de confianza 🤝

🤑 MINIMO DE CARGA: $800
🤑 MINIMO DE RETIRO: $2.000

Para comenzar a jugar con nosotros te pido tu nombre y apellido así podemos generarte un usuario! ⬇️`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

info.addEventListener("click", () => {
  const texto = `Buenas! 👋🏼 *Somos Caba Prestige*, un casino online 🎰
En nuestra plataforma vas a encontrar los mismos juegos que en un casino físico, pero desde la comodidad de donde estés!
➡️ Máquinas tragamonedas
➡️ Póker
➡️ Ruleta en vivo
➡️ Apuestas Deportivas
➡️ Blackjack
➡️ Baccarat
➡️ Bingo

🔻*Mínimo* de carga $800
🔻*Mínimo* de retiro $2.000
🔻*Máximo* de retiro NO TENEMOS

💻 Nuestra plataforma es jugalodos.com

*Si queres que te generemos un usuario* para comenzar a jugar responde este mensaje`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

retirar.addEventListener("click", () => {
  const texto = `Hola! 👋🏼 *Para retirar su dinero* complete los siguientes datos:

➡️ Usuario:
➡️ Nombre que figura en su cuenta bancaria:
➡️ CBU o ALIAS:
➡️ Monto que desea retirar:

🤑 *Puede retirar a partir de $2.000*
Una vez que complete los datos, le retiramos las fichas y lo enviamos al área de pagos para que le abonen su premio.

🙏🏼 *POR FAVOR, SEA PACIENTE Y AGUARDE SU TURNO, EL PAGO PUEDE DEMORAR UN RATO.*`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

exitos.addEventListener("click", () => {
  const texto = `*PREMIO EN FILA* 💸
*Su premio ya se encuentra en el sector de pagos* 👏🏼 Le enviaremos el comprobante de pago cuando se haya efectuado! 

*POR FAVOR, NO RESPONDA NI REACCIONE ESTE MENSAJE HASTA QUE LE ENVIEMOS SU PREMIO, SINO PASARÁ A ESTAR ÚLTIMO EN LA FILA Y SE DEMORARÁ MÁS EL PAGO*. ⚠️`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

premioEnviado.addEventListener("click", () => {
  const texto = `*TU PREMIO YA FUE ENVIADO* 👏🏼🥳🎉 
Felicitaciones! 💘 Gracias por jugar con *Caba Prestige*🥹🙏🏼 Disfrutalo mucho ✨

*Accede a un 10% de bonificación en tu próxima carga* publicando este premio en tu historia de Instagram y etiquetándonos 💥✍🏼
@caba.prestige`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

contraseña.addEventListener("click", () => {
  const texto = `Buenas 👋🏼 Le informamos que la pagina está siendo interrumpida debido a un mantenimiento.🧑🏻‍🔧 Desde nuestro lado no podemos ingresar en ella ni para cargar ni para descargar fichas.

Les pedimos paciencia, en cuanto se solucione volveremos a atender normalmente. 

Gracias y disculpen las molestias 🙏🏼`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

noIngreso.addEventListener("click", () => {
  const texto = `Su transferencia aún no ingresó en nuestra cuenta 🤚🏼 En cuanto impacte el pago, le cargaremos las fichas! Aguarde 🙏🏼

*Tenga en cuenta que las transferencias a veces cuentan con demora, le pedimos paciencia*.`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

soporte.addEventListener("click", () => {
  const texto = `Buenas!👋🏻 Por problemas e inconvenientes con la plataforma *por favor comuníquese con el soporte de la misma página* (lo puede hacer mediante el cuadro de diálogo que se encuentra arriba a su derecha). ♦️
Ya que nosotros no podemos acceder a la configuración de las máquinas!`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

demorasPago.addEventListener("click", () => {
  const texto = `Estimado cliente, le informamos que *contamos con demoras en los pagos*⏳ 
Se irán abonando de a tandas, por favor le solicitamos que aguarde y respete su lugar en la fila, ya que si envía varios mensajes, tardaremos más en enviar su premio 🙏🏼💸

*POR FAVOR, NO RESPONDA ESTE MENSAJE*`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

solicitoUsuario.addEventListener("click", () => {
  const texto = `Envíe el usuario debajo del comprobante por favor, de lo contrario no podemos cargarle las fichas 🙏🏼`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

cbuEquivocado.addEventListener("click", () => {
  const texto = `Los retiros pueden ser a partir de $2.000, puede retirar varias veces al día, no hay máximo de retiros diarios (siempre y cuando no retire $2.000 cada 5 / 10 minutos).
El máximo de demora del pago es dependiendo del monto de retiro, de la cantidad de premios en fila que tengamos y con cuanta banca contemos en ese momento. Si hay mucha demora se informa previamente.

Los pagos pueden ser en su totalidad o en cuotas dependiendo del monto y la carga realizada anteriormente.`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

ordenLlegada.addEventListener("click", () => {
  const texto = `Hola 👋🏻 Le informo que trabajamos por orden de llegada, por ende, si envía muchos mensajes su chat queda último y tardamos más en responderle. *Sea paciente y será atendido.* 🙏🏻 Gracias.`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

demorasCargas.addEventListener("click", () => {
  const texto = `MERCADO PAGO DEMORAS

Le informo que *Mercado Pago* cuenta con demoras ⏳ Si envía dinero desde esa aplicación, hasta que no nos ingrese a nuestra cuenta *NO PODREMOS CARGARLE LAS FICHAS*. 🤚🏼`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

btn.onclick = function () {
  modal.style.display = "block";
  usuario.focus();
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

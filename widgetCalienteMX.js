var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    myFunction(this);
    }
  };
  

function caliente() {
  const select = document.getElementById('selectevento');

  const map = {
    "0": "ligaMX",
    "1": "premier",
    "2": "laliga",
    "3": "nfl",
    "4": "nba"
  };

  fetch("https://script.google.com/macros/s/AKfycbwmhIoZetZfQGG9YYcb4dgnnyHLe4gcfR_d5oBCDtRSmqEkI78lJevLsA_BkHVaOc9L/exec")
    .then(res => res.json())
    .then(data => {

      const xmlString = data[map[select.value]];

      if (!xmlString) {
        console.error("No hay datos para:", map[select.value]);
        return;
      }

      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlString, "text/xml");

      myFunction(xmlDoc);
    })
    .catch(err => {
      console.error("Error cargando datos:", err);
    });
}


function myFunction(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  var table='';
  var x2 = xmlDoc.getElementsByTagName("Ev");
  var x = xmlDoc.getElementsByTagName("SBType");
  var a = 0;
  var select_mundial = document.getElementById('selectevento');
  
  
  
  
  
  for (i = 0; i < x2.length; i++) 
  {
table += '<div class="card">';
    if(x2[i].getAttribute("inplay_now") === "Y"){
      table += '<div class="date" style="background:#000; color: #fff;">';
      table += '&#128308; En vivo';
    }else{
        table += '<div class="date">';
        table +=  new Date(x2[i].getAttribute("start_time")).toLocaleString('es-MX', { timeZone: 'Etc/GMT+12', day: 'numeric', month: 'short' , hour: 'numeric',minute: 'numeric', hour12: true });
     }
table += '</div><div class="match">';
    // if(select_mundial.value == "0" ){
      table += '<div class="flags"><img src="./images/flags/' + x2[i].getElementsByTagName("Team")[0].getAttribute("team_id") + '.png" alt="Bandera de ' + x2[i].getElementsByTagName("Team")[0].getAttribute("name") + '" width="30" height="30">';
      table += '<img src="./images/flags/' + x2[i].getElementsByTagName("Team")[1].getAttribute("team_id") + '.png" alt="Bandera de ' + x2[i].getElementsByTagName("Team")[1].getAttribute("name") + '" width="30" height="30">';
      table += '</div>'
    // }
table += '<div class="players"><div class="player" id_player="0">';
table += '<marquee>' + x2[i].getElementsByTagName("Team")[0].getAttribute("name") + '</marquee>' 
table += '</div><div class="player" id_player="1">';
table += "VS"
table += '</div><div class="player" id_player="2">';
table += '<marquee>' + x2[i].getElementsByTagName("Team")[1].getAttribute("name") + '</marquee>' 
table += '</div></div><div class="momios"><a href="https://online.caliente.mx/page?member=PublimetroMX&campaign=DEFAULT&channel=DEFAULT&zone=54300998&lp=57942232&BET_REF=' + x2[i].getElementsByTagName("Price")[0].getAttribute("bet_ref") + '" target="_blank"><div class="momio" id_player="0">';
table += x2[i].getElementsByTagName("Price")[0].getAttribute("us_prc")
table += '</div></a><a href="https://online.caliente.mx/page?member=PublimetroMX&campaign=DEFAULT&channel=DEFAULT&zone=54300998&lp=57942232&BET_REF=' + x2[i].getElementsByTagName("Price")[1].getAttribute("bet_ref") + '" target="_blank"><div class="momio" id_player="1">';
table += x2[i].getElementsByTagName("Price")[1].getAttribute("us_prc")
table += '</div></a>';
    if(select_mundial.value !== "4" ){
      table += '<a href="https://online.caliente.mx/page?member=PublimetroMX&campaign=DEFAULT&channel=DEFAULT&zone=54300998&lp=57942232&BET_REF=' + x2[i].getElementsByTagName("Price")[2].getAttribute("bet_ref") + '" target="_blank"><div class="momio" id_player="2">';
      table += x2[i].getElementsByTagName("Price")[2].getAttribute("us_prc")
      table += '</div></a>';
    }
table += '</div></div></div>';
    }
  document.getElementById("carousel").innerHTML = table;
}

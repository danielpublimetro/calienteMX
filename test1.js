  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    myFunction(this);
    }
  };
  xhttp.open("GET", "text.xml", true);
  xhttp.send();

function myFunction(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  var table='';
  var x2 = xmlDoc.getElementsByTagName("Ev");
  var x = xmlDoc.getElementsByTagName("SBType");
  var a = 0;
  var ligaFilter = x[a].getAttribute("sb_type_id");
  
  
  
  
  
  for (i = 0; i < x.length; i++) 
  {
      if (ligaFilter == "19287") {
table += '<div class="card"><div class="date">';
table +=  x2[i].getAttribute("start_time");
table += '</div><div class="match"><div class="players"><div class="player" id_player="0">';
table += x2[i].getElementsByTagName("Team")[0].getAttribute("name")
table += '</div><div class="player" id_player="1">';
table += "VS"
table += '</div><div class="player" id_player="2">';
table += x2[i].getElementsByTagName("Team")[1].getAttribute("name")
table += '</div></div><div class="momios"><a href="https://online.caliente.mx/page?member=PublimetroMX&campaign=DEFAULT&channel=DEFAULT&zone=54300998&lp=57942232&BET_REF=' + x2[i].getElementsByTagName("Price")[0].getAttribute("bet_ref") + '" target="_blank"><div class="momio" id_player="0">';
table += x2[i].getElementsByTagName("Price")[0].getAttribute("us_prc")
table += '</div></a><a href="https://online.caliente.mx/page?member=PublimetroMX&campaign=DEFAULT&channel=DEFAULT&zone=54300998&lp=57942232&BET_REF=' + x2[i].getElementsByTagName("Price")[1].getAttribute("bet_ref") + '" target="_blank"><div class="momio" id_player="1">';
table += x2[i].getElementsByTagName("Price")[1].getAttribute("us_prc")
table += '</div></a><a href="https://online.caliente.mx/page?member=PublimetroMX&campaign=DEFAULT&channel=DEFAULT&zone=54300998&lp=57942232&BET_REF=' + x2[i].getElementsByTagName("Price")[2].getAttribute("bet_ref") + '" target="_blank"><div class="momio" id_player="2">';
table += x2[i].getElementsByTagName("Price")[2].getAttribute("us_prc")
table += '</div></a></div></div></div>';
      
      }
    }
  
console.log(ligaFilter);
  document.getElementById("carousel").innerHTML = table;
}

function calcular() {
    var hp = parseInt(document.getElementById('hp').value);
    var atk = parseInt(document.getElementById('atk').value);
    var def = parseInt(document.getElementById('def').value);
    var spatk = parseInt(document.getElementById('spatk').value);
    var spdef = parseInt(document.getElementById('spdef').value);
    var spe = parseInt(document.getElementById('spe').value);

    hp = hp % 2;
    atk = atk % 2;
    def = def % 2;
    spatk = spatk % 2;
    spdef = spdef % 2;
    spe = spe % 2;

    var sum = ((1*hp) + (2*atk) + (4*def) + (8*spe) + (16*spatk) + (32*spdef)) * 15;
    sum = sum/63;

    switch(Math.floor(sum)){
        case 0:
          document.getElementById('resultado').innerHTML = "The Hidden Power type is Fighting";
          document.getElementById('resultado').style.color = "red";
          break;
        case 1:
          document.getElementById('resultado').innerHTML = "The Hidden Power type is Flying";
          document.getElementById('resultado').style.color = "cornflowerblue";
          break;
        case 2:
          document.getElementById('resultado').innerHTML = "The Hidden Power type is Poison";
          document.getElementById('resultado').style.color = "purple";
          break;
        case 3:
          document.getElementById('resultado').innerHTML = "The Hidden Power type is Ground";
          document.getElementById('resultado').style.color = "darkgoldenrod";
          break;
        case 4:
          document.getElementById('resultado').innerHTML = "The Hidden Power type is Rock";
          document.getElementById('resultado').style.color = "olive";
          break;
        case 5:
          document.getElementById('resultado').innerHTML = "The Hidden Power type is Bug";
          document.getElementById('resultado').style.color = "lime";
          break;
        case 6:
          document.getElementById('resultado').innerHTML = "The Hidden Power type is Ghost";
          document.getElementById('resultado').style.color = "midnightblue";
          break;
        case 7:
          document.getElementById('resultado').innerHTML = "The Hidden Power type is Steel";
          document.getElementById('resultado').style.color = "grey";
          break;
        case 8:
          document.getElementById('resultado').innerHTML = "The Hidden Power type is Fire";
          document.getElementById('resultado').style.color = "orangered";
          break;
        case 9:
          document.getElementById('resultado').innerHTML = "The Hidden Power type is Water";
          document.getElementById('resultado').style.color = "navy";
          break;
        case 10:
          document.getElementById('resultado').innerHTML = "The Hidden Power type is Grass";
          document.getElementById('resultado').style.color = "green";
          break;
        case 11:
          document.getElementById('resultado').innerHTML = "The Hidden Power type is Electric";
          document.getElementById('resultado').style.color = "yellow";
          break;
        case 12:
          document.getElementById('resultado').innerHTML = "The Hidden Power type is Psychic";
          document.getElementById('resultado').style.color = "crimson";
          break;
        case 13:
          document.getElementById('resultado').innerHTML = "The Hidden Power type is Ice";
          document.getElementById('resultado').style.color = "deepskyblue";
          break;
        case 14:
          document.getElementById('resultado').innerHTML = "The Hidden Power type is Dragon";
          document.getElementById('resultado').style.color = "darkslategrey";
          break;
        case 15:
          document.getElementById('resultado').innerHTML = "The Hidden Power type is Dark";
          document.getElementById('resultado').style.color = "slategrey";
          break;
        default:
          document.getElementById('resultado').innerHTML = "Invalid input";
          break;
      }
      
    
    

  }
  
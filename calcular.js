function calcular() {
    var hp = parseInt(document.getElementById('hp').value) % 2;
    var atk = parseInt(document.getElementById('atk').value)% 2;
    var def = parseInt(document.getElementById('def').value)% 2;
    var spatk = parseInt(document.getElementById('spatk').value)% 2;
    var spdef = parseInt(document.getElementById('spdef').value)% 2;
    var spe = parseInt(document.getElementById('spe').value)% 2;

    var sum = (((1*hp) + (2*atk) + (4*def) + (8*spe) + (16*spatk) + (32*spdef)) * 15) / 63;

    switch(Math.floor(sum)){
        case 0:
          innerHtmlText = "The Hidden Power type is Fighting"
          styleColor = "red"
          break;
        case 1:
          innerHtmlText = "The Hidden Power type is Flying";
          styleColor = "cornflowerblue";
          break;
        case 2:
          innerHtmlText = "The Hidden Power type is Poison";
          styleColor = "purple";
          break;
        case 3:
          innerHtmlText = "The Hidden Power type is Ground";
          styleColor = "darkgoldenrod";
          break;
        case 4:
          innerHtmlText = "The Hidden Power type is Rock";
          styleColor = "olive";
          break;
        case 5:
          innerHtmlText = "The Hidden Power type is Bug";
          styleColor = "lime";
          break;
        case 6:
          innerHtmlText = "The Hidden Power type is Ghost";
          styleColor = "midnightblue";
          break;
        case 7:
          innerHtmlText = "The Hidden Power type is Steel";
          styleColor = "grey";
          break;
        case 8:
          innerHtmlText = "The Hidden Power type is Fire";
          styleColor = "orangered";
          break;
        case 9:
          innerHtmlText = "The Hidden Power type is Water";
          styleColor = "navy";
          break;
        case 10:
          innerHtmlText = "The Hidden Power type is Grass";
          styleColor = "green";
          break;
        case 11:
          innerHtmlText = "The Hidden Power type is Electric";
          styleColor = "yellow";
          break;
        case 12:
          innerHtmlText = "The Hidden Power type is Psychic";
          styleColor = "crimson";
          break;
        case 13:
          innerHtmlText = "The Hidden Power type is Ice";
          styleColor = "deepskyblue";
          break;
        case 14:
          innerHtmlText = "The Hidden Power type is Dragon";
          styleColor = "darkslategrey";
          break;
        case 15:
          innerHtmlText = "The Hidden Power type is Dark";
          styleColor = "slategrey";
          break;
        default:
          document.getElementById('resultado').innerHTML = "Invalid input";
          break;
      }
      
      document.getElementById('resultado').innerHTML = innerHtmlText
      document.getElementById('resultado').style.color = styleColor
    
    

  }
  
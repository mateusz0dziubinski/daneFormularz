function mojaFunkcja() {
    var x = document.forms["idFormularza"];
    var text = "";
    var i;
    for (i = 0; i < x.length ;i++) {
      text += x.elements[i].value + "<br>";
    }
    document.getElementById("name", "surname", "number").innerHTML = text;
  }
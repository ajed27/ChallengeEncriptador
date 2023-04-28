
let textCopied = "";
function encrypt(){
  let frase = document.getElementById("Encriptar").value;
  let readChar;
  let encryptFrase = "";
  for( i = 0; i < frase.length; i++ ){
    readChar = frase.charAt(i);
    if(readChar == 'e'){
      readChar = "enter";
      encryptFrase = encryptFrase + readChar;
    }else if (readChar == 'i'){
      readChar = "imes";
      encryptFrase = encryptFrase + readChar;
    }else if(readChar == 'a'){
      readChar = "ai";
      encryptFrase = encryptFrase + readChar;
    }else if(readChar == 'o'){
      readChar = "ober";
      encryptFrase = encryptFrase + readChar;
    }else if(readChar == 'u'){
      readChar = "ufat";
      encryptFrase = encryptFrase + readChar;
    }
    else{
      encryptFrase = encryptFrase + readChar;
    }
  }
  document.getElementById("show").innerText = encryptFrase;
}

function desencrypt(){
  let frase = document.getElementById("Encriptar").value
  let readChar;
  let desencryptFrase = "";
  for( let i = 0; i < frase.length; i++ ){
    readChar = frase.charAt(i);
    if(readChar == 'e'){
      i = i + 4;
      desencryptFrase = desencryptFrase + readChar;
    }else if (readChar == 'i'){
      i = i + 3;
      desencryptFrase = desencryptFrase + readChar;
    }else if(readChar == 'a'){
      i = i + 1;
      desencryptFrase = desencryptFrase + readChar;
    }else if(readChar == 'o'){
      i = i + 3;
      desencryptFrase = desencryptFrase + readChar;
    }else if(readChar == 'u'){
      i = i + 3;
      desencryptFrase = desencryptFrase + readChar;
    }
    else{
      desencryptFrase = desencryptFrase + readChar;
    }
  }
  document.getElementById("show").innerText = desencryptFrase;
}

function copy(){
  document.getElementById("Encriptar").value = document.getElementById("show").innerText;
}
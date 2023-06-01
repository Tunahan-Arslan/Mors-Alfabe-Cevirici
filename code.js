const morseAlfabesi = {
    'A': '.-',    'B': '-...',  'C': '-.-.',  'Ç': '-.-..', 'D': '-..',   'E': '.', 
    'F': '..-.',  'G': '--.',   'Ğ': '--.',   'H': '....',  'I': '..',    'İ': '..',    
    'J': '.---',  'K': '-.-',   'L': '.-..',  'M': '--',    'N': '-.',    'O': '---',
    'Ö': '---.',  'P': '.--.',  'R': '.-.',   'S': '...',   'Ş': '...-',  'T': '-',
    'U': '..-',   'Ü': '..--',  'V': '...-',  'Y': '-.--',  'Z': '--..',
    '0': '-----','1': '.----','2': '..---','3': '...--',
    '4': '....-', '5': '.....','6': '-....','7': '--...','8': '---..',
    '9': '----.',
  };
var turkceYazi=document.getElementById("turkceYazi");
var morsYazi=document.getElementById("morsYazi");
var sonuc=document.getElementById("sonuc");

document.getElementById("yaziyiMorsa").style.display="none";

var aktiflikYM=false;
function yaziyiMorsaMenu(){
    var ekranaGetir=document.getElementById("yaziyiMorsa");
    if(aktiflikYM==false){
        ekranaGetir.style.display="block";
        aktiflikYM=true;
    }
    else if(aktiflikYM==true){
        ekranaGetir.style.display="none";
        aktiflikYM=false;
    }
}
function hesapla(){
    var trMetin=turkceYazi.value.toUpperCase();
    let morsYazi='';
        for(var i=0;i<trMetin.length;i++){
            const karakter=trMetin[i];
        
        if(karakter===' '){
            morsYazi+=' / ';
        }
        else if(morseAlfabesi[karakter]){
            morsYazi+=morseAlfabesi[karakter]+ ' ';
        }
    }
    sonuc.innerText=morsYazi;

}

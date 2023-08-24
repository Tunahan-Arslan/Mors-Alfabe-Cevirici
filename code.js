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
const morseAlfabesi2 = {
    ".-":'A',     "-...":'B',  "-.-.":'C',   "-.-..":'Ç',  "-..":'D',    ".":'E', 
    "..-.":'F',   "--.":'G',   "--.":'Ğ',    "....":'H',   "..":'I',     "..":'İ',    
    ".---":'J',   "-.-":'K',   ".-..":'L',   "--":'M',     "-.":'N',     "---":'O',
    "---.":'Ö',   ".--.":'P',  ".-.":'R',    "...":'S',    "...-":'Ş',   "-":'T',
    "..-":'U',    "..--":'Ü',  "...-":'V',   "-.--":'Y',   "--..":'Z',
    "-----":'0',  ".----":'1', "..---":'2',  "...--":'3',  "....-":'4',  ".....":'5',
    "-....":'6',  "--...":'7',  "---..":'8', "----.":'9',
  };

var turkceYazi=document.getElementById("turkceYazi");
var morsYazi=document.getElementById("morsYazi");
var sonuc=document.getElementById("sonuc");

document.getElementById("yaziyiMorsa").style.display="none";
document.getElementById("morsuYaziya").style.display="none";

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
var aktiflikMY=false;
function morsuYaziyaMenu(){
    var ekranaGetir=document.getElementById("morsuYaziya");
    if(aktiflikMY==false){
        ekranaGetir.style.display="block";
        aktiflikMY=true;
    }
    else if(aktiflikMY==true){
        ekranaGetir.style.display="none";
        aktiflikMY=false;
    }
}
function hesapla(morsKod){
    //Yazıyı Morsa çeviren kodlar aşağıda;
    if(turkceYazi.value!="" && morsYazi.value==""){
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
    //Morsu Yazıya çeviren kodlar aşağıda;
    else if(morsYazi.value!="" && turkceYazi.value==""){
    //
    var morsMetin = morsYazi.value;
    const cevrilmisMetin = morsuTurkceyeCevir(morsMetin);
    sonuc.innerText = cevrilmisMetin;
    //
    }
    else{
        alert("İkisini birden kullanmayın veya boş bırakmayın!");
        turkceYazi.value="";
        morsYazi.value="";
    }
}
//
function morsuTurkceyeCevir(morsKod) {
    const morsKelimeler = morsKod.split(' / ');
    let cevrilmisMetin = '';

    for (const morsKelime of morsKelimeler) {
        const morsHarfler = morsKelime.split(' ');
        let cevrilmisKelime = '';

        for (const morsHarf of morsHarfler) {
            if (morseAlfabesi2[morsHarf]) {
                cevrilmisKelime += morseAlfabesi2[morsHarf];
            } else {
                // Tanınmayan karakterleri işle
                cevrilmisKelime += '?';
            }
        }

        cevrilmisMetin += cevrilmisKelime + ' ';
    }

    return cevrilmisMetin.trim();
}
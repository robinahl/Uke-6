//lib for keymatching
var encoder = {
    'a': '.-',    'b': '-...',  'c': '-.-.', 'd': '-..',
    'e': '.',     'f': '..-.',  'g': '--.',  'h': '....',
    'i': '..',    'j': '.---',  'k': '-.-',  'l': '.-..',
    'm': '--',    'n': '-.',    'o': '---',  'p': '.--.',
    'q': '--.-',  'r': '.-.',   's': '...',  't': '-',
    'u': '..-',   'v': '...-',  'w': '.--',  'x': '-..-',
    'y': '-.--',  'z': '--..',
    '1': '.----', '2': '..---', '3': '...--', '4': '....-',
    '5': '.....', '6': '-....', '7': '--...', '8': '---..',
    '9': '----.', '0': '-----', ' ': ' ', };

var input = $('input[type="text"]');
var morseCode = $('span');

//event listener for input field
input.keyup(function(){
    morseCode.text(encode(input.val()));
});

//encoder for input text
function encode(text){
    var textArr = text.split('');
    var returnString = textArr.map(function(char){
        return encoder[char.toLowerCase()]  || ''; //Create empty strings for chars not in encoder
    }).join(" ").replace(/  +/g, ' ');
    return returnString;
}
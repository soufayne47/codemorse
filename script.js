const morseCode = {
        '.-': 'A',   '-...': 'B', '-.-.': 'C', '-..': 'D',
        '.': 'E',    '..-.': 'F', '--.': 'G',  '....': 'H',
        '..': 'I',   '.---': 'J', '-.-': 'K',  '.-..': 'L',
        '--': 'M',   '-.': 'N',   '---': 'O',  '.--.': 'P',
        '--.-': 'Q', '.-.': 'R',  '...': 'S',  '-': 'T',
        '..-': 'U',  '...-': 'V', '.--': 'W',  '-..-': 'X',
        '-.--': 'Y', '--..': 'Z',
        '-----': '0', '.----': '1', '..---': '2', '...--': '3',
        '....-': '4', '.....': '5', '-....': '6', '--...': '7',
        '---..': '8', '----.': '9',
        '/': ' ' 
    };
const normal = {
    'A': '.-',     'B': '-...',   'C': '-.-.',   'D': '-..',
    'E': '.',      'F': '..-.',   'G': '--.',    'H': '....',
    'I': '..',     'J': '.---',   'K': '-.-',    'L': '.-..',
    'M': '--',     'N': '-.',     'O': '---',    'P': '.--.',
    'Q': '--.-',   'R': '.-.',    'S': '...',    'T': '-',
    'U': '..-',    'V': '...-',   'W': '.--',    'X': '-..-',
    'Y': '-.--',   'Z': '--..',
    '0': '-----',  '1': '.----',  '2': '..---',  '3': '...--',
    '4': '....-',  '5': '.....',  '6': '-....',  '7': '--...',
    '8': '---..',  '9': '----.',
    ' ': '/'
};
$('#btn').on('click', function () {
        $('#text').val('');
        $('#text').focus();
        $('div').text('');
    if ($(this).hasClass('morse')) {
        $('#text').attr('placeholder', 'Entrer un code Morse')
        $(this).removeClass('morse').addClass('normal').text('Text normale');
        $('input[type=hidden]').val('tonormale');
    } else {
        $('#text').attr('placeholder', "Saisissez un text normale en utilisant uniquement les lettres (a à z) et les chiffres (0 à 9).");
        $(this).removeClass('normal').addClass('morse').text('Code morse');
        $('input[type=hidden]').val('texttomorse');
    }
});
$('#text').on('input', function () {
    let ctn = $('#text').val().toUpperCase();
    let mode = $('input[type=hidden]').val();
    if (mode === "texttomorse") {
        let morse = '';
        for (const char of ctn) {
            morse += (normal[char] || '') + ' ';
        }
        $('div').text(morse.trim());
    } else {
        let result = '';
        let mots = ctn.trim().split(' / '); 
        for (let mot of mots) {
            let lettres = mot.split(' ');
            for (let lettre of lettres) {
                result += morseCode[lettre] || '';
            }
            result += ' ';
        }
        $('div').text(result.trim());
    }
});
$(document).on('mousemove',(e)=>{
    $('img').css({
        left: e.clientX + 'px',
        top: e.clientY + 'px'
    });
})
$('svg').hover(function(){
    $('img').attr("src",'image2.png')
},function(){
    $('img').attr("src",'image.png')
})
//https://www.codewars.com/kata/577ff15ad648a14b780000e7/train/javascript

let data = {"english": "Welcome",
"czech": "Vitejte",
"danish": "Velkomst",
"dutch": "Welkom",
"estonian": "Tere tulemast",
"finnish": "Tervetuloa",
"flemish": "Welgekomen",
"french": "Bienvenue",
"german": "Willkommen",
"irish": "Failte",
"italian": "Benvenuto",
"latvian": "Gaidits",
"lithuanian": "Laukiamas",
"polish": "Witamy",
"spanish": "Bienvenido",
"swedish": "Valkommen",
"welsh": "Croeso"
}

function greet(language) {
    return data.hasOwnProperty(language)? data[language]: "Welcome"
	
}


//ou assim
function greet(language) {
	var GreetingsDB = {
    english: 'Welcome',
    czech: 'Vitejte',
    danish: 'Velkomst',
    dutch: 'Welkom',
    estonian: 'Tere tulemast',
    finnish: 'Tervetuloa',
    flemish: 'Welgekomen',
    french: 'Bienvenue',
    german: 'Willkommen',
    irish: 'Failte',
    italian: 'Benvenuto',
    latvian: 'Gaidits',
    lithuanian: 'Laukiamas',
    polish: 'Witamy',
    spanish: 'Bienvenido',
    swedish: 'Valkommen',
    welsh: 'Croeso'
  }, 
  defaultLanguage = 'english';
  return GreetingsDB[language] || GreetingsDB[defaultLanguage];
}


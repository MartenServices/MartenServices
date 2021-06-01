const allColors = {
    "aliceblue": "#f0f8ff",
    "antiquewhite": "#faebd7",
    "aqua": "#00ffff",
    "aquamarine": "#7fffd4",
    "azure": "#f0ffff",
    "beige": "#f5f5dc",
    "bisque": "#ffe4c4",
    "black": "#000000",
    "blanchedalmond": "#ffebcd",
    "blue": "#0000ff",
    "blueviolet": "#8a2be2",
    "brown": "#a52a2a",
    "burlywood": "#deb887",
    "cadetblue": "#5f9ea0",
    "chartreuse": "#7fff00",
    "chocolate": "#d2691e",
    "coral": "#ff7f50",
    "cornflowerblue": "#6495ed",
    "cornsilk": "#fff8dc",
    "crimson": "#dc143c",
    "cyan": "#00ffff",
    "darkblue": "#00008b",
    "darkcyan": "#008b8b",
    "darkgoldenrod": "#b8860b",
    "darkgray": "#a9a9a9",
    "darkgreen": "#006400",
    "darkgrey": "#a9a9a9",
    "darkkhaki": "#bdb76b",
    "darkmagenta": "#8b008b",
    "darkolivegreen": "#556b2f",
    "darkorange": "#ff8c00",
    "darkorchid": "#9932cc",
    "darkred": "#8b0000",
    "darksalmon": "#e9967a",
    "darkseagreen": "#8fbc8f",
    "darkslateblue": "#483d8b",
    "darkslategray": "#2f4f4f",
    "darkslategrey": "#2f4f4f",
    "darkturquoise": "#00ced1",
    "darkviolet": "#9400d3",
    "deeppink": "#ff1493",
    "deepskyblue": "#00bfff",
    "dimgray": "#696969",
    "dimgrey": "#696969",
    "dodgerblue": "#1e90ff",
    "firebrick": "#b22222",
    "floralwhite": "#fffaf0",
    "forestgreen": "#228b22",
    "fuchsia": "#ff00ff",
    "gainsboro": "#dcdcdc",
    "ghostwhite": "#f8f8ff",
    "goldenrod": "#daa520",
    "gold": "#ffd700",
    "gray": "#808080",
    "green": "#008000",
    "greenyellow": "#adff2f",
    "grey": "#808080",
    "honeydew": "#f0fff0",
    "hotpink": "#ff69b4",
    "indianred": "#cd5c5c",
    "indigo": "#4b0082",
    "ivory": "#fffff0",
    "khaki": "#f0e68c",
    "lavenderblush": "#fff0f5",
    "lavender": "#e6e6fa",
    "lawngreen": "#7cfc00",
    "lemonchiffon": "#fffacd",
    "lightblue": "#add8e6",
    "lightcoral": "#f08080",
    "lightcyan": "#e0ffff",
    "lightgoldenrodyellow": "#fafad2",
    "lightgray": "#d3d3d3",
    "lightgreen": "#90ee90",
    "lightgrey": "#d3d3d3",
    "lightpink": "#ffb6c1",
    "lightsalmon": "#ffa07a",
    "lightseagreen": "#20b2aa",
    "lightskyblue": "#87cefa",
    "lightslategray": "#778899",
    "lightslategrey": "#778899",
    "lightsteelblue": "#b0c4de",
    "lightyellow": "#ffffe0",
    "lime": "#00ff00",
    "limegreen": "#32cd32",
    "linen": "#faf0e6",
    "magenta": "#ff00ff",
    "maroon": "#800000",
    "mediumaquamarine": "#66cdaa",
    "mediumblue": "#0000cd",
    "mediumorchid": "#ba55d3",
    "mediumpurple": "#9370db",
    "mediumseagreen": "#3cb371",
    "mediumslateblue": "#7b68ee",
    "mediumspringgreen": "#00fa9a",
    "mediumturquoise": "#48d1cc",
    "mediumvioletred": "#c71585",
    "midnightblue": "#191970",
    "mintcream": "#f5fffa",
    "mistyrose": "#ffe4e1",
    "moccasin": "#ffe4b5",
    "navajowhite": "#ffdead",
    "navy": "#000080",
    "oldlace": "#fdf5e6",
    "olive": "#808000",
    "olivedrab": "#6b8e23",
    "orange": "#ffa500",
    "orangered": "#ff4500",
    "orchid": "#da70d6",
    "palegoldenrod": "#eee8aa",
    "palegreen": "#98fb98",
    "paleturquoise": "#afeeee",
    "palevioletred": "#db7093",
    "papayawhip": "#ffefd5",
    "peachpuff": "#ffdab9",
    "peru": "#cd853f",
    "pink": "#ffc0cb",
    "plum": "#dda0dd",
    "powderblue": "#b0e0e6",
    "purple": "#800080",
    "rebeccapurple": "#663399",
    "red": "#ff0000",
    "rosybrown": "#bc8f8f",
    "royalblue": "#4169e1",
    "saddlebrown": "#8b4513",
    "salmon": "#fa8072",
    "sandybrown": "#f4a460",
    "seagreen": "#2e8b57",
    "seashell": "#fff5ee",
    "sienna": "#a0522d",
    "silver": "#c0c0c0",
    "skyblue": "#87ceeb",
    "slateblue": "#6a5acd",
    "slategray": "#708090",
    "slategrey": "#708090",
    "snow": "#fffafa",
    "springgreen": "#00ff7f",
    "steelblue": "#4682b4",
    "tan": "#d2b48c",
    "teal": "#008080",
    "thistle": "#d8bfd8",
    "tomato": "#ff6347",
    "turquoise": "#40e0d0",
    "violet": "#ee82ee",
    "wheat": "#f5deb3",
    "white": "#ffffff",
    "whitesmoke": "#f5f5f5",
    "yellow": "#ffff00",
    "yellowgreen": "#9acd32"
  }
const colorList =  document.querySelector('#color-list');
const amountOfColors = Object.keys(allColors).length;

for(let i = 0; i < amountOfColors; i++){ 
    let opt = document.createElement('option');
    opt.value = Object.keys(allColors)[i];
    colorList.appendChild(opt);
}

const allFruit = {
      "fruits": [
          "apple",
          "apricot",
          "avocado",
          "banana",
          "bell pepper",
          "bilberry",
          "blackberry",
          "blackcurrant",
          "blood orange",
          "blueberry",
          "boysenberry",
          "breadfruit",
          "canary melon",
          "cantaloupe",
          "cherimoya",
          "cherry",
          "chili pepper",
          "clementine",
          "cloudberry",
          "coconut",
          "cranberry",
          "cucumber",
          "currant",
          "damson",
          "date",
          "dragonfruit",
          "durian",
          "eggplant",
          "elderberry",
          "feijoa",
          "fig",
          "goji berry",
          "gooseberry",
          "grape",
          "grapefruit",
          "guava",
          "honeydew",
          "huckleberry",
          "jackfruit",
          "jambul",
          "jujube",
          "kiwi fruit",
          "kumquat",
          "lemon",
          "lime",
          "loquat",
          "lychee",
          "mandarine",
          "mango",
          "mulberry",
          "nectarine",
          "nut",
          "olive",
          "orange",
          "pamelo",
          "papaya",
          "passionfruit",
          "peach",
          "pear",
          "persimmon",
          "physalis",
          "pineapple",
          "plum",
          "pomegranate",
          "pomelo",
          "purple mangosteen",
          "quince",
          "raisin",
          "rambutan",
          "raspberry",
          "redcurrant",
          "rock melon",
          "salal berry",
          "satsuma",
          "star fruit",
          "strawberry",
          "tamarillo",
          "tangerine",
          "tomato",
          "ugli fruit",
          "watermelon"
      ]
  }
  
const amountOfFruits = allFruit.fruits.length;  
const fruitList = document.querySelector('#fruit-list');

for(let i = 0; i < amountOfFruits; i++){ 
    let opt = document.createElement('option');
    opt.value = allFruit.fruits[i];
    fruitList.appendChild(opt);
}

const allCarBrands = {
    "carbrands": ["Seat", "Renault", "Peugeot", "Dacia", "Citroën", "Opel", "Alfa Romeo", "Škoda", "Chevrolet", "Porsche",
                    "Honda", "Subaru", "Mazda", "Mitsubishi", "Lexus", "Toyota", "BMW", "Volkswagen", "Suzuki", "Mercedes-Benz", 
                    "Saab", "Audi", "Kia", "Land Rover", "Dodge", "Chrysler", "Ford", "Hummer", "Hyundai", "Infiniti", "Jaguar",
                    "Jeep", "Nissan", "Volvo", "Daewoo", "Fiat", "MINI", "Rover", "Smart", "Ferrari", "Lamborghini", "Tesla", "Rolls Royce", "Bugatti", 
                    "Bentley"]
}

allCarBrands.carbrands.sort();
const amountOfCarBrands = allCarBrands.carbrands.length;
const carList = document.querySelector('#car-list');

for(let i = 0; i < amountOfCarBrands; i++){ 
    let opt = document.createElement('option');
    opt.value = allCarBrands.carbrands[i];
    carList.appendChild(opt);
}

// Food-list options
const foodlist = document.querySelector('#food-list');
const allFood = {
    "food": ["european","latin", "carribean", "asian", "middle-east", "african", "australian"]
}

const amountOfFood = allFood.food.length;

for(let i = 0; i < amountOfFood; i++){
    let opt = document.createElement('option');
    opt.value = allFood.food[i];
    foodlist.appendChild(opt);
}

// Drink list options
const drinklist = document.querySelector('#drink-list');
const allDrink = {
    "drink": ["Soda", "Water", "Thee", "Coffee", "Alcohol", "Lemonade", "Juice", "Smoothie", "Milkshake"]
}

const amountOfDrink = allDrink.drink.length;

for(let i = 0; i < amountOfDrink; i++){
    let opt = document.createElement('option');
    opt.value = allDrink.drink[i];
    drinklist.appendChild(opt);
}



// Creating the button function for submitting data and adding template-result to screen
const submitFavorite = document.querySelector('.submit-favorite');
const favoritesValue = document.querySelectorAll('input');
const myFavorites = {
    "color": "navy",
    "fruit": "avocado",
    "food": "carribean",
    "drink": "water",
    "car": "Audi"
}

let yourFavorites = new Array();

// The table with result of things we have incommon
const yourData = document.querySelectorAll('.yours');
const myData = document.querySelectorAll('.mine');

// eventlistener for showing result content
if(submitFavorite){
    submitFavorite.addEventListener('click', function() {
        document.getElementById('wrapper-incommon-result').style.display = "block";
        for(let i = 0; i < favoritesValue.length - 3; i++) {
            yourFavorites.push(favoritesValue[i].value)
        }
        for(let i = 0; i < yourFavorites.length; i++) {
            if(yourFavorites[i].toUpperCase() === Object.values(myFavorites)[i].toUpperCase()){
                document.querySelector('progress').value += 20;
            }
        }
    })
    submitFavorite.addEventListener('click', function(){
        if(document.querySelector('progress').value === 100) {
            document.querySelector('.incommon-result-content').innerHTML = "100%";
        }else if(document.querySelector('progress').value === 80) {
            document.querySelector('.incommon-result-content').innerHTML = "80%";
        }else if(document.querySelector('progress').value === 60) {
            document.querySelector('.incommon-result-content').innerHTML = "60%";
        }else if(document.querySelector('progress').value === 40) {
            document.querySelector('.incommon-result-content').innerHTML = "40%";
        }else if(document.querySelector('progress').value === 20) {
            document.querySelector('.incommon-result-content').innerHTML = "20%";
        }else if(document.querySelector('progress').value === 0) {
            document.querySelector('.incommon-result-content').innerHTML = "0%";
        }
    })
    submitFavorite.addEventListener('click', function() {
        for(let i = 0; i < favoritesValue.length - 3; i++){
            yourData[i].innerHTML = yourFavorites[i].toLowerCase(); 
            myData[i].innerHTML = Object.values(myFavorites)[i].toLowerCase();
        }
    })
}

// Code for closing the result screen
const closeBtn = document.querySelector('.close-button');

if(closeBtn) {
    closeBtn.addEventListener('click', () => document.getElementById("wrapper-incommon-result").style.display = 'none', false)
    closeBtn.addEventListener('click', function() {
        for(let i = 0; i < favoritesValue.length -3; i++) {
            favoritesValue[i].value = "";
        }
        document.querySelector('progress').value = 0;
    })
    closeBtn.addEventListener('click', function() {
        yourFavorites = [];
        document.querySelector('.incommon-result-content').innerHTML = "0%";
    })
}

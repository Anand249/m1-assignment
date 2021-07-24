var photos = [];
var fileNames = [];
var imageList = [];
var captionTexts = [];
var descTexts = [];
var imageDescription = [];
var image;
var content;
var openList = "<li class='partner'>";
var closeList = "</li>";
var openDiv = "<div class='caption'>Community Center";
var closeDiv = "</div>";
var openDescDiv = "<div class='openDescTag' onClick='hoverScreenPopup(";
var closeOnChnageDivTag = ")'>"
var closeDescDiv = "</div>";
var imageType = [
    "basketBall",
    "gym",
    "launge",
    "overview",
    "reception",
    "restArea",
    "gameRoom",
    "pool",
    "partyRoom",
];
var captionTexts = [" Basketball court",
    " Gym",
    " Lounge",
    " Overview",
    " Reception",
    " Rest Area",
    " Game Room",
    " Swimming Pool",
    " Party Room"
];
var descTexts = ["Best place for Basketball",
    "Health is wealth fitness center",
    "Best place for chill out",
    "Entire community center overview",
    "Where to go for registration",
    "Best place to Relax",
    "Just one more game",
    "A splashing good time!",
    "The night is still just getting started"
];

var imageDescription = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Ut commodo malesuada justo, sit amet pulvinar nisl pharetra sit amet.',
    'Sed convallis et est vitae viverra. Sed semper iaculis lectus.',
    'Donec consequat eu justo eu venenatis. Vestibulum finibus.',
    'Sed et nibh nibh. Pellentesque non urna quis ex congue ornare.',
    'Nulla ultricies nisi non dui posuere, nec tristique lorem posuere.',
    'Morbi nec nunc elit. Donec vel fringilla metus.', 'Nunc malesuada non enim eu mollis.',
    'Nam imperdiet dapibus arcu sit amet condimentum.']

//Create a loop to create 9 images string with index of 0
for (var i = 0; i < 9; i++) {
    fileNames.push("community" + "-" + imageType[i]);
    photos.push(openDescDiv + i + closeOnChnageDivTag + descTexts[i] + closeDescDiv + "<img src='pictures/gallery/" + fileNames[i] + ".jpg'>" + openDiv + captionTexts[i] + closeDiv);
    image = openList + photos[i] + closeList;
    imageList.push(image);
}

function hoverScreenPopup(index) {
    content = imageDescription[index];
    console.log('content', content)
    document.getElementById("popUp").style.display = "block";
    document.getElementById("popUpBody").innerHTML = content;
    document.getElementById("popUpHeader").innerHTML = "Community Center " + captionTexts[index];
}

function closePopUp() {
    document.getElementById("popUp").style.display = "none";
}

document.getElementById("gallery").innerHTML = imageList;

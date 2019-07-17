$('#confirmBtn').on('click', addPet);
$('#clearStorage').on('click', clearStorage);
$('#showCatalog').on('click', showCatalog);

var petsCatalog = [];
var lclStorage = localStorage.getItem('petsCatalog');
lclStorage = JSON.parse(lclStorage);

if (lclStorage && lclStorage.length) {
    petsCatalog = lclStorage;
    generateCats();
}

function deletePet() {
    $('.cat__catalog').on('click', function (e) {
        var indxCat = ($(this).index());
        petsCatalog.splice(indxCat, 1);
        generateCats();
        var petStr = JSON.stringify(petsCatalog);
        localStorage.setItem('petsCatalog', petStr);
    });
}

function generateCats() {
    var petStr = '';
    for (var pet of petsCatalog) {
        petStr += "<div class='cat__catalog'><p>" + pet.petName + " (" + pet.petAge + "m.)" +
            "</p><img src='" + pet.petPhoto + "' alt='petPhoto'> <button class='deletePet'>Delete</button></div>"
    }
    $('.catalog').html(petStr);
    $('#petName').val('');
    $('#petAge').val('');
    $('#petPhoto').val('');
}

$('.deletePet').on('click', deletePet);

function addPet() {
    var petName = $('#petName').val();
    var petAge = $('#petAge').val();
    var petPhoto = $('#petPhoto').val();

    var pet = {
        petName: petName,
        petAge: petAge,
        petPhoto: petPhoto
    };

    petsCatalog.push(pet);
    generateCats();
    var petStr = JSON.stringify(petsCatalog);
    localStorage.setItem('petsCatalog', petStr);
}

function clearStorage() {
    localStorage.clear();
    location.reload(true);
}

function showCatalog() {
    console.log(petsCatalog);
}




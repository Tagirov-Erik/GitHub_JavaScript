$('#confirmBtn').click(generateDivsWithCats);

function generateDivsWithCats() {
    var petName = $('#petName').val();
    var petAge = $('#petAge').val();
    var petPhoto = $('#petPhoto').val();

    var str = "<div class='cat__catalog'><p>" + petName +" (" + petAge + "m.)"+
                "</p><img src='" + petPhoto + "' alt='petPhoto'></div>"
                
    $('.catalog').append(str);
}

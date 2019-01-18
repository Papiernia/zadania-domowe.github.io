$(function () {
    $('#przycisk').click(function () {
        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', function (data) {
            $("div").append
            $('#dane-programisty').html('<p> Imię: ' + data.imie + '</p>');
            $('#dane-programisty').append('<p> Nazwisko: ' + data.nazwisko + '</p>');
            $('#dane-programisty').append('<p> Zawód: ' + data.zawod + '</p>');
            $('#dane-programisty').append('<p> Firma: ' + data.firma + '</p>')
        });
    })
})
let $newdiv1 = $("<div id='dane-programisty'></div>");
 
$("button").after($newdiv1);
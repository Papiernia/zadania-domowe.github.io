function afterDataReceived(data) {
    let divElement = $('<div></div>');
    divElement.html(data);
    divElement.appendTo('body');
  }
  
  function getData() {
    $.get('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', afterDataReceived);
  }
  
  $(document).ready(function() {
    $('button').click(getData);
  });
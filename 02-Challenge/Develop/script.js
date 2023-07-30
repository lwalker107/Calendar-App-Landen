$(function () {
  var saveBtnEl = $('.saveBtn');

  saveBtnEl.on('click', function() {

   var timeBlockId = $(this).parent().attr('id');

   var userInput = $('#' + timeBlockId + ' textarea').val().trim();

   if (userInput !== '') {
    localStorage.setItem(timeBlockId, userInput);
   }
  });

  var currentHour = dayjs().hour();

  $('.time-block').each(function () {
    var hour = parseInt($(this).attr('id').split('-')[1]);

    if (hour < currentHour) {
      $(this).addClass('past');
    } else if (hour === currentHour) {
      $(this).addClass('present');
    } else {
      $(this).addClass('future');
    }
  })
  
  $('.time-block').each(function () {
    var timeBlockId = $(this).attr('id');
    var userInput = localStorage.getItem(timeBlockId);

    $("#" + timeBlockId + " textarea").val(userInput);
  });

  var today = dayjs();
  $('#currentDay').text(today.format('MMM D, YYYY' + ' hh:mm'));
});

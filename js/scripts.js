
'use strict'



jQuery(document).ready(function($) {

  /* Preview SMS or USSD*/
  // The "is-invalid" style is added to all the inputs, if we press in the preview Checkbox, only for the purposes of the model.

  // sms inputs
  $('input#off_on_preview:checkbox').change(function () {
    const newLocal = $('#form_sms .form_shields_validate');
    if ($(this).is(":checked")) {
      $(newLocal).removeClass("is-invalid");
      console.log('Estable');
    } else {
      $(newLocal).addClass("is-invalid");
      console.log('Estable');
    }
  });

  // USSD inputs
  $('input#off_on_preview:checkbox').change(function () {
    const newLocal = $('#form_ussd .form_shields_validate');
    if ($(this).is(":checked")) {
      $(newLocal).removeClass("is-invalid");
      console.log('Estable');
    } else {
      $(newLocal).addClass("is-invalid");
      console.log('Estable');
    }
  });

  // All elements within a table in HTML, such as table, thead, tbody, th, tr, td, are invalid elements and you cannot add a link -
  // to them. Accordingly, the HTML5 API is used with the attribute data-<my-data-name>="".

  // Click to href table row location
  $(".clickable-row").click(function() {
      window.location = $(this).data("href");
      console.log("Estable");
  });

});
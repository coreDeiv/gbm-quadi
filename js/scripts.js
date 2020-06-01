
'use strict'

/* Preview SMS or USSD*/
// The "is-invalid" style is added to all the inputs, if we press in the preview Checkbox, only for the purposes of the model.
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
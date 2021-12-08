function watchTextbox() {
    var txtInput = $('#txtInput');
    var lastValue = txtInput.data('lastValue');
    var currentValue = txtInput.val();
    if (lastValue != currentValue) {
      console.log('Value changed from ' + lastValue + ' to ' + currentValue);
      txtInput.data('lastValue', currentValue);
    }
  }

  // Record the initial value of the textbox.
  $('#txtInput').data('lastValue', $('#txtInput').val());

  // Bind to the keypress and user-defined set event.
  $('#txtInput').bind('keypress set', null, watchTextbox);

  // Example of JS code triggering the user event
  $('#btnSetText').click(function (ev) {
    $('#txtInput').val('abc def').trigger('set');
  });
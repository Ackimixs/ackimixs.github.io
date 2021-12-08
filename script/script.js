function watchTextbox() {
    const array1 = ['Guichet Killian','guichet killian', 'killian guichet', 'GUICHET Killian', 'GUICHET KILLIAN', 'GUICHET killian', 'Killian Guichet', 'killian guichet', 'Killian GUICHET']

    var txtInput = $('#txtInput').val();
    if (array1.includes(txtInput)) {
      console.log('That normally work');
      document.getElementById('Secret').innerHTML = "You can't this is me";   // when it's me it's not me
      document.getElementById("submit").disabled = true;
    }
    else {
      document.getElementById('Secret').innerHTML = null;  // When it's not me it's not me
      document.getElementById("submit").disabled = false;
    }
  }
  // Record the initial value of the textbox.
  $('#txtInput').data('lastValue', $('#txtInput').val());

  // Bind to the keypress and user-defined set event.
  $('#txtInput').bind('keypress set', null, watchTextbox);

  $(document).on("click", watchTextbox); 
function watchTextbox() {
    var option1 = 'guichet killian';
    var option2 = 'Guichet Killian';
    var option3 = 'GUICHET Killian';
    var option4 = 'GUICHET KILLIAN';
    var option5 = 'GUICHET killian';
    var option6 = 'Killian Guichet';
    var option7 = 'killian guichet';
    var option8 = 'Killian GUICHET';



    var txtInput = $('#txtInput').val();
    if (txtInput == option1 || txtInput == option2 || txtInput == option3 || txtInput == option4 || txtInput == option5 || txtInput == option6 || txtInput == option7 || txtInput == option8) {
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
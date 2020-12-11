var waiting = false;

function showWaitingPanel() {
  var browse_panel = document.getElementById("photo-browse-layer");
  var waiting_panel = document.getElementById("waiting-layer");

  browse_panel.style.display = "none";
  waiting_panel.style.display = "inline";

  return true;
}

function checkForm() {
  if (waiting) {
    return false;
  }

  if (document.form.file.value == "") {
    alert("Please select a photo to upload.");
    document.form.file.focus();
    return false;
  }

  showWaitingPanel();
  waiting = true;

  return true;
}

function submitForm() {
  if (waiting) {
    return false;
  }

  if (document.form.file.value == "") {
    alert("Please select a photo to upload.");
    document.form.file.focus();
    return false;
  }

  showWaitingPanel();
  waiting = true;

  document.form.submit();

  return true;
}

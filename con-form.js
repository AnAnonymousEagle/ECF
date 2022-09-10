document.getElementById("navbar").style.top = "0";


var form = document.getElementById('sheetdb-form');
form.addEventListener("submit", e => {
  e.preventDefault();
  fetch(form.action, {
      method : "POST",
      body: new FormData(document.getElementById("sheetdb-form")),
  }).then(
      !alert("Your submission is received!"), form.reset()
  )
  });
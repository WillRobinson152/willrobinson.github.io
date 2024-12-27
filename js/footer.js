var today = new Date();
var year = today.getFullYear();

var footer = document.getElementById("copyright");
footer.innerHTML = `<p>© ${year} Will Robinson</p>`

function searchButtonClick() {
  // Search site on google
  var searchQuery = " " + document.getElementById('searchInput').value;
  var url = "https://www.google.com/search" +
  "?q=site%3Azaneharrison.com";
  window.open(url + encodeURI(searchQuery));
}

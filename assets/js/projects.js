
// Functions
function httpGetAsync(theUrl, verb, callback) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() {
    if (xmlHttp.readyState != 4) {
      return;
    }
    callback(xmlHttp.responseText, xmlHttp.status);
  }
  xmlHttp.open(verb, theUrl, true); // true for asynchronous
  xmlHttp.send(null);
}


// Load HomeworkTrackerServer status
httpGetAsync("http://homeworktrack.serble.net:9898", "GET", function callback(responseText, status) {
  if (status == 200) {
    // Ok
    document.getElementById('homeworkServerStatus').innerHTML = "Online";
    return;
  }
  if (status == 0) {
    // Failed
    document.getElementById('homeworkServerStatus').innerHTML = "Offline (Connection Failed)";
    return;
  }
  if (status == 500) {
    // Internal Server Error
    document.getElementById('homeworkServerStatus').innerHTML = "Broken (Internal Server Error)";
    return;
  }
  // Unknown error
  document.getElementById('homeworkServerStatus').innerHTML = "Error (" + status + ")";
});

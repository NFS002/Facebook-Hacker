function clickHandler(e) {
  wtf = document.getElementById('wtf').value;
  wtr = document.getElementById('wtr').value;
    chrome.runtime.sendMessage({wtf: wtf,wtr:wtr}, function(response) {
        this.close();
    });
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('gobt').addEventListener('click', clickHandler);
});
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('copyButton').addEventListener('click', function() {
      var copyText = document.getElementById('myInput');
      copyText.select();
      copyText.setSelectionRange(0, 99999); // For mobile devices
      document.execCommand('copy');
      
      var copySuccess = document.getElementById('copySuccess');
      copySuccess.textContent = 'Copied!';
      copySuccess.classList.add('show-success');
      setTimeout(function() {
          copySuccess.classList.remove('show-success');
      }, 2000);
  });
});
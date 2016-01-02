<script>
  var url='https://raw.githubusercontent.com/vmiis/Unigreen-Food-Pty-Ltd/master/start.html';
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", url, false);
  xmlhttp.send();
  var html=xmlhttp.responseText;
  document.write(html);
</script>

<script>
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", 'https://raw.githubusercontent.com/vmiis/Unigreen-Food-Pty-Ltd/master/start.html', false);
  xmlhttp.send();
  var html=xmlhttp.responseText;
  alert(html);
</script>

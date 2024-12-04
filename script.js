document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  var name = document.getElementById('name').value;
  var year = document.getElementById('year').value;
  
  document.getElementById('url').textContent = `https://localhost:8080/?name=${name}&year=${year}`;
});
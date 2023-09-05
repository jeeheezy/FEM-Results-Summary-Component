let jsonData;

fetch('data.json')
  .then(response => response.json())
  .then(data => {
    jsonData = data;
  });

console.log(jsonData);

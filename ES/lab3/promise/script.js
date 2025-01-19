async function fetchUrl(url) {
    let api = await fetch(url);
    let res = await api.json();
    return res;
  }
  

  (async function createElements() {
    let data = await fetchUrl("https://jsonplaceholder.typicode.com/users");
    let tbody = document.getElementById("tbody");
    data.forEach((element) => {
      tbody.innerHTML += 
      `<tr>
      <td>${element.id}</td>
      <td>${element.name}</td>
      <td>${element.username}</td>
      <td>${element.email}</td>
      <td>${element.address.city}</td>
      <td>${element.phone}</td>
      </tr>
      `;
    });
  })();





  
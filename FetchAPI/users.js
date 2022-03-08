document.getElementById("fetchUserBtn").addEventListener("click", (e) => {
  const URL = "https://jsonplaceholder.typicode.com/users";
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      let html = "";
      data.forEach((element) => {
        html += ` <tr>
              <th scope="row">${element.id}</th>
              <td>${element.name}</td>
              <td>${element.email}</td>
              <td>${element.phone}</td>
              <td>${element.website}</td>
           
            </tr>    `;
        document.getElementById("tbody").innerHTML = html;
      });
    });
});

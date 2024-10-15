const content = document.querySelector(".content");
const url = "https://dummyjson.com";

async function getDate() {
  let qurey = new URLSearchParams(window.location.search);
  let id = qurey.get("q");
  const respons = await fetch(`${url}/products/${id}`);

  respons.json().then((res) => cratContent(res));
}
getDate();

function cratContent(data) {
  console.log(data);
  content.innerHTML = `
  <div class="content">
      <div>
        <img src="${data.images[0]}" alt="" />
      </div>
      <div>
        <h1>${data.title}</h1>
        <h2>${data.price}</h2>
        <p>${data.description}</p>
      </div>
    </div>
    
  `;
}

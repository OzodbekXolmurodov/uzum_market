const wrapper = document.querySelector(".arzon__big-div");
const loding = document.querySelector(".loding");
const qushish = document.querySelector(".oxirgi-btn");
const categore = document.querySelector(".kategore");

const url = "https://dummyjson.com";

let limit = 10;
let offset = 1;

async function getData(endpoint, count) {
  const response = await fetch(
    `${url}/${endpoint}?limit=${limit}&skip=${limit * (count - 1)}`
  );
  response
    .json()
    .then((res) => createProduct(res))
    .catch((err) => console.log(err))
    .finally(() => {
      loding.style.display = "none";
    });
}

getData("products", offset);

function createProduct(data) {
  data.products.forEach((product) => {
    const card = document.createElement("div");
    card.className = "arzon__div";

    const productImage =
      product.images && product.images.length
        ? product.images[0]
        : "imgs/placeholder-image.svg";

    card.innerHTML = `
      <div class="image-container">
          <img class="mahsulot" src="${productImage}" alt="${product.title}" />
      </div>
      <div class="tarif">
        <p class="tanlov">${product.title}</p>
        <div class="baxo">
          <img src="imgs/span.hidden-mbs_margin.svg" alt="rasim" />
          <p class="sharsh">(${product.rating} sharsh)</p>
        </div>
        <div class="yulov">
          <p class="yulov__sum">${product.price} so'm</p>
        </div>
        <div class="arzon__div-2">
          <div>
            <del class="anarxi">${product.price} so'm</del>
            <p class="sikidga">${product.discountPercentage} %</p>
          </div>
          <img class="shop-btn" src="imgs/Button.svg" alt="rasim" />
        </div>
        <div>
          <img class="btn-yurak" src="imgs/Button (1).svg" alt="yurak" />
          <p class="Eksklyuziv">Eksklyuziv</p>
        </div>
      </div>
    `;

    wrapper.appendChild(card);
  });
}

qushish.addEventListener("click", () => {
  offset++;
  getData("products", offset);
});

async function getCategore(endpoint) {
  const response = await fetch(`${url}/${endpoint}`);
  response.json().then((res) => createCategore(res));
}
getCategore("products/category-list");

function createCategore(data) {
  data.forEach((item) => {
    const li = document.createElement("li");
    const dataEl = document.createElement("data");
    li.className = "big-p";
    dataEl.innerHTML = item;
    dataEl.setAttribute("value", `/category/${item}`);

    dataEl.addEventListener("click", (e) => {
      getData(`products${e.target.value}`, offset);
    });

    li.appendChild(dataEl);
    categore.appendChild(li);
  });
}

onload = function () {
  let banner = document.querySelector(".banner");
  let btnBanner = document.querySelector(".btn-banner");
  let btnBanner2 = document.querySelector(".btn-banner-2");

  let bannerImages = [
    "https://images.uzum.uz/cs4db9mo5c8cka40d080/main_page_banner.jpg",
    "https://images.uzum.uz/crs0p33i153t30una9sg/main_page_banner.jpg",
    "https://images.uzum.uz/crtc9rc0u44g6jops5ug/main_page_banner.jpg",
  ];
  let result = 0;

  function changeImage() {
    result = (result + 1) % bannerImages.length;
    banner.src = bannerImages[result];
  }

  btnBanner.addEventListener("click", changeImage);
  btnBanner2.addEventListener("click", changeImage);

  setInterval(changeImage, 5000);
};

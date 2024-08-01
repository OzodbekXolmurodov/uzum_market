const findElement = (element, parent = document) => {
  return parent.querySelector(element);
};

const elWrapperProducts = findElement(".arzon__big-div");
const elProductTemplate = findElement("#template");

const products = [
  {
    id: 1,
    img: "imgs/t_product_540_high.jpg (2).png",
    isLaked: false,
    title: "prodact",
    reting: "4",
    real_price: "1234",
    discount_pricd: "123",
    monthly_payment: "2e2132",
  },
  {
    id: 2,
    img: "imgs/t_product_540_high.jpg (2).png",
    isLaked: false,
    title: "prodact",
    reting: "4",
    real_price: "1234",
    discount_pricd: "123",
    monthly_payment: "112334",
  },
];
function renderProducts(list = products, parent = elWrapperProducts) {
  parent.textContent = null;
  list.forEach((product) => {
    const newTemplate = elProductTemplate.content.cloneNode(true);

    const elTopImg = findElement(".mahsulot", newTemplate);
    const elTitle = findElement(".tanlov", newTemplate);
    const elPrice = findElement(".yulov", newTemplate);
    const elRealPrice = findElement(".anarxi", newTemplate);
    const elDiccountPrice = findElement(".sikidga", newTemplate);
    const elFavoritBtn = findElement(".btn-yurak", newTemplate);
    const elShopBtn = findElement(".shop-btn", newTemplate);

    elFavoritBtn.dataset.ad = product.id;
    elShopBtn.dataset.ad = product.id;
    elTopImg.src = product.img;
    elTitle.textContent = product.title;
    elPrice.textContent = product.monthly_payment;
    elRealPrice.textContent = product.real_price;
    elDiccountPrice.textContent = product.discount_pricd;

    parent.appendChild(newTemplate);
  });
}
renderProducts();

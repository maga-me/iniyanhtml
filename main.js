// function asd() {
//   var d = new Date(fetchedData[0].startTime);

//   var date = d.getDate();
//   var month = d.getMonth() + 1 < 10 ? `0${d.getMonth() + 1}` : d.getMonth() + 1;
//   var year = d.getFullYear();

//   var hours = d.getHours().toString().padStart(2, "0");
//   var minutes = d.getMinutes().toString().padStart(2, "0");
//   var seconds = d.getSeconds().toString().padStart(2, "0");

//   console.log(`${date}.${month}.${year} ${hours}:${minutes}:${seconds}`);
//   // console.log(`0${d.getDate()}.0${d.getMonth() + 1}.${d.getFullYear()}`);
// }

// setTimeout(() => {
//   asd();
// }, 3000);

function dataAdd() {
  console.log(dataClone);

  var list = document.querySelector(".orders__list");

  for (let i = 1; i < dataClone.length; i++) {
    // Create a new list item element

    var d = new Date(dataClone[0].startTime);

    var date = d.getDate();
    var month = d.getMonth() + 1 < 10 ? `0${d.getMonth() + 1}` : d.getMonth() + 1;
    var year = d.getFullYear();

    var hours = d.getHours().toString().padStart(2, "0");
    var minutes = d.getMinutes().toString().padStart(2, "0");
    var seconds = d.getSeconds().toString().padStart(2, "0");

    var dateAndTime = `${date}.${month}.${year} ${hours}:${minutes}:${seconds}`;

    var listItem = document.createElement("li");
    listItem.className = "orders__item";
    listItem.innerHTML = `
    <li class="orders__item">
    <div class="orders__item-status">
      <img
        src="./images/Delivery.svg"
        alt=""
        class="orders__item-status__img"
      />
  
      <img
        src="./images/ArrowDownUp.svg"
        alt=""
        class="orders__item-array"
      />
    </div>
  
    <div class="orders__item-data">
      <div class="orders__item-data__tab">
        <span class="orders__item-id orders__item-info item__sectitle"
          >ID:<span>${dataClone[i].id}</span></span
        >
        <div
          class="orders__item-details orders__item-info item__sectitle"
        >
          <span class="orders__item-order__num">№73123</span>
          <span class="orders__item-order__date"
            >${dateAndTime}</span
          >
        </div>
  
        <!-- <div class="orders__item-number">Номер заказа</div> -->
        <span
          class="orders__item-partnerPoint orders__item-info item__sectitle"
          >Филиал:
          <span>Шумерля</span>
        </span>
        <span
          class="orders__item-client orders__item-info item__sectitle"
          >Клиент:
          <span>+79603098486</span>
        </span>
        <span
          class="orders__item-address orders__item-info item__sectitle"
          >Адрес доставки: <span>Moscow 12-12-12</span></span
        >
        <span
          class="orders__item-amount orders__item-info item__sectitle"
          >Сумма заказа: <span>999 ₽</span></span
        >
        <span
          class="orders__item-paymentType orders__item-info item__sectitle"
          >Способ оплаты:
          <span>Терминал</span>
        </span>
        <span
          class="orders__item-orderType orders__item-info item__sectitle"
          >Отметки: <span>Самовывоз</span></span
        >
      </div>
      <div class="orders__item-components">
        <div class="orders__item-components__left">
          <div class="orders__item-components__wrapper">
            <div
              class="orders__item-components__order orders__item-components__boxes"
            >
              <h3
                class="order__item-components__title component__title"
              >
                Заказ
              </h3>
  
              <ul class="order__item-components__list">
                <li class="order__item-components__item">
                  1 x Сет Смарт
                  <span class="order__item-components__item-price"
                    >949$</span
                  >
                </li>
                <li class="order__item-components__item">
                  1 x Курочка Барбекю 40 см
                  <span class="order__item-components__item-price"
                    >765$</span
                  >
                </li>
              </ul>
            </div>
  
            <div
              class="orders__item-components__note orders__item-components__boxes"
            >
              <h3
                class="orders__item-components__note-title component__title"
              >
                Примечание
              </h3>
              <p class="orders__item-components__note-txt">
                Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Nobis ipsam, consequatur voluptates beatae
                laudantium voluptas repellendus doloribus eius aperiam
                accusamus vel voluptatibus magni, unde laborum quasi
                molestias optio minima pariatur?
              </p>
            </div>
          </div>
          <div class="orders__item-components__price">
            <span
              class="orders__item-components__price-order item__sectitle"
            >
              Сумма заказа
              <span
                class="orders__item-components__price-main item__sectitle"
                >1 588,00 $</span
              >
            </span>
            <span
              class="orders__item-components__price-discount item__sectitle"
            >
              Бонусная скидка
              <span
                class="orders__item-components__price-main item__sectitle"
                >477,00 $</span
              >
            </span>
            <span
              class="orders__item-components__price-total item__sectitle"
            >
              Итого
              <span class="orders__item-components__price-main"
                >1 111,00 $</span
              >
            </span>
            <span
              class="orders__item-components__price-paymentType item__sectitle"
            >
              Способ оплаты
              <span
                class="orders__item-components__price-main item__sectitle"
                >Терминал</span
              >
            </span>
          </div>
        </div>
        <div class="orders__item-components__right">
          <div
            class="orders__item-components__client orders__item-components__boxes"
          >
            <h3
              class="orders__item-components__client-title component__title"
            >
              Клиент
            </h3>
  
            <div class="orders__item-components__client-wrapper">
              <span
                class="orders__item-components__client-phone orders__item-components__client-data item__sectitle"
              >
                Телефон
                <span>+7 909 279 02 68</span>
              </span>
  
              <span
                class="orders__item-components__client-address orders__item-components__client-data item__sectitle"
              >
                Адрес доставки
                <span>Moskva 12-12-12</span>
                <span>Подъезд: 1. Этаж: 5. Домофон: 0</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </li>
    `;
    // Append the new list item to the list
    list.appendChild(listItem);
  }
}

dataAdd();

const itemButtons = document.querySelectorAll(".orders__item-array");

itemButtons.forEach((button, index) => {
  var toggleBooleanClicker = false;
  button.addEventListener("click", () => {
    // Get the corresponding item component
    const itemComponent = document.querySelectorAll(".orders__item-components")[
      index
    ];

    // Toggle the display of the item component
    if (itemComponent.style.maxHeight) {
      itemComponent.style.maxHeight = null;
      itemComponent.style.padding = null;
    } else {
      itemComponent.style.maxHeight = itemComponent.scrollHeight + 60 + "px";
      itemComponent.style.padding = "20px";
    }

    if (toggleBooleanClicker == false) {
      toggleBooleanClicker = true;
      button.classList.add("active");
      itemComponent.classList.add("active");
    } else {
      toggleBooleanClicker = false;
      button.classList.remove("active");
      itemComponent.classList.remove("active");
    }
  });
});

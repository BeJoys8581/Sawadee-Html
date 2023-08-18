
document.addEventListener("DOMContentLoaded", function () {
  const items = [
    {
      id: 1,
      name: "Macha Tea",
      price: 250,
      quantity: 0,
    },
    {
      id: 2,
      name: "Thai Tea",
      price: 250,
      quantity: 0,
    },
    {
      id: 3,
      name: "Black Tea",
      price: 250,
      quantity: 0,
    },
    {
      id: 4,
      name: "White Tea",
      price: 250,
      quantity: 0,
    },
  ];

  
const updateTotal = () => {
    let total = 0;
    items.forEach((item) => {
      total += item.price * item.quantity;
    });

    if (total > 1000) {
      total *= 0.9;
    }

    function numberWithComma(x) {
      x = x.toString();
      var pattern = /(-?\d+)(\d{3})/;
      while (pattern.test(x))
          x = x.replace(pattern, "$1,$2");
      return x;
  }

    document.querySelector(".total").textContent = `${total} ฿` ;
  };

  items.forEach((item) => {
    const plusButton = document.querySelector(`#plus${item.id}`);
    const minusButton = document.querySelector(`#minus${item.id}`);
    const quantityInput = document.querySelector(`#quantity${item.id}`);

    plusButton.addEventListener("click", () => {
      item.quantity++;
      quantityInput.value = item.quantity;
      updateTotal();
    });

    minusButton.addEventListener("click", () => {
      if (item.quantity > 0) {
        item.quantity--;
        quantityInput.value = item.quantity;
        updateTotal();
      }
    });
  });
});


const modal = document.querySelector('#my-modal');
const modalBtn = document.querySelector('#modal-btn');
const closeBtn = document.querySelector('.close');


modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

function openModal() {
  modal.style.display = 'block';
}


function closeModal() {
  modal.style.display = 'none';
}


function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');

  form.addEventListener('submit', function (event) {
    const phoneInput = document.getElementById('form5');
    const phonePattern = /^[0-9]{10}$/;

    if (!phonePattern.test(phoneInput.value)) {
      event.preventDefault();
      alert('Please enter a valid 10-digit phone number.');
    }
  });
});

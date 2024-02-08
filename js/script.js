const priceCard = [
  {
    img: "https://www.v4consumer.co.uk/images/fttp-prime-1000.png",
    speed: "62",
    fullFiber: "Full FIber 80",
    price: "£38.99",
    accordionList: [
      "62 Mbps average download speed",
      "20 Mbps estimated upload speed",
      "£0 activation fee, was £20",
      "Broadband only, no phone required",
      "Free router included",
    ],
  },
  {
    img: "https://www.v4consumer.co.uk/images/fttp-prime-80.jpg",
    speed: "140",
    fullFiber: "Full FIber 160",
    price: "£41.99",
    accordionList: [
      "140 Mbps average download speed",
      "30 Mbps estimated upload speed",
      "£0 activation fee, was £20",
      "Broadband only, no phone required",
      "Free router included",
    ],
  },
  {
    img: "https://www.v4consumer.co.uk/images/fttp-prime-160.jpg",
    speed: "900",
    fullFiber: "Full FIber 1000",
    price: "£54.99",
    accordionList: [
      "900 Mbps average download speed",
      "115 Mbps estimated upload speed",
      "£0 activation fee, was £20",
      "Broadband only, no phone required",
      "Free router included",
    ],
  },
];
const navbar = document.querySelector(".navbar-fixed");
const owlCarousel = document.querySelector("#owlCarousel");

document.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    navbar.classList.add("navbar-overlay");
  } else {
    navbar.classList.remove("navbar-overlay");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  priceCard.forEach((item, index) => {
    let accordionItems = item.accordionList
      .map((list) => `<li>${list}</li>`)
      .join("");

    owlCarousel.innerHTML += `
<div class="item shadow">
    <div class="card  me-md-2">
        <div>
            <img class="card-img-top w-100" src="${item.img}" alt="plan-image">
        </div>
        <div class="card-black-header">
            <p><span class="speed">${item.speed}</span> <span class="mbps">Mbps</span> Average Download Speed
            </p>
        </div>
        <div class="content">
            <div class="d-flex justify-content-between px-1">
                <span class="full-fiber">${item.fullFiber}</span>
                <span class="amount">$${item.price}</span>
            </div>
            <div class="px-1 text-end">
                <span>a month</span>
            </div>
            <div class="mx-1">
                <div class="accordion" id="accordionExample${index}">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne${index}">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseOne${index}" aria-expanded="true"
                                aria-controls="collapseOne${index}">
                                <span class="accordion-button-text">&gt; Package and speed
                                    details</span>
                            </button>
                        </h2>
                        <div id="collapseOne${index}" class="accordion-collapse collapse "
                            aria-labelledby="headingOne${index}" data-bs-parent="#accordionExample${index}">
                            <div class="accordion-body">
                                <ul>
                                    ${accordionItems}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="contract-month p-1 mb-2">
                12 month contract
            </div>
            
            <div class="d-flex justify-content-center align-items-center pt-1 py-2">
                <button class="btn-yellow">Check availability</button>
            </div>
        </div>
    </div>
</div>`;
  });
});

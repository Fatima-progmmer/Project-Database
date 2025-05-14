const pizzaImage = document.getElementById("pizza-img");
const sizeButtons = document.querySelectorAll(".size-btn");

const sizeToImage = {
  S: "../Assests/Pizza-S.png",
  M: "../Assests/Pizza-M.png",
  L: "../Assests/Pizzza-L.png",
  XL: "../Assests/Pizza-Xl.png"
};

sizeButtons.forEach(button => {
  button.addEventListener("click", () => {
    const selectedSize = button.getAttribute("data-size");
    pizzaImage.src = sizeToImage[selectedSize];
  });
});

const locationTabs = document.querySelectorAll('.location-tab');

        locationTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                locationTabs.forEach(t => {
                    t.classList.remove('active');
                });
                this.classList.add('active');
            });
        });

const locations = {
    'alden-bridge': {
        address: '8000 Research Forest Dr, Suite 340<br>The Woodlands, TX 77382',
        hours: 'Sun-Thu: 11:00 am - 9:00 pm<br>Fri-Sat: 11:00 am - 10:00 pm',
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27744.55734710894!2d-95.54199797321527!3d30.16111571471811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13!3m3!1m2!1s0x8647384232777777%3A0x828157527248b99!2s8000%20Research%20Forest%20Dr%2C%20The%20Woodlands%2C%20TX%2077382%2C%20USA!5e0!3m2!1sen!2sus!4v1708092289614!5m2!1sen!2sus"
    },
    'rayford': {
        address: '214 Rayford Rd<br>Spring, TX 77386',
        hours: 'Mon-Sat: 10:00 am - 10:00 pm<br>Sun: 12:00 pm - 8:00 pm',
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27728.974488085133!2d-95.44212467320415!3d30.088318715171136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864741c341c9b22b%3A0x9105b7517b949615!2s214%20Rayford%20Rd%2C%20Spring%2C%20TX%2077386%2C%20USA!5e0!3m2!1sen!2sus!4v1708092442477!5m2!1sen!2sus'
    },
    'creekside': {
        address: '2643 Kuykendahl Rd<br>The Woodlands, TX 77389',
        hours: 'Sun-Thu: 11:00 am - 9:00 pm<br>Fri-Sat: 11:00 am - 10:00 pm',
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27742.186894127185!2d-95.48123587321376!3d30.14933781471647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86473e13b8295555%3A0x685b17b18f5223b!2s2643%20Kuykendahl%20Rd%2C%20The%20Woodlands%2C%20TX%2077389%2C%20USA!5e0!3m2!1sen!2sus!4v1708092544192!5m2!1sen!2sus'
    },
    'woodforest': {
        address: '19255 Pinehurst Trail Dr<br>Navasota, TX 77868',
        hours: 'Mon-Sun: 11:00 am - 9:00 pm',
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6943.491679722745!2d-95.9115891878127!3d30.50731977782328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8645d1ce157b57c9%3A0x1b6555c567541e97!2s19255%20Pinehurst%20Trail%20Dr%2C%20Navasota%2C%20TX%2077868%2C%20USA!5e0!3m2!1sen!2sus!4v1708092629415!5m2!1sen!2sus'
    }
};


document.querySelectorAll('.location-tab').forEach(tab => {
            tab.addEventListener('click', function () {
                document.querySelector('.location-tab.active').classList.remove('active');
                this.classList.add('active');

                const location = this.dataset.location;
                const details = document.querySelector('.location-details');

                details.querySelector('.address-title').textContent = location.toUpperCase();
                details.querySelector('.address').innerHTML = locations[location].address;
                details.querySelector('.hours').innerHTML = locations[location].hours;
                details.querySelector('.map').src = locations[location].map;
            });
        });

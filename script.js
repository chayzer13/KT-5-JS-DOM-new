document.addEventListener('DOMContentLoaded', function() {

    document.querySelector('.card-number-input').oninput = function() {
        document.querySelector('.card-number-box').innerText = this.value;
    };

    document.querySelector('.card-holder-input').oninput = function() {
        document.querySelector('.card-holder-name').innerText = this.value;
    };

    document.querySelector('.month-input').oninput = function() {
        document.querySelector('.exp-month').innerText = this.value;
    };

    document.querySelector('.year-input').oninput = function() {
        document.querySelector('.exp-year').innerText = this.value;
    };

    document.querySelector('.cvv-input').oninput = function() {
        document.querySelector('.cvv-box').innerText = this.value;
    };


    document.querySelector('.cvv-input').onmouseenter = function() {
        document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(-180deg)';
        document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(0deg)';
    };

    document.querySelector('.cvv-input').onmouseleave = function() {
        document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(0deg)';
        document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(180deg)';
    };

    document.querySelector('.submit-btn').addEventListener('click', function(e) {
        e.preventDefault();

        var cardNumber = document.querySelector('.card-number-input').value;
        var cardHolder = document.querySelector('.card-holder-input').value;
        var expMonth = document.querySelector('.month-input').value;
        var expYear = document.querySelector('.year-input').value;
        var cvv = document.querySelector('.cvv-input').value;
        var bankName = document.querySelector('.bank-selector').value;
        var paymentSystem = document.querySelector('.payment-system-selector').value;

        var table = document.querySelector('table tbody');
        var newRow = table.insertRow();
        newRow.innerHTML = `
            <td>${cardNumber}</td>
            <td>${cardHolder}</td>
            <td>${expMonth}/${expYear}</td>
            <td>${cvv}</td>
            <td>${bankName}</td>
            <td>${paymentSystem}</td>
        `;


        document.querySelector('.card-number-input').value = '';
        document.querySelector('.card-holder-input').value = '';
        document.querySelector('.month-input').value = '';
        document.querySelector('.year-input').value = '';
        document.querySelector('.cvv-input').value = '';


        document.querySelector('.card-number-box').innerText = 'Номер карты';
        document.querySelector('.card-holder-name').innerText = 'Полное имя';
        document.querySelector('.exp-month').innerText = 'мм';
        document.querySelector('.exp-year').innerText = 'гг';
        document.querySelector('.cvv-box').innerText = '';
    });


    var bankSelector = document.querySelector('.bank-selector');
    var paymentSystemSelector = document.querySelector('.payment-system-selector');
    var bankNameElement = document.querySelector('.bank-name');
    var paymentSystemLogoElement = document.querySelectorAll('.payment-system-logo');


    function updateBankName() {
        bankNameElement.textContent = bankSelector.value;
    }

    function updatePaymentSystemLogo() {
        var logos = {
            'Visa': 'image/visa.png',
            'MasterCard': 'image/mastercard.png',
            'Mir': 'image/mir-logo.png'
        };
        var logoPath = logos[paymentSystemSelector.value];
        paymentSystemLogoElement.forEach(function(logoElement) {
            logoElement.src = logoPath;
        });
    }


    bankSelector.addEventListener('change', updateBankName);
    paymentSystemSelector.addEventListener('change', updatePaymentSystemLogo);


    updateBankName();
    updatePaymentSystemLogo();
});

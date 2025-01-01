document.addEventListener('DOMContentLoaded', function () {
    const persianOnlyFields = [
        '#billing_first_name',
        '#billing_last_name'
    ];

    const persianAndNumbersFields = [
        '#billing_address_1',
        '#billing_address_2'
    ];

    const numericOnlyFields = [
        '#billing_postcode',
        '#username'
    ];

    persianOnlyFields.forEach(function (selector) {
        const field = document.querySelector(selector);
        if (field) {
            field.addEventListener('input', function () {
                this.value = this.value.replace(/[^آ-ی\s]/g, '');
            });
        }
    });

    persianAndNumbersFields.forEach(function (selector) {
        const field = document.querySelector(selector);
        if (field) {
            field.addEventListener('input', function () {
                this.value = this.value.replace(/[^آ-ی\s\d]/g, '');
            });
        }
    });

    numericOnlyFields.forEach(function (selector) {
        const field = document.querySelector(selector);
        if (field) {
            field.addEventListener('input', function () {
                this.value = this.value.replace(/[^0-9]/g, '');
            });
        }
    });
});

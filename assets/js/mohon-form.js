$(document).ready(function () {
    $('#mohonform').on('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        // Execute reCAPTCHA
        grecaptcha.execute('6LdmCn0nAAAAANC8dQDeC3bko97zlloPkuFcyP7_', { action: 'submit' }).then(function(token) {

            // Hide Form UI and Button, Processing Form
            $(".form-row").hide();
            $(".checkbox-row").hide();
            $(".button-row").hide();
            $(".form-error").hide();
            $(".form-process").show();

            // Get form data and create a JSON object
            var formData = {
                name: $('#fullName').val(),
                phone: $('#phone').val(),
                email: $('#email').val(),
                jobSector: $('#jobSector').val(),
                loanAmount: $('#loanAmount').val(),
                address: $('#address').val(),
                recaptchaToken: token
            };

            // AJAX request
            $.ajax({
                url: 'https://linker.leadsync.com.my/api/web/mohonform',
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify(formData), // Convert the object to JSON format
                success: function (response) {
                    $(".form-process").hide();
                    $(".form-error").hide();

                    // Get saved gclid from sessionStorage
                    const gclid = sessionStorage.getItem('gclid');
                    let redirectUrl = '';

                    // Redirect
                    if (formData.jobSector == "Penjawat-Awam" || formData.jobSector == "Pekerja-GLC") {
                        redirectUrl = 'thank-you-aplikasi-awam';
                    } 
                    else {
                        redirectUrl = 'thank-you-aplikasi-swasta';
                    }

                    // Append gclid if exists
                    if (gclid) {
                        const separator = redirectUrl.includes('?') ? '&' : '?';
                        redirectUrl += `${separator}gclid=${encodeURIComponent(gclid)}`;
                    }

                    // Redirect to thank you page
                    window.location.href = redirectUrl;
                },
                error: function (xhr, status, error) {
                    console.log('Error:', error);
                    $(".form-process").hide();
                    $(".form-error").show();
                }
            });
        }).catch(function (error) {
            console.log('Error retrieving reCAPTCHA token:', error);
        })
    });

    // check reCAPTCHA ready
    grecaptcha.ready(() => {
        console.log('grecaptcha form is ready');
    })

});

document.addEventListener('DOMContentLoaded', function () {
    const phoneInput = document.getElementById('phone');

    phoneInput.addEventListener('input', function () {
        // Remove non-numeric characters from the input
        phoneInput.value = phoneInput.value.replace(/\D/g, '');
    });
});

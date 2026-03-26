$(document).ready(function () {
    $('#subscribeNewsletterForm').on('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        // Get form data and create a JSON object
        var formData = {
            email: $('#emailNewsletter').val()
        };

        // Validate email before sending request
        if (!formData.email || !validateEmail(formData.email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // AJAX request
        $.ajax({
            url: 'https://linker.leadsync.com.my/api/web/subscribe-newsletter-form',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(formData), // Convert the object to JSON format
            success: function (response) {
                $('#subscribeNewsletterForm').hide();
                $('#error-subscribe-text').hide();
                $('#success-subscribe-text').show();
            },
            error: function (xhr, status, error) {
                // console.log('Error:', error);
                const errorMessage = xhr.responseJSON?.message;
                if (errorMessage === "EmailSubscribed") {
                    $('#error-subscribe-text').show();
                }
                else {
                    $('#error-subscribe-text').text("Penghantaran gagal. Sila cuba lagi.").show();
                }
            }
        });
    });


    // Email validation function
    function validateEmail(email) {
        var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});

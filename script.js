document.addEventListener('DOMContentLoaded', function () {
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const button = bookingForm.querySelector('button');
            const originalText = button.textContent;

            button.textContent = 'Request Sent!';
            button.disabled = true;

            setTimeout(function () {
                button.textContent = originalText;
                button.disabled = false;
                bookingForm.reset();
            }, 2000);
        });
    }
});



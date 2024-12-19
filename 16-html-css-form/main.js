// Validazione form Bootstrap
(function () {
    'use strict';

    // Prendi tutti i form con classe 'needs-validation'
    const forms = document.querySelectorAll('.needs-validation');

    // Cicla sui form e previeni l'invio se invalidi
    Array.from(forms).forEach(function (form) {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                event.preventDefault(); // Blocca l'invio del form
                event.stopPropagation();
            }

            form.classList.add('was-validated'); // Aggiunge la classe per attivare la validazione visiva
        }, false);
    });
})();
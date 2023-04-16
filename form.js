$(document).ready(function () {

    // Script per invio del form (Triggerato quando viene premuto il submit button)
    $('form').submit(function (event) {

        // Previene il normale invio del form
        event.preventDefault();

        // Crea una post request contenente i valori del form
        $.post("https://test.toxi10.dev/lex/form", $(this).serialize(), function (data, status) {

            console.log(status, data)
            // Controlla se lo stato di risposta della post request è 200 (SUCCESS)
            if (status == "success" && data.code == 201) {

                // Visualizza la pagina di successo
                window.location.href = "submit.html";

            } else {

                // Visualizza la pagina di errore
                window.location.href = "error.html";

            }
        });
    });

    // Script per olive (Triggerato quando lo stato di input[name="olive"] cambia)
    $('input[name="olive"]').change(function () {

        // Controlla se il radio input selezionato è "mipiaccionoleolive"
        if ($(this).is(':checked') && $(this).attr('id') == "mipiaccionoleolive") {

            // True:    Mostra il radio input per scegliere le olive
            $('#olivesi').css('display', 'block');

        } else {

            // False:    Nasconde il radio input per scegliere le olive
            $('#olivesi').css('display', 'none');
            
        }
    })
})
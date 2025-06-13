$(document).ready(function() {
    $('#dbForm').submit(function(e) {
        e.preventDefault();
        
        Swal.fire({
            title: 'Testando conexão...',
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading()
            }
        });

        $.ajax({
            type: 'POST',
            url: 'test_connection.php',
            data: $(this).serialize(),
            dataType: 'json',
            success: function(response) {
                Swal.close();
                if (response.success) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Sucesso!',
                        text: response.message,
                        confirmButtonColor: '#3085d6'
                    });
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Erro na conexão',
                        text: response.message,
                        confirmButtonColor: '#d33'
                    });
                }
            },
            error: function() {
                Swal.fire({
                    icon: 'error',
                    title: 'Erro',
                    text: 'Falha na comunicação com o servidor',
                    confirmButtonColor: '#d33'
                });
            }
        });
    });
});
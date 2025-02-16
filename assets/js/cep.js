function buscarCEP() {
    const cep = document.getElementById('cep').value;
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(data => {
            if (!data.erro) {
                document.getElementById('cidade').value = data.localidade;
                document.getElementById('rua').value = data.logradouro;
            } else {
                alert('CEP inválido');
            }
        })
        .catch(error => console.error('Erro ao buscar CEP:', error));
}
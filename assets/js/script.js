document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.menu').addEventListener('click', function() {
        const menuDropdown = document.getElementById('menuDropdown');
        if (menuDropdown.style.display === 'block') {
            menuDropdown.style.display = 'none';
        } else {
            menuDropdown.style.display = 'block';
        }
    });

    // Exemplo de dados de denúncias
    const denuncias = [
        {
            descricao: 'Denúncia de exemplo',
            cep: '12345-678',
            cidade: 'São Paulo',
            rua: 'Rua Exemplo',
            numero: '123'
        },
        // Adicione mais denúncias aqui
    ];

    const tbody = document.querySelector('tbody');
    denuncias.forEach(denuncia => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${denuncia.descricao}</td>
            <td>${denuncia.cep}</td>
            <td>${denuncia.cidade}</td>
            <td>${denuncia.rua}</td>
            <td>${denuncia.numero}</td>
        `;
        tbody.appendChild(tr);
    });
});
async function enviarDadosParaAPI(nome, telefone) { //definição da função
    try { //tratamento de erros
        const response = await fetch('URL_DA_SUA_API', { //esperar até que a requisição com Fetch seja recebida. Substituir o entdereço pela URL real da API
            method: 'POST', //método de uma requisição
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({//convertendo o objeto em uma string JSON
                nome: nome,
                telefone: telefone
            }),
        });

        if (!response.ok) {
            throw new Error('Erro ao enviar os dados!');
        }

        const dados = await response.json();//aguardando a conversão da resposta para JSON
        console.log('Resposta da API:', dados);// o resultado é armazenado na variável dados
    } catch (erro) {
        console.error('Erro:', erro);
    }
}

// Alterar o evento do formulário para enviar dados para a API
form.addEventListener("submit", function (event) {
    event.preventDefault();
//obtendo os valores do formulário
    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;

    if (nome && telefone) {
        erroMessage.style.display = "none";
        enviarDadosParaAPI(nome, telefone);  // Envia os dados para a API
    } else {
        erroMessage.style.display = "block";
        erroMessage.textContent = "Por favor, preencha todos os campos!";
    }
});
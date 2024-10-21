const form = document.getElementById('contact-form');

const erroMessage = document.getElementById('error-message');

form.addEventListener("submit", function (event){
    event.preventDefault();

        const nome= document.getElementById("nome").value;
        const telefone= document.getElementById("telefone").value;

        if (nome && telefone){
            erroMessage.style.display = "none"; //esconde a mensagem de erro
            erroMessage.style.display = "block";
            erroMessage.textContent="Enviado com sucesso!" ; 
            console.log("Formulário enviado com sucesso!");
        } else {
            erroMessage.style.display = "block"; //mostra a mensagem de erro
            erroMessage.textContent="Por favor, preencha todos os campos!";
            console.log("Erro ao enviar formulário")
           
    }
});
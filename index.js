/* function clicarNoBotao () {
    const form = document.querySelector('#form-contato');
    const botaoEnviar = document.querySelector('.botao-contato');

    // Pegando os elementos dos campos de E-mail e WhatsApp
    const contatoWhatsapp = document.getElementById('contato_whatsapp');
    const contatoEmail = document.getElementById('contato_email');
    const emailDiv = document.getElementById('email-div');
    const emailInput = document.getElementById('email'); // Campo de e-mail

    // Inicialmente, o campo de E-mail fica oculto
    emailDiv.style.display = 'none';

    // Quando selecionar WhatsApp
    contatoWhatsapp.addEventListener('change', () => {
        if (contatoWhatsapp.checked) {
            emailDiv.style.display = 'none'; // Esconde o campo de E-mail
        }
    });

    // Quando selecionar E-mail
    contatoEmail.addEventListener('change', () => {
        if (contatoEmail.checked) {
            emailDiv.style.display = 'block'; // Exibe o campo de E-mail
        }
    });

    botaoEnviar.addEventListener('click', (event) => {
        event.preventDefault(); // Impede o envio tradicional do formulário

        const nome = document.getElementById('nome').value;
        const sobrenome = document.getElementById('sobrenome').value;
        const email = emailInput.value;  // Obtém o valor do campo de E-mail
        const endereco = document.getElementById('endereco').value;
        const celular = document.getElementById('celular').value;
        const contato = document.querySelector('input[name="meio_contato"]:checked');

        // Verifica se todos os campos obrigatórios estão preenchidos
        if (!nome || !sobrenome || !endereco || !celular || !contato || (contatoEmail.checked && !email)) {
            alert('Por favor! Preencha todos os formulários corretamente!');
        } else {
            // Exibe o alerta de sucesso
            alert('Formulário enviado! Em breve entraremos em contato!');
            
            // Envia o formulário via AJAX para o Formspree
            const formData = new FormData(form);

            fetch(form.action, {
                method: 'POST',
                body: formData
            })
            .then(response => {
                // Supondo que o envio seja bem-sucedido, exibe a mensagem de sucesso
                document.getElementById('mensagem-sucesso').style.display = 'block';
                form.reset();  // Limpa o formulário após o envio
            })
            .catch(error => {
                // Não estamos tratando erro visual aqui porque o envio para o Formspree é externo
                console.error('Erro de rede ou outro:', error);
            });
        }
    })
}

clicarNoBotao();



//Celular
document.getElementById('celular').addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, ''); // Remove tudo que não for número
    if (value.length > 0) {
      value = value.replace(/^(\d{2})(\d)/g, '($1) $2'); // Adiciona o (XX)
    }
    if (value.length > 10) {
      value = value.replace(/(\d{5})(\d)/, '$1-$2'); // Adiciona o XXXXX-XXXX
    }
    e.target.value = value;
  });
 */
//Limpar Formulário
/* window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('form-contato').reset();
  }); */


const data = new Date();
const year = data.getFullYear();

const copyright = document.getElementById('footer-text');

copyright.innerHTML = year + " © Team Lior - Todos os direitos reservados";

document.addEventListener("DOMContentLoaded", () => {
    const boxes = document.querySelectorAll(".box-1, .box-2, .sobre-mim, .passos-box, .sobre-mim-box");

    const observer = new IntersectionObserver( (entries) => {
        entries.forEach( (entry) => {
            if(entry.isIntersecting) {
                entry.target.classList.add("show")
            }
        })
    }, {threshold: 0.3})

    boxes.forEach ((box) => {
        box.classList.add("hidden");
        observer.observe(box);
    })
})





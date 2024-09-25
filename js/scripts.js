//Atividade 1 *************************************************
function validarDados() {
    let data = frmRegistro.inData.value;
    let nome = frmRegistro.inCli.value;
    let Telefone = frmRegistro.inFone.value;
    let email = frmRegistro.inMail.value;
    let nomeProd = frmRegistro.inProd.value;
    let Qtd = frmRegistro.inQtd.value;
    let valorUni = frmRegistro.inVal.value;

    if (data.trim() == '') {
        frmRegistro.inData.focus();
        mensagemErro.style.display = 'block';
        mensagemErro.innerText = 'Mensagem de Erro: o campo Data está vazio';
        return false;
    }

    if (nome.trim() == '' || nome.trim().length < 5) {
        frmRegistro.inCli.focus();
        mensagemErro.style.display = 'block';
        mensagemErro.innerText = 'Mensagem de Erro: o campo Nome não pode estar vazio e com menos de 5 caracteres';
        return false;
    }

    if (Telefone.trim() == '') {
        frmRegistro.inFone.focus();
        mensagemErro.style.display = 'block';
        mensagemErro.innerText = 'Mensagem de Erro: o campo Telefone não pode estar vazio';
        return false;
    }

    if (email.trim() == '') {
        frmRegistro.inMail.focus();
        mensagemErro.style.display = 'block';
        mensagemErro.innerText = 'Mensagem de Erro: o campo Email não pode estar vazio';
        return false;
    }

    if (nomeProd.trim() == '' || nome.trim().length < 5) {
        frmRegistro.inProd.focus();
        mensagemErro.style.display = 'block';
        mensagemErro.innerText = 'Mensagem de Erro: o campo Nome do Produto está vazio e não ter numero negativo';
        return false;
    }

    if (Qtd.trim() == '' || Qtd.trim() < 0) {
        frmRegistro.inQtd.focus();
        mensagemErro.style.display = 'block';
        mensagemErro.innerText = 'Mensagem de Erro: o campo Quantidade está vazio e não ter numero negativo';
        return false;
    }

    if (valorUni.trim() == '' || valorUni.trim() < 0) {
        frmRegistro.inVal.focus();
        mensagemErro.style.display = 'block';
        mensagemErro.innerText = 'Mensagem de Erro: o campo Valor unitario está vazio e não ter numero negativo';
        return false;
    }

    else {
        mensagemErro.style.display = 'none';
    }

}



//Atividade 2 *************************************************


//Atividade 3 *************************************************
function trocarImagem() {
    let imagem = document.getElementById('lampada');
    let caminho = imagem.src; //caminho completo (pastas/nome arquivo)
    let interruptor = caminho.substring(caminho.lastIndexOf('/')+1);
    let botao = document.getElementById('btnEnviar')

    // fazendo a troca da imagem
    if (interruptor == 'apagada.jpg' || interruptor == '') {
        imagem.src = 'img/acesa.jpg';
        botao.textContent = 'apagar';
    }
    else {
        imagem.src = 'img/apagada.jpg';
        botao.textContent = 'Acender';
    }
       
}

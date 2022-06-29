// Criar uma função em JavaScript
// Formato ES6 baseado em Arrow Function

// função de realiza o cadastro de livros
const cadastrar = () =>{
    // Captura o valor digitado no campo titulo
    let titulo = document.getElementById('titulo').value
    // Captura o valor digitado no campo autor
    let autor = document.getElementById('autor').value
    // Captura o valor digitado no campo categoria
    let categoria = document.getElementById('categoria').value
    // Captura o valor digitado no campo valor
    let valor = document.getElementById('valor').value

    // verifica se a vareavel titulo esta vazia, se verdadeiro irá exibir um alerta
    if(titulo == ''){
        alert('Digite o título do livro')
        return
    }

    // verifica se a vareavel autor esta vazia, se verdadeiro irá exibir um alerta
    if(autor == ''){
        alert('Digite o autor do livro')
        return
    }

    // verifica se a vareavel categoria esta vazia, se verdadeiro irá exibir um alerta
    if(categoria == ''){
        alert('Selecione a categoria do livro')
        return
    }

    // verifica se a vareavel valor esta vazia, se verdadeiro irá exibir um alerta
    if(valor == ''){
        alert('Digite o valor do livro')
        return
    }

    fetch('backend/cadastrar-livro.php',{
        method:'post',
        body:`titulo=${titulo}&autor=${autor}&categoria=${categoria}&valor=${valor}`,
        headers:{
            'Content-type': 'application/x-www-form-urlencoded'
        }
    })
    .then(function(responce){
        responce.json().then(resposta=>{
            // aqui é onde iremos receber e tratar a resposta do php
            if(resposta.Resposta =='OK'){
                Swal.fire(
                    'Bom Trabalho',
                    resposta.mensagem,
                    'success'
                  )
    
                // resetar o formulario - limpar os campos
                document.getElementById('form-cadastrar').reset()
            }else{
                Swal.fire(
                    'ERRO',
                    resposta.mensagem,
                    'error'
                )
            }
        })
    })
}

// // Forma de função padrão
// function Cadastrar(){

// }

//inicio da função listar

const listar = ()=>{
    fetch('backend/listar-livro.php')
}

//final da função listar
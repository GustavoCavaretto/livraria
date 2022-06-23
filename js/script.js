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
}

// // Forma de função padrão
// function Cadastrar(){

// }
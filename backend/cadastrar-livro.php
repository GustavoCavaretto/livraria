<?php
// exise todas as variaveis enviadas via POST ao php

// var_dump($_POST);

$titulo = $_POST['titulo'];
$autor = $_POST['autor'];
$categoria = $_POST['categoria'];
$valor = $_POST['valor'];

// conexão com o banco de dados
$servidor = 'localhost';
$usuario = 'root';
$senha = '';
$bancodados = 'db_livraria';

try {
  // definindo as configurações do banco de dados
    $conexao = new PDO("mysql:host=$servidor;dbname=$bancodados;charset=utf8", $usuario, $senha);

    // seta o modo de erro do PDO para exception
    $conexao->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    //query de inserção de dados no BD MySQL
    $sql = "insert into tb_livros(titulo,autor,categoria,valor) values ('$titulo','$autor','$categoria',$valor)";
    
    // prepara a execução da query aql acima
    $comando = $conexao->prepare($sql);

    // executa a query preparada acima
    $comando->execute();

    $resposta = array("Resposta"=>"OK",
    "mensagem"=>"Cadastro realizado com sucesso");

    $json = json_encode($resposta,JSON_UNESCAPED_UNICODE);
    echo $json;

  } catch(PDOException $e) {
    echo "Conecção falhou: " . $e->getMessage();
  }

// final da conexão

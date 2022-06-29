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
    $sql = "INSERT INTO tb_livros(titulo,autor,id_categorias,valor) VALUES ('$titulo','$autor',$categoria,$valor)";
    
    // prepara a execução da query aql acima
    $comando = $conexao->prepare($sql);

    // executa a query preparada acima
    $comando->execute();

    $resposta = array("Resposta"=>"OK",
    "mensagem"=>"Cadastro realizado com sucesso");

 

  
  } catch(PDOException $e) {
    // Aqui é tratado o erro e retornado ao usuário
    $resposta = array("Resposta"=>"Erro","mensagem"=>$e->getMessage());
  }

  // converte o array resposta em JSON
  // JSON_UNESCAPED_UNICODE = Manter o arquivo com mapa de carater padrão
  $json = json_encode($resposta,JSON_UNESCAPED_UNICODE);
  // retorna o JSON convertido
  echo $json;

// final da conexão

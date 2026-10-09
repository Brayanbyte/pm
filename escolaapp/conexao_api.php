<?php

$servidor = "localhost";
$banco = "escola";
$usuario = "root";
$senha = "";

try {
    // Cria a conexão usando PDO
    $pdo = new PDO("mysql:host=$servidor;dbname=$banco;charset=utf8", $usuario, $senha);
    
    // Configura o PDO para avisar se acontecer qualquer erro de SQL
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
} catch (PDOException $e) {
    // Caso dê erro (senha errada, banco não existe, etc), o PHP avisa na tela
    echo "Erro na conexão com o MySQL: " . $e->getMessage();
    exit;
}
?>

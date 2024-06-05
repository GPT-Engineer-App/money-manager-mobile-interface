<?php
include 'db.php';

$data = json_decode(file_get_contents('php://input'), true);

$descricao = $data['descricao'];
$valor = $data['valor'];
$dataGasto = $data['data'];
$tipo = $data['tipo'];
$idConta = $data['idConta'];
$idCategoria = $data['idCategoria'];

$sql = "INSERT INTO transacao (descricao, valor, data, tipo, idConta, idCategoria) VALUES ('$descricao', '$valor', '$dataGasto', '$tipo', '$idConta', '$idCategoria')";

if ($conn->query($sql) === TRUE) {
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false, 'message' => 'Erro ao adicionar gasto!']);
}

$conn->close();
?>
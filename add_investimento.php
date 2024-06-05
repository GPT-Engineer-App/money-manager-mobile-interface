<?php
include 'db.php';

$data = json_decode(file_get_contents('php://input'), true);

$nome = $data['nome'];
$valor_atual = $data['valor_atual'];
$retorno = $data['retorno'];
$dataInvestimento = $data['data'];
$usuario_email = $data['usuario_email'];

$sql = "INSERT INTO investimento (nome, valor_atual, retorno, data, usuario_email) VALUES ('$nome', '$valor_atual', '$retorno', '$dataInvestimento', '$usuario_email')";

if ($conn->query($sql) === TRUE) {
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false, 'message' => 'Erro ao adicionar investimento!']);
}

$conn->close();
?>
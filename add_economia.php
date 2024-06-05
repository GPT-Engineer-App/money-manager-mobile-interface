<?php
include 'db.php';

$data = json_decode(file_get_contents('php://input'), true);

$descricao = $data['descricao'];
$valor = $data['valor'];
$dataEconomia = $data['data'];
$usuario_email = $data['usuario_email'];

$sql = "INSERT INTO economia (descricao, valor, data, usuario_email) VALUES ('$descricao', '$valor', '$dataEconomia', '$usuario_email')";

if ($conn->query($sql) === TRUE) {
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false, 'message' => 'Erro ao adicionar economia!']);
}

$conn->close();
?>
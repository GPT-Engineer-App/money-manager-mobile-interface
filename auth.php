<?php
include 'db.php';

$data = json_decode(file_get_contents('php://input'), true);

if (isset($data['login'])) {
    $email = $data['email'];
    $senha = $data['senha'];

    $sql = "SELECT * FROM usuario WHERE email='$email' AND senha='$senha'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false, 'message' => 'Login falhou!']);
    }
} else {
    $nomeCompleto = $data['nomeCompleto'];
    $email = $data['email'];
    $senha = $data['senha'];

    $sql = "INSERT INTO usuario (nomeCompleto, email, senha) VALUES ('$nomeCompleto', '$email', '$senha')";

    if ($conn->query($sql) === TRUE) {
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false, 'message' => 'Erro ao cadastrar!']);
    }
}

$conn->close();
?>
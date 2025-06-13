<?php
header('Content-Type: application/json');

try {
    $host = $_POST['host'];
    $user = $_POST['user'];
    $password = $_POST['password'];
    $database = $_POST['database'];
    $port = (int)$_POST['port'];

    $conn = new mysqli($host, $user, $password, $database, $port);

    if ($conn->connect_error) {
        throw new Exception('Falha na conexão: ' . $conn->connect_error);
    }

    echo json_encode(['success' => true, 'message' => 'Conexão bem-sucedida!']);
    $conn->close();
} catch (Exception $e) {
    echo json_encode(['success' => false, 'message' => 'Erro: ' . $e->getMessage()]);
}
?>
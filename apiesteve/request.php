<?php
// Configura los encabezados para permitir el acceso desde cualquier origen
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: Content-Type");

$data = json_decode(file_get_contents('php://input'), true);
// Define la URL de la API externa
$fullUrl =  $data['url'] . $data['params'];
// Configura los datos para la solicitud POST

// Inicializa cURL
$curl = curl_init();

// Configura las opciones de cURL
curl_setopt_array($curl, array(
    CURLOPT_URL => $fullUrl,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST => true,
    CURLOPT_HTTPHEADER => array(
        'Content-Type: application/x-www-form-urlencoded'
    ),
    CURLOPT_SSL_VERIFYHOST => false,
    CURLOPT_SSL_VERIFYPEER => false,
));

// Realiza la solicitud cURL
$response = curl_exec($curl);

// Verifica si ocurrió algún error en la solicitud
if (curl_errno($curl)) {
    $error = curl_error($curl);
    // Maneja el error de cURL
    // ...
}

// Cierra la conexión cURL
curl_close($curl);

// Devuelve la respuesta a la aplicación Nuxt.js
echo $response;
?>
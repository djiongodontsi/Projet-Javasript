<?php
require_once __DIR__ . '/test.poo.php';

$utilisateur = new users();
$utilisateur->setNom('Alice');

if ($utilisateur->getNom() === 'Alice') {
	echo "Test reussi : le nom est bien enregistre et recupere." . PHP_EOL;
} else {
	echo "Test echoue : le nom recupere ne correspond pas." . PHP_EOL;
}

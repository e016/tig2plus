<?php 
//implode(', ', $_REQUEST)
$input = json_decode(file_get_contents('php://input'));
print_r ($input)
?>
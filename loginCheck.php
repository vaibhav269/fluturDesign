<?php    
    $username = $_POST['user'];
    $password = $_POST['pass'];
     
    $username = trim($username);
    $password = trim($password);
    if($username=="vaibhav" && $password=="password"){
        echo "2";
    }
    else if($username != "vaibhav" || $password!="password" ){
        echo "1";
    }
    else{
        echo "0";
    }
?>
<?php
include "db_conn.php";
if(isset($_POST['admin_username']) && isset($_POST['admin_password'])){
    function validate($data){
        $data =trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }

    $uname= validate($_POST['admin_username']);
    $pass= validate($_POST['admin_password']);

    if(empty($uname)){
        header("Location:Admin_login.php?error=user name is required");
        exit();
    }else if(empty($pass)){
        header("Location:Admin_login.php?error=password is required");
        exit();
    }else{
        $sql="select * from admin where username='$uname' and password='$pass'";
        $result = mysqli_query($conn,$sql);

        if(mysqli_num_rows($result)===1){
            header("Location:Adminevent.html");
            exit();
        }
        else{
            header("Location:ndex.html");
            exit();
        }
    }
}else{
    header("Location:index.php");
    exit();
}
?>
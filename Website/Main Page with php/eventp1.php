<?php
    $conn= new mysqli("localhost","root","","decentworkeconomic");
    if($conn->connect_error){
        die("Connection failed: " . $conn->connect_error);
    }
    else{
        $date=$_POST['date1'];
        $month=$_POST['month1'];
        $title=$_POST['title1'];
        $des=$_POST['description1'];

        $sql = "UPDATE event SET date=$date , month='".$month." ' ,title='".$title."'  ,description='".$des."'WHERE EventPart=1;";

        if ($conn->query($sql) === TRUE) {
          header("Location:AdminEvent.html");
          exit();
        } else {
          echo "Error updating record: " . $conn->error;
        }
    
    }
    $conn->close();
?>
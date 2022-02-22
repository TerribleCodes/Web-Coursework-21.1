<!DOCTYPE html>
<html lang="en">
   
<head>
    <style>
  
        
        body {
            margin: 0;
            padding: 0;
        }
           
        
        section {
            width: 100%;
            height: 100vh;
            background : 
 url("pexels-photo-281260.jpeg");
            background-size: cover;
        }
           
        
        section .leftBox {
            width: 50%;
            height: 100%;
            float: left;
            padding: 50px;
            box-sizing: border-box;
        }
           
        
        section .leftBox .content {
            color: #fff;
            background: rgba(0, 0, 0, 0.5);
            padding: 40px;
            transition: .5s;
        }
           
        
        section .leftBox .content:hover {
            background: #e91e63;
        }
           
        
        section .leftBox .content h1 {
            margin: 0;
            padding: 0;
            font-size: 50px;
            text-transform: uppercase;
        }
           
        
        section .leftBox .content p {
            margin: 10px 0 0;
            padding: 0;
        }
           
        
        section .events {
            position: relative;
            width: 50%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            float: right;
            box-sizing: border-box;
        }
           
        
        section .events ul {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            margin: 0;
            padding: 40px;
            box-sizing: border-box;
        }
           
        
        section .events ul li {
            list-style: none;
            background: #fff;
            box-sizing: border-box;
            height: 200px;
            margin: 15px 0;
        }
           
        
        section .events ul li .time {
            position: relative;
            padding: 20px;
            background: #262626;
            box-sizing: border-box;
            width: 30%;
            height: 100%;
            float: left;
            text-align: center;
            transition: .5s;
        }
           
        
        section .events ul li:hover .time {
            background: #e91e63;
        }
           
        
        section .events ul li .time h2 {
            position: absolute;
            margin: 0;
            padding: 0;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: #fff;
            font-size: 60px;
            line-height: 30px;
        }
           
        
        section .events ul li .time h2 span {
            font-size: 30px;
        }
           
        
        section .events ul li .details {
            padding: 20px;
            background: #fff;
            box-sizing: border-box;
            width: 70%;
            height: 100%;
            float: left;
        }
           
        
        section .events ul li .details h3 {
            position: relative;
            margin: 0;
            padding: 0;
            font-size: 22px;
        }
           
        
        section .events ul li .details p {
            position: relative;
            margin: 10px 0 0;
            padding: 0;
            font-size: 16px;
        }
           
        
        section .events ul li .details a {
            display: inline-block;
            text-decoration: none;
            padding: 10px 15px;
            border: 1.5px solid #262626;
            margin-top: 8px;
            font-size: 18px;
            transition: .5s;
        }
           
        
        section .events ul li .details a:hover {
            background: #e91e63;
            color: #fff;
            border-color: #e91e63;
        }
    </style>
</head>
   
<body>
    <section>
        <div class="leftBox">
            <div class="content">
                <h1>
                    Events
                </h1>
                <p>
                    A sustainable event is any event planned and executed considering a particular concern for environmental, economic and social issues. Sustainable events, a.k.a. “green events” or “event greening” has been in the public eye since the 1992 Winter Olympics, but the planning practice has only grown in popularity and impact in the subsequent decades.

A sustainable, green or eco-friendly event incorporates sustainable values such as recycling, plastic use reduction, plant-based or ethically sourced meals and a mindful reduction of the event’s carbon footprint.

While sustainable events do require more planning and consideration than a standard event, the benefits of doing so are myriad. Beside the obvious benefits to the planet as a whole, sustainable events show clients or guests that your business or organization is not just aware of these serious issues, but is enthusiastic about sustainable event management and actually making change. Furthermore, guests at a sustainable event often feel good about attending an event that openly aligns with their own values, adding to their overall experience.

When planning your sustainable event, you might consider the following eco-friendly ideas:
                </p>
            </div>
        </div>
   
        <div class="events">
            <ul>
                <li>
                    <div class="time">
                        <?php
                            $servername = "localhost";
                            $username = "root";
                            $password = "";
                            $dbname = "decentworkeconomic";

                            
                            $conn = new mysqli($servername, $username, $password, $dbname);
                            
                            if ($conn->connect_error) {
                            die("Connection failed: " . $conn->connect_error);
                            }

                            $sql = "SELECT date, month, title, description FROM event where EventPart=1";
                            $result = $conn->query($sql);

                            if ($result->num_rows > 0) {
                            // output data of each row
                            while($row = $result->fetch_assoc()) {
                                $date=$row["date"];
                                $month=$row["month"];
                                $title=$row["title"];
                                $des=$row["description"];

                                echo '<h2>',$date,'<br><span>',$month,'</span></h2></div><div class="details"><h3>',$title,'</h3><p>',$des,'</p>';
                            }
                            } else {
                            echo "0 results";
                            }
                            $conn->close();
                            ?>
                           
                        <a href="https://sdgs.un.org/events/national-capacity-building-workshop-applications-juncao-technology-and-its-contribution">View Details</a>
                    </div>
                    <div style="clear: both;"></div>
                </li>
   
                <li>
                    <div class="time">
                    <?php
                            $servername = "localhost";
                            $username = "root";
                            $password = "";
                            $dbname = "decentworkeconomic";

                            
                            $conn = new mysqli($servername, $username, $password, $dbname);
                            
                            if ($conn->connect_error) {
                            die("Connection failed: " . $conn->connect_error);
                            }

                            $sql = "SELECT date, month, title, description FROM event where EventPart=2";
                            $result = $conn->query($sql);

                            if ($result->num_rows > 0) {
                            // output data of each row
                            while($row = $result->fetch_assoc()) {
                                $date=$row["date"];
                                $month=$row["month"];
                                $title=$row["title"];
                                $des=$row["description"];

                                echo '<h2>',$date,'<br><span>',$month,'</span></h2></div><div class="details"><h3>',$title,'</h3><p>',$des,'</p>';
                            }
                            } else {
                            echo "0 results";
                            }
                            $conn->close();
                            ?>
                        <a href="https://sdgs.un.org/events/launch-first-hydromet-gap-report-weather-climate-and-water-services-underpin-sustainable">View Details</a>
                    </div>
                    <div style="clear:both;"></div>
                </li>
   
                <li>
                    <div class="time">
                    <?php
                            $servername = "localhost";
                            $username = "root";
                            $password = "";
                            $dbname = "decentworkeconomic";

                            
                            $conn = new mysqli($servername, $username, $password, $dbname);
                            
                            if ($conn->connect_error) {
                            die("Connection failed: " . $conn->connect_error);
                            }

                            $sql = "SELECT date, month, title, description FROM event where EventPart=3";
                            $result = $conn->query($sql);

                            if ($result->num_rows > 0) {
                            // output data of each row
                            while($row = $result->fetch_assoc()) {
                                $date=$row["date"];
                                $month=$row["month"];
                                $title=$row["title"];
                                $des=$row["description"];

                                echo '<h2>',$date,'<br><span>',$month,'</span></h2></div><div class="details"><h3>',$title,'</h3><p>',$des,'</p>';
                            }
                            } else {
                            echo "0 results";
                            }
                            $conn->close();
                            ?>
                        <a href="https://sdgs.un.org/events/launch-e-learning-course-harnessing-climate-and-sdgs-synergies-33337">View Details</a>
                    </div>
                    <div style="clear:both;"></div>
                </li>
            </ul>
        </div>
    </section>
</body>
   
</html>

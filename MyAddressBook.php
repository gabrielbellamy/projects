<?php
     include('includes/dbconnect.php');

     $db_name = 'address';
     $table_name = 'contacts';
     $db = @mysql_select_db($db_name) or die(mysql_error());
     $sql = "SELECT lname, fname, and email FROM" .$table_name. ' ORDER BY lname ';
     $results = @mysql_fetch_array($sql) or die(mysql_error());
     while ($row = mysql_fetch_array($results))
     {
      $lname = $row['lname'];
      $fname = $row['fname'];
      $email = $row['email'];
     }
      $display .= "<tr><td>" .$lname. "</td><td>" .$fname. "</td><td>" .$email.
<html>
    <head>
        <title> Address Book</title>
            </head>
            <body>
                <table>
                    <tr>
                <th>Gabe, sally, judge, Santa</th>
                <th>Bellamy, Mae, Judy, Clause</th>
                <th>Email: Bellamy@doggie.com, sally@kittie.us, judy@php.com, santa@np.net</th>
                (1, 'G Bellamy', '430-555-2252', 'Bellamy@doggie.com');
                (2, 'Sally Mae', '658-555-5985', 'sally@kittie.us');
                (3, 'Judge Judy', '555-777-0000', 'judy@php.com');
                (4, 'Santa Clause', '888-888-7777', 'santa@np.net');
            </tr>
            <?php echo $display; ?>
        </table>
    </body>
</html>     

?>
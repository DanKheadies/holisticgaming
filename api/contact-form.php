<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

$errors = array();

if ($_SERVER['REQUEST_METHOD'] === "POST") {
    if (empty($_POST['email'])) {
        $errors[] = 'Email is empty.';
    } else {
        $email = $_POST['email'];
        
        // validating the email
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $errors[] = 'Invalid email.';
        }
    }

    if (empty($_POST['message'])) {
        $errors[] = 'Message is empty.';
    } else {
        $message = $_POST['message'];
    }

    if (empty($errors)) {
        // $date = date('j, F Y h:i A');
        $instance = $_POST['instance'];
        $name = $_POST['name'];
        $organization = $_POST['organization'];

        $emailBody = "
<!DOCTYPE html>
<html lang=\"en\">
    <head><meta charset=\"utf-8\">
        <style>
            body {
                background: #edecef;
                margin: 0px;
                padding: 0px;
                text-align: center;
            }
            .bold {
                font-weight: 700;
            }
            div, p, span, table {
                display: inline-block;
            }
            .grey {
                color: #999;
            }
            .main {
                background: #fafafa;
                border: 1px solid #dadbdc;
                border-radius: 3px;
                box-shadow: 2px 2px 5px rgba(0,0,0,.1);
                height: auto;
                font-family: 'Lucida Sans Unicode','Lucida Grande',sans-serif;
                font-size: 14px;
                line-height: 18px;
                margin: 25px 0px;
                padding: 20px 40px 25px;
                text-align: left;
                width: 80vw;
            }
            .small {
                font-size: 12px;
            }
            table {
                border: 1px solid #dadbdc;
                border-radius: 3px;
                padding: 15px;
                text-align: left;
                width: 75vw;
            }
            td {
                padding: 6px 10px;
            }
            .table-shell {
                text-align: center;
                width: 100%;
            }
        </style>
    </head>
    <body>
        <div class=\"main\">
            <p>$name submitted a Holistic Gaming help request.</p>
            <br />
            <p class=\"bold\">Details:</p>
            <div class=\"table-shell\">
                <table>
                    <tr>
                        <td class=\"grey small\">
                            Name:
                        </td>
                        <td class=\"bold\">
                            $name
                        </td>
                    </tr>
                    <tr>
                        <td class=\"grey small\">
                            Email:
                        </td>
                        <td class=\"bold\">
                            $email
                        </td>
                    </tr>
                    <tr>
                        <td class=\"grey small\">
                            Reason:
                        </td>
                        <td class=\"bold\">
                            $message
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </body>
</html>
        ";
        
        $to = 'support@holisticgaming.com';
        $subject = 'Holistic Gaming Support Ticket';

        $headers = "From: {$name} {$email}" . "\r\n" .
                   "Reply-To: {$email}" . "\r\n" . 
                   "MIME-Version: 1.0" . "\r\n" . 
                   "Content-Type: text/html; charset=ISO-8859-1" . "\r\n" ;
        
        if (mail($to, $subject, $emailBody, $headers)) {
            $sent = true;	
        }
    }
}
?>

<?php if (!empty($errors)) : ?> 
{
    "status": "fail",
    "error":  <?php echo json_encode($errors) ?>
}
<?php endif; ?>
  
  
<?php if (isset($sent) && $sent === true) : ?> 
{
    "status": "success",
    "message": "Your email was successfully submitted."
}
<?php endif; ?>
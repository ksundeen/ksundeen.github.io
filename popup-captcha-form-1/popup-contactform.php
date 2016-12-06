<?php
/*
    Contact Form from HTML Form Guide
    This program is free software published under the
    terms of the GNU Lesser General Public License.
*/
require_once("./include/fgcontactform.php");
require_once("./include/captcha-creator.php");
$formproc = new FGContactForm();
$captcha = new FGCaptchaCreator('scaptcha');
$formproc->EnableCaptcha($captcha);

//1.Add your email address here.
//You can add more than one receipients.
$formproc->AddRecipient('kim.h.sundeen@gmail.com'); //<<---Put your email address here

//2. For better security. Get a random string from this link: http://tinyurl.com/randstr
// and put it here
$formproc->SetFormRandomKey('ypkUKcL4sgSb1uj');

if(isset($_POST['submitted']))
{
    if($formproc->ProcessForm())
    {
        echo "success";
    }
    else
    {
        echo $formproc->GetErrorMessage();
    }
}
?>

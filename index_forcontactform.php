<?php
/*
    Contact Form from HTML Form Guide
    This program is free software published under the
    terms of the GNU Lesser General Public License.
    See this page for more info:
    http://www.html-form-guide.com/contact-form/simple-modal-popup-contact-form.html
*/
//1. First, include the file popup-contactform.php
require_once('popup-contactform.php');

//2. link to the style file contact.css
?>


<!DOCTYPE html>
<html lang="en" manifest="kimsundeen.appcache">
<head><
    meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Kim Sundeen's web portfolio. Contains maps and apps created by Kim along with her resume and contact information.">
    <meta name="author" content="Kim Sundeen">
    <meta name="keywords" content="Kim, GIS, GIS programmer, GIS analyst, Cartographer">
	<title>Maps-on-the-Mind</title>
	
    <!-- Bootstrap --><!-- Latest compiled and minified CSS -->
    <!---- to test locally, change "//maxcdn..." to "http://maxcdn..." to access the http protocol------>
    
    <!--put your Bootstrap stylesheet links below this comment and above style.css-->
	<!--<link href="http://maxcdn.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css" rel="stylesheet" />-->
    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="css/bootstrap-theme.min.css">
    <link rel="stylesheet" type="text/css" href="css/stylebasic.css">
    <link rel="stylesheet" type="text/css" href="popup-captcha-form-1/contact.css"
    <!-- My css -->
    <link rel="stylesheet" type="text/css" href="css/style.css"> 
    
    <!-- local reference to awesome font-->
	<link href="css/font-awesome.min.css" rel="stylesheet" />

	<!--<link href="http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet" />-->
	
    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries --><!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
      <![endif]-->
    
    <!-- Google Analytics -->
    <script>
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

      ga('create', 'UA-88367987-1', 'auto');
      ga('send', 'pageview');

    </script>
</head>
<body>
    <!-- Google Tag Manager --><noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-PQNGQQ"
         height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript><script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
         new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
         j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
         '//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
         })(window,document,'script','dataLayer','GTM-PQNGQQ');
      </script><!-- End Google Tag Manager -->
    
     <div id="top" class="navbar-wrapper">
         <div class="container">
            <!-- Static navbar -->
            <div class="navbar navbar-default navbar-fixed-top" role="navigation">
               <div class="container-fluid">
                  <div class="navbar-header">
                     <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                     <span class="sr-only">Toggle navigation</span>
                     <span class="icon-bar"></span>
                     <span class="icon-bar"></span>
                     <span class="icon-bar"></span>
                     </button>
                     <a class="navbar-brand" href="aboutme.html">Kim Sundeen</a>
                  </div>
                  <div class="navbar-collapse collapse">
                     <ul class="nav navbar-nav">
                        <li class="active"><a href="index.html">Home</a></li>
                        <li><a href="aboutme.html">About Me</a></li>
                        <li><a data-toggle="modal" href="#modal-form">Contact Me</a></li>
                        <li class="dropdown">
                           <a href="#" class="dropdown-toggle" data-toggle="dropdown">Portfolio<b class="caret"></b></a>
                           <ul class="dropdown-menu">
                              <li><a href="assets/resume/sundeen_resume.pdf" target="_blank">PDF Resume</a></li>
                              <li><a href="portfolio.html">Curriculum Vitae</a></li>
                              <li><a href="gallery.html">Gallery</a></li>
                           </ul>
                        </li>
                     </ul>
                  </div><!--/.nav-collapse -->
               </div><!--/.container-fluid -->
            </div><!--/ static navbar -->
         </div><!-- /container -->
      </div><!--/navbar wrapper -->
    

<div class="container" style="padding-top: 15px;">
    <div class="page-header">
        <h1><span class="shadow">Maps-on-the-Mind </span><small>from one geo-geek to another</small></h1>
    </div>
    <blockquote class="pull-left">The beginning is&nbsp;the most important part of the work. <small> - Plato</small></blockquote>
</div><!--/ Header container -->

<!-- Carousel -->
<div class="container">
    <div class="carousel slide" data-ride="carousel" id="carousel-slide">
        <!-- Indicators -->
        <ol class="carousel-indicators">
            <li class="active" data-slide-to="0" data-target="#carousel-slide"></li>
            <li data-slide-to="1" data-target="#carousel-slide"></li>
            <li data-slide-to="2" data-target="#carousel-slide"></li>
            <li data-slide-to="3" data-target="#carousel-slide"></li>
            <li data-slide-to="4" data-target="#carousel-slide"></li>
        </ol>
        
        <!-- Wrapper for slides -->
        <div class="carousel-inner">
            <!-- Carousel 1 -->
            <div class="item active">
                <div align="center"><img alt="Slide 1" src="assets/images/carousel-pythonscript.png" />
                    <div class="carousel-caption">
                        <h1 class="shadow">GIS Programming &amp; Analysis</h1>

                        <h3 class="shadow">Bringing the power of GIS to the user.</h3>

                        <p><a class="btn btn-primary btn-lg" href="https://github.com/ksundeen" role="button" target="_blank">Browse GitHub Site</a></p>
                    </div>
                </div>
            </div>
            
            <!-- Carousel 2 -->
            <div class="item" id="carousel-center">
                <div align="center"><img alt="Slide 2" id="test-img" src="assets/images/carousel-penokeemine.png" />
                    <div class="carousel-caption">
                        <h1 class="shadow">Cartography &amp; Design</h1>

                        <h3 class="shadow">Visualizing Data through Art and Design.</h3>

                        <p><a class="btn btn-primary btn-lg" href="assets/maps/penokeemine.jpg" role="button">View the Poster</a></p>
                    </div>
                </div>
            </div>
            
            <!-- Carousel 3 -->
            <div class="item">
                <div align="center"><img alt="Slide 3" src="assets/images/carousel-megaman.png" />
                    <div class="carousel-caption">
                        <h1 class="shadow">Custom Web Map Programming</h1>

                        <h3 class="shadow">Web-enabling GIS Tools &amp; Analytics to Access Your Data.</h3>

                        <p><a class="btn btn-primary btn-lg" href="gallery.html" role="button">Browse Gallery</a></p>
                    </div>
                </div>
            </div>
            
            <!-- Carousel 4 -->
            <div class="item">
                <div align="center"><img alt="Slide 4" src="assets/images/carousel-databasemanagement.png" />
                    <div class="carousel-caption">
                        <h1 class="diffcolor">Data Management</h1>

                        <h3 class="diffcolor">Taking Big Data and Organizing the Structure for Simple Access.</h3>
                    </div>
                </div>
            </div>
            
            <!-- Carousel 5 -->
            <div class="item">
                <div align="center"><img alt="parachuting picture" src="assets/images/carousel-parachuting_crop.jpg" />
                    <div class="carousel-caption">
                        <h1 class="shadow">Meet Kim!</h1>

                        <h3>I&#39;m a self-proclaimed geo-geek looking for challenging and interesting GIS programming projects.</h3>

                        <p><a class="btn btn-primary btn-lg" href="aboutme.html" role="button">Read More</a></p>
                    </div>
                </div>
            </div>
        </div><!-- end container -->
        
    <!-- Left & right Controls -->
      <a class="left carousel-control" href="#carousel-slide" role="button" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="right carousel-control" href="#carousel-slide" role="button" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
</div><!-- end carousel container -->
<!-- End Carousel -->

<hr />
<p></p>

<p></p>

<div class="container">
    <div class="row">
        <div class="col-sm-4">
            <div class="thumbnail"><img alt="Picture of webmap programming" src="assets/images/webmapprogramming.png" style="width: 250px; height: 150px;" />
                <div class="caption">
                    <h3>GIS &amp; Web Development</h3>

                    <p>Programming in GIS and the web: they are directly connected.</p>
                </div>
            </div>
        </div>

        <div class="col-sm-4">
            <div class="thumbnail"><img alt="Fields of Cranes image" src="assets/maps/fieldsofcranes.jpg" style="width: 250px; height: 150px;" />
                <div class="caption">
                    <h3>Data &amp; Research-Centric</h3>

                    <p>I&#39;ve researched all sorts of animals, plants, and geospatial distribution of such species.</p>
                </div>
            </div>
        </div>

        <div class="col-sm-4">
            <div class="thumbnail"><img alt="About me picture" src="assets/images/kayaking.jpg" style="width: 175px; height: 150px;" />
                <div class="caption">
                    <h3>I&#39;m Locally-Grown!</h3>

                    <p>I&#39;ve have traveled all over the world, but I still call the Midwest home.</p>
                </div>
            </div>
        </div>
    </div>
</div>
<!--container-- for columns-->


     <!-- Modal -->
      <div class="modal fade" id="modal-form" tabindex="-1" role="dialog" 
         aria-labelledby="myModalLabel" aria-hidden="true" onload="javascript:fg_hideform('fg_formContainer','fg_backgroundpopup');">
         <div class="modal-dialog">
            <div class="modal-content">
               <!-- Modal Header -->
               <div class="modal-header">
                  <button type="button" class="close"
                     data-dismiss="modal">
                      <span aria-hidden="true">&times;</span>
                      <span class="sr-only">Close</span>
                  </button>
                  <h4 class="modal-title" id="myModalLabel">Contact Me!<small style="color:red;"><i> | page under consstruction. Please send email directly to kim.h.sundeen@gmail.com</i></small></h4>
               </div>
               <!-- Modal Body & Form -->
               <div class="modal-body">
                  <form role="form" method="post">
                     <div class="form-group">
                        <label>Your Name</label>
                        <input type="text" class="form-control" placeholder="Enter your Name"/>
                     </div>
                     <label>Phone</label>
                     <div class="form-group input-group">
                        <span class="input-group-addon">1+</span>
                        <input type="tel" class="form-control" id="phone" placeholder="xxx-xxx-xxxx">
                     </div>
                     <div class="form-group input-group ">
                        <label for="exampleInputEmail1">Email address:</label>
                        <input type="email" class="form-control" placeholder="Enter your email"/>
                     </div>
                     <div class="form-group">
                        <label>Your Message</label>
                        <textarea rows="4" cols="40" class="form-control"
                           id="usr-form" placeholder="Write a message">
					  </textarea>
                        <!--<div class="checkbox">
                           <label>
                               <input type="checkbox"/> Send a copy to me.-->
                        <!-- Send me a copy checkbozx button -->
                        <div class="btn-group" data-toggle="buttons">
                           <label class="btn btn-primary btn-sm">
                                <input type="checkbox"> Send me a copy.
                           </label>
                           <label class="btn btn-danger btn-sm">
                                <input type="checkbox">This is Urgent!
                           </label>
                        </div>
                        <br/>
                        <!-- Options for how to best be reached button -->
                        <div class="btn-group" data-toggle="buttons">
                           <br/>
                           <p>How would you prefer to be contacted?</p>
                           <label class="btn btn-info btn-sm">
                                <input type="radio"> Phone
                           </label>
                           <label class="btn btn-info btn-sm">
                                <input type="radio"> Email
                           </label>
                           <label class="btn btn-info btn-sm">
                                <input type="radio"> Either
                           </label>
                        </div>
                     </div>
                     <button type="reset" value="Reset" class="btn btn-danger">Reset</button>
                  </form>
                  <div id="message"></div>
               </div>
               <!-- Modal Footer -->
               <div class="modal-footer">
                  <button type="button" class="btn btn-default" 
                     data-dismiss="modal">Close
                  </button>
                  <button type="submit" id="sent-message" class="btn btn-primary">Send Email</button>
               </div>
            </div>
         </div>
      </div>
   <!-- end Modal -->
   <!-- FOOTER -->
     <footer class="container">
         <!-- space out with columns  md 3-2-2-4-1(pull-right)-->
         <div class="well">
            <div class="row">
               <div class="col-xs-6 col-md-3">
                  <p>
                     <a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/80x15.png" /></a><br/><span xmlns:dct="http://purl.org/dc/terms/" href="http://purl.org/dc/dcmitype/InteractiveResource" property="dct:title" rel="dct:type">Website</span> hand coded by <a xmlns:cc="http://creativecommons.org/ns#" href="http://sunnyspace.org/kimsundeen/" property="cc:attributionName" rel="cc:attributionURL">Kim Sundeen</a><br/><a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution <br/>4.0 International License</a>.
                  </p>
               </div>
               <div class="col-md-2"></div>
               <!-- space out with columns -->
               <div class="col-xs-6 col-md-2">
                  <p>
                     <a id="FB"  title="Share on Facebook" target="_blank" href="https://www.facebook.com/kimnesssundeen">
                     <button id="fbbutton" type="button" class="btn btn-md" style="padding: 0 20px 0 0">			  
                     <i class="fa fa-facebook fa-lg"></i></button>Facebook 
                     </a>
                  </p>
                  <p>
                     <a href="https://twitter.com/ksundeen">
                     <button id="twbutton" type="button" class="btn btn-md" style="padding: 0 10px 0 0">
                     <i class="fa fa-twitter fa-lg"></i></button>Twitter
                     </a>
                  </p>
                  <p>
                     <a  href="https://www.linkedin.com/in/kim-sundeen-63007a16">
                     <button id="libutton" type="button" class="btn btn-md" style="padding:0 10px 0 0">			    
                     <i class="fa fa-linkedin fa-lg"></i></button>LinkedIn
                     </a>
                  </p>
                  <p>
                     <a href="mailto:kim.h.sundeen@gmail.com?subject=I'm%20Interested!"><span class="glyphicon glyphicon-envelope"></span>  Email me!</a>
                  </p>
                  <p><span class="glyphicon glyphicon-earphone"></span>  +1 218.590.1330</p>
               </div>
               <div class="col-md-4"></div>
               <!-- space out with columns -->
               <div class="col-xs-6 col-md-1" >
                  <p class="pull-right">
                     <a href="#top" style="color:#428bca" >Back to top</a>
                  </p>
               </div>
            </div><!-- end row -->
         </div><!-- end well -->
      </footer>
    
    		<!--put your external script links here-->
		<script type="text/javascript" src="lib/jquery-3.1.1.min.js"></script>
		<script type="text/javascript" src="lib/bootstrap.min.js">
             $('.carousel').carousel({
             interval: 9000,
             pause: 'none'
             });     
        </script>
        <!--My js script to make divs animated up & down -->
        <script type="text/javascript" src="lib/animate.js"></script>
        <script src="http://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.2.0/js/scrollspy.js"></script>      
   
    </body>
</html>
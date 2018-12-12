<!DOCTYPE html>
<html lang="en">
<head>
    <title>MATH 114</title>

    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="author" content="Math 114 Sec 1 FS-1819"/>

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="<?=base_url('assets/css/bootstrap.min.css')?>">
    <link rel="stylesheet" href="<?=base_url('assets/css/bootstrap.css')?>">

    <!--FONTS-->
   
    <!-- CUSTOM CSS -->
    <link rel="stylesheet" href="<?=base_url('assets/css/style.css')?>">
    <link rel="stylesheet" href="<?=base_url('assets/css/main_content.css')?>">

    <!--LOGO-->
    <link rel='icon' href="images/logo.png">

    <!--SCRIPTS-->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="<?=base_url()?>/assets/js/bootstrap.min.js"></script>
    <script src="<?=base_url()?>/assets/functions/cramers_rule.js"></script>
</head>

<body>
    <?php $this->load->view("navbar"); ?>
    <!--  <main role="main"> -->
       <div class="">
        <?php $this->load->view($view); ?>
    </div>
    <!--  </main> -->
</body>

</html>
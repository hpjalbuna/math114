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
	<!-- <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"> -->

	<!-- CUSTOM CSS -->
	<link rel="stylesheet" href="<?=base_url('assets/css/icons.css')?>">

	<!--LOGO-->
	<link rel='icon' href="images/logo.png">

	<!-- Scripts -->
	<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
	<script src="<?=base_url()?>/assets/js/bootstrap.min.js"></script>
	<!-- <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/js/bootstrap.min.js" integrity="sha384-o+RDsa0aLu++PJvFqy8fFScvbHFLtbvScb8AjopnFD+iEQ7wo/CG0xlczd+2O/em" crossorigin="anonymous"></script> -->
</head>

<body>
	<h1>Math 114</h1>
	<div class="container" id="home">
		<a href="<?php echo base_url();?>matrix/addition_or_subtraction" class="btn"><img src="<?php echo base_url();?>assets/img/icon.png" align="middle" class="icon"/>Matrix Addition/Subtraction</a>

		<a href="<?php echo base_url();?>matrix/multiplication" class="btn"><img src="<?php echo base_url();?>assets/img/icon.png" align="middle" class="icon"/>Matrix Multiplication</a>

		<a href="<?php echo base_url();?>matrix/scalar_multiplication" class="btn"><img src="<?php echo base_url();?>assets/img/icon.png" align="middle" class="icon"/>Scalar Multiplication</a>

		<a href="<?php echo base_url();?>matrix/cramers_rule" class="btn"><img src="<?php echo base_url();?>assets/img/icon.png" align="middle" class="icon"/>Cramer's Rule</a>

		<a href="<?php echo base_url();?>matrix/determinant" class="btn"><img src="<?php echo base_url();?>assets/img/icon.png" align="middle" class="icon"/>Determinants</a>

		<a href="<?php echo base_url();?>matrix/cofactor_expansion" class="btn"><img src="<?php echo base_url();?>assets/img/icon.png" align="middle" class="icon"/>Cofactor Expansion</a>

		<a href="<?php echo base_url();?>matrix/adjoint" class="btn"><img src="<?php echo base_url();?>assets/img/icon.png" align="middle" class="icon"/>Adjoint</a>

		<a href="<?php echo base_url();?>matrix/inverse_using_adjoint" class="btn"><img src="<?php echo base_url();?>assets/img/icon.png" align="middle" class="icon"/>Inverse Using Adjoint</a>

		<a href="<?php echo base_url();?>matrix/gaussian_elimination" class="btn"><img src="<?php echo base_url();?>assets/img/icon.png" align="middle" class="icon"/>Gaussian Elimination</a>

		<a href="<?php echo base_url();?>matrix/gauss_jordan_elimination" class="btn"><img src="<?php echo base_url();?>assets/img/icon.png" align="middle" class="icon"/>Gauss Jordan Elimination</a>

	</div>
</body>
</html>
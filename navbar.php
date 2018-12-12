<div class="mobile-side-pane" id="mobile_side_pane">
</div>

<div id="app">
	<nav class="navbar navbar-expand-xl navbar-default fixed-top pt-0 pb-0 d-none d-sm-none d-md-none d-lg-block">
		<div class="container-fluid px-xl-5">

			<!-- Brand -->
			<a class="navbar-brand p-0" href="">MATH 114</a>

			<!-- Navbar links -->
			<div class="d-none d-sm-none d-md-none d-lg-block">
				<ul class="font nav navbar-center-custom pl-3 text-center">
					<li>
						<a href="<?php echo base_url();?>home/view" class="navbar-center-size-vectors">Home</a>
					</li>
					<li>
						<a href="<?php echo base_url();?>matrix/index" class="nav-active-link navbar-center-size-vectors">Matrix</a>
					</li>
					<li>
						<a href="" class="navbar-center-size-vectors">Vector</a>
					</li>

				<!-- <li class="d-inline-flex">
						<form class="form-inline my-2 my-lg-0">
							<input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
							<button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
						</form>
					</li> -->

				</ul>
			</div>
		</div>
	</nav>

	<!-- SMALLER VIEW -->
	<nav class="navbar navbar-inverse d-block d-sm-block d-md-block d-lg-none">
		<div class="container-fluid">
			<div class="navbar-header">		
				<a class="navbar-brand" href="#">MATH 114</a>
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbar" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
			</div>
			<div class="collapse navbar-collapse" id="myNavbar">
				<ul class="font-roboto-normal nav navbar-center-custom pl-3 text-center">
					<li><a href="<?php echo base_url();?>matrix/addition_or_subtraction" class="navbar-center-size-vectors">Matrix Addition/Subtraction</a></li>
					<li><a href="<?php echo base_url();?>matrix/multiplication" class="navbar-center-size-vectors">Matrix Multiplication</a></li>
					<li><a href="<?php echo base_url();?>matrix/scalar_multiplication" class="navbar-center-size-vectors">Scalar Multiplication</a></li>
					<li><a href="<?php echo base_url();?>matrix/cramers_rule" class="navbar-center-size-vectors">Cramer's Rule</a></li>
					<li><a href="<?php echo base_url();?>matrix/determinant" class="navbar-center-size-vectors">Determinants</a></li>
					<li><a href="<?php echo base_url();?>matrix/cofactor_expansion" class="navbar-center-size-vectors">Cofactor Expansion</a></li>
					<li><a href="<?php echo base_url();?>matrix/adjoint" class="navbar-center-size-vectors">Adjoint</a></li>
					<li><a href="<?php echo base_url();?>matrix/inverse_using_adjoint" class="navbar-center-size-vectors">Inverse Using Adjoint</a></li>
					<li><a href="<?php echo base_url();?>matrix/gaussian_elimination" class="navbar-center-size-vectors">Gaussian Elimination</a></li>
					<li><a href="<?php echo base_url();?>matrix/gauss_jordan_elimination" class="navbar-center-size-vectors">Gauss Jordan Elimination</a></li>
					<!-- <li><a href="#">Matrix</a></li>
					<li><a href="#" class="nav-active-link navbar-center-size-vectors">Vector</a></li> 
					<li><a href="#">Topic 3</a></li>  -->
				</ul>
			</div>
		</div>
	</nav>

	<!-- SIDEBAR -->
	<aside class="aside d-none d-sm-none d-md-none d-lg-block">
		<div class="aside-container">
			<ul class="aside-ul">
				<li class="links-group font"><a href="<?php echo base_url();?>matrix/addition_or_subtraction" class="sub-topics">Matrix Addition/Subtraction</a></li>
				<li class="links-group font"><a href="<?php echo base_url();?>matrix/multiplication" class="sub-topics">Matrix Multiplication</a></li>
				<li class="links-group font"><a href="<?php echo base_url();?>matrix/scalar_multiplication" class="sub-topics">Scalar Multiplication</a></li>
				<li class="links-group font"><a href="<?php echo base_url();?>matrix/cramers_rule" class="sub-topics">Cramer's Rule</a></li>
				<li class="links-group font"><a href="<?php echo base_url();?>matrix/determinant" class="sub-topics">Determinants</a></li>
				<li class="links-group font"><a href="<?php echo base_url();?>matrix/cofactor_expansion" class="sub-topics">Cofactor Expansion</a></li>
				<li class="links-group font"><a href="<?php echo base_url();?>matrix/adjoint" class="sub-topics">Adjoint</a></li>
				<li class="links-group font"><a href="<?php echo base_url();?>matrix/inverse_using_adjoint" class="sub-topics">Inverse Using Adjoint</a></li>
				<li class="links-group font"><a href="<?php echo base_url();?>matrix/gaussian_elimination" class="sub-topics">Gaussian Elimination</a></li>
				<li class="links-group font"><a href="<?php echo base_url();?>matrix/gauss_jordan_elimination" class="sub-topics">Gauss Jordan Elimination</a></li>

				<!-- <li class="links-group font-roboto-normal">
					<a href="" class="sub-topics">Determinants</a>
				</li>
				<li class="links-group font-roboto-normal">
					<a href="" class="sub-topics">Matrix Operations</a>
				</li>
				<li class="links-group font-roboto-normal">
					<a href="" class="sub-topics">Topic 3</a>
				</li> -->

			</ul>
		</div>
	</aside>
	<!-- END SIDEBAR -->
</div>
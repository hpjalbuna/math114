<div class="main-content">

	<!--cramer's rule should be a square matrix-->
	<!--mas better if like either sa row/column automatic nga same ang input niya sa both -->

	<div class="d-flex justify-content-end flex-wrap border-bottom">
		<h1 class="method-title">Cramer's Rule</h1>
	</div>

	<span class="container-fluid" id="solution"></span> 

	<div class="container-fluid" id="content">
		<fieldset>
			<div class="d-flex justify-content-center flex-wrap align-items-center" id="set-dimensions">
				<span>Matrix Dimension</span>
				<input type="number" id="row-size" placeholder="Row Size" min="1" max="100">	
				<span>X</span>
				<input type="number" id="col-size" placeholder="Column Size" min="1" max="100">
				<button type="button" id="set-matrix-cramers-button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Set Matrix</button>
			</div>
		</fieldset>

		<!-- Modal -->
		<div id="largeModal" class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" data-backdrop="false">
			<div class="modal-dialog modal-lg">
				<div class="modal-content">
					<!--Modal Header-->
					<div class="modal-header">
						<h5 class="modal-title" id="exampleModalLongTitle">Cramer's Rule</h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<!--Modal Body-->
					<div class="modal-body d-flex justify-content-between flex-wrap" id="set-matrix-cramers">
						<!--matrix is set by js-->
					</div>

					<!--Modal Footer-->
					<div class="modal-footer">
						<!-- <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> -->
						<button type="button" class="btn btn-primary" onclick="getMatrixValue()">Solve</button>
					</div>
				</div>
			</div>
		</div>

		<fieldset>
			<div class="instructions">
				<strong>Instructions</strong>
				<div>sgdyfdsjkhgksjdjgksdjgksdjksdjksdjgksdjgksjdgksjgklsdjgksjdgksndkgvnsjdkbvjdsbvmnsdmvndmnskdnsdnfkdnskfsdkfjksdjfksdjfssgdyfdsjkhgksjdjgksdjgksdjksdjksdjgksdjgksjdgksjgklsdjgksjdgksndkgvnsjdkbvjdsbvmnsdmvndmnskdnsdnfkdnskfsdkfjksdjfksdjfssgdyfdsjkhgksjdjgksdjgksdjksdjksdjgksdjgksjdgksjgklsdjgksjdgksndkgvnsjdkbvjdsbvmnsdmvndmnskdnsdnfkdnskfsdkfjksdjfksdjfssgdyfdsjkhgksjdjgksdjgksdjksdjksdjgksdjgksjdgksjgklsdjgksjdgksndkgvnsjdkbvjdsbvmnsdmvndmnskdnsdnfkdnskfsdkfjksdjfksdjfssgdyfdsjkhgksjdjgksdjgksdjksdjksdjgksdjgksjdgksjgklsdjgksjdgksndkgvnsjdkbvjdsbvmnsdmvndmnskdnsdnfkdnskfsdkfjksdjfksdjfs</div>
			</div>
		</fieldset>
	</div>
</div>
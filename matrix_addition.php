<div class="main-content">
	<div class="row">
		Matrix Dimension
		<input type="text" id="row_size" placeholder="Row Size">
		<span>x</span>
		<input type="text" id="col_size" placeholder="Column Size">
		<select id="operation">
			<option value="add">+</option>
			<option value="subtract">-</option>
		</select>
	</div>

	<!-- Button trigger modal -->
	<button type="button" id="setMatrixAddSub" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
		Set Matrix
	</button>

	<!-- Modal -->
	<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="exampleModalLongTitle"> </h5>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>

				<div class="modal-body" id="setMatrix">
					<!--matrix is set by js-->
				</div>

				<div class="modal-footer">
					<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
					<button type="button" class="btn btn-primary" onclick="getMatrixValue()">Calculate</button>
				</div>

			</div>
		</div>
	</div>

</div>
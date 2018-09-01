module.exports = (survey) =>{
	return `
		<html>
			<body>
				<div class="container">
					<div class="row">
						<div class="col-sm-12">
							<h1 class="page-header">Hello, </h1>
							<h3>I would like your input!</h3>

							<p>Please answer the following question:</p>
							<p>${survey.body}</p>
							<div class="userResponse">
								<a href="http://localhose:3000">Yes</a>
								<a href="http://localhose:3000">No</a>
							</div>
						</div>
					</div>
				</div>
			</body>
		</html>
	`; 
};

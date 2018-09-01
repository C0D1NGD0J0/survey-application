module.exports = (survey) =>{
	return `
		<html>
			<body>
				<div class="container">
					<div class="row">
						<div class="col-sm-12">
							<h1 class="page-header">Hello, </h1>
							<h3>I would like your input!</h3>

							<p>${survey.body}</p>
							<div class="userResponse">
								<a href=${process.env.REDIRECT_DOMAIN}>Yes</a>
								<a href=${process.env.REDIRECT_DOMAIN}>No</a>
							</div>
						</div>
					</div>
				</div>
			</body>
		</html>
	`; 
};

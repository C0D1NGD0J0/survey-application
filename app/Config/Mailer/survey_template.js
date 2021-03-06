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
								<a href=${process.env.REDIRECT_DOMAIN}/api/surveys/${survey.id}/yes>Yes</a>
								<a href=${process.env.REDIRECT_DOMAIN}/api/surveys/${survey.id}/no>No</a>
							</div>
						</div>
					</div>
				</div>
			</body>
		</html>
	`; 
};

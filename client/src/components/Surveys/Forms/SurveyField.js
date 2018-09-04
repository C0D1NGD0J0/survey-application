import React from 'react';

const SurveyField = (props) => {
	const { input } = props;

  return (
  	<div className="form-group">
  		<input className="form-control" placeholder="Enter Survey title" {...input} />
  	</div>
  );
};

export default SurveyField;

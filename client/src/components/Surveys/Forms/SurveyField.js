import React from 'react';

const SurveyField = (props) => {
	const { input, label, placeholder } = props;

  return (
  	<div className="form-group">
  		<label>{label}</label>
  		<input placeholder={placeholder} className="form-control" {...input} />
  	</div>
  );
};

export default SurveyField;

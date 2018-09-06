import React from 'react';

const SurveyField = (props) => {
	const { input, label, placeholder, meta } = props;
	const { touched, error } = meta;

  return (
  	<div className="form-group">
  		<label>{label}</label>
  		<input placeholder={placeholder} className="form-control" {...input} />
			<span className="text-danger text-uppercase"><b>{ touched && error }</b></span>
  	</div>
  );
};

export default SurveyField;

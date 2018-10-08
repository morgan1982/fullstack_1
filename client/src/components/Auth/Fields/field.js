import React from 'react';

const textField = (props) => {
	
	return (
	<div>
		<label className="control-label">{props.label}</label>
		<input
			className="form-control"
			type={props.type}
			name={props.name}
			onChange={props.changed}
			value={props.value}/> 
	</div>
	)
}

export default textField;
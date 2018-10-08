import React from 'react';
import PropTypes from 'prop-types';

const textField = ({ label, type, name, value, changed }) => {

	return (
	<div className="form-group">
		<label className="control-label">{label}</label>
		<input
			className="form-control"
			type={type}
			name={name}
			onChange={(e) => changed(e)}
			value={value}/>
	</div>
	)
}

textField.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    changed: PropTypes.func.isRequired,


}

export default textField;

import React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';

function Greeting({ name }) {
	return <div>Hello {name}</div>;
}

Greeting.defaultProps = {
	name: 'Stranger'
};

Greeting.propTypes = {
	name: PropTypes.string
};

export default hot(module)(Greeting);

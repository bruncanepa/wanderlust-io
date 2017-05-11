import React from 'react';
import { Link } from 'react-router-dom';
import AddDestinationContainer from '../destinations/AddDestinationContainer';

const Place = ({ match, id, name }) => (
	<li>
	    <Link to={`${match.url}/${id}`}>
		    Place: {name}
		</Link>
		<AddDestinationContainer placeId={id}/>
	</li>
);

export default Place;

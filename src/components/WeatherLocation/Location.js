import React from 'react';
import PropTypes from 'prop-types';

const Location = ({city}) => (
// const city = props.city;
// const {city} = props;
  <div>
    <h1 className='locationCont'>
      {city}
    </h1>
  </div>
);

Location.propTypes = {
  city: PropTypes.string.isRequired,
}

export default Location;
import PropTypes from 'prop-types';

export const AboutImage = ({ itemPrice: aboutImage }) => {
    return <p>INR: {aboutImage}</p>
}

AboutImage.propTypes = {
    itemPrice: PropTypes.number
}
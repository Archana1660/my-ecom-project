import PropTypes from 'prop-types';

export const AboutImage = ({ itemDescription: aboutImage }) => {
    return <p>INR: {aboutImage}</p>
}

AboutImage.propTypes = {
    itemDescription: PropTypes.string
}
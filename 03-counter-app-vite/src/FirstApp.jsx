import PropTypes from 'prop-types';

export const FirstApp = (props) => {
    return (
        <>
        <h1>{props.title}</h1>
        <p>{props.subtitle}</p>
        
        </>
    );
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.number.isRequired,
}
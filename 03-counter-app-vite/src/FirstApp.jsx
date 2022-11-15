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
    subtitle: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
}

FirstApp.defaultProps = {
    subtitle: 123,
    title: 'No hay titulo',
}
import './custom-button.style.scss';

function CustomButton({children, isGoogleSignIn, ...otherProps}) {
    return (  
        <button
            className={`
                custom-button
                ${isGoogleSignIn ? 'googleClass' : ''}
            `} {...otherProps}>
            {children}
        </button>
    );
}

export default CustomButton;
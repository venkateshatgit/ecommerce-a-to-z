import './form-input.style.scss';

function FormInput({setInput, label, ...otherProps}) {
    return (  
        <div className="group">

            <input className='form-input' onChange={ e => setInput(e.target.value)} {...otherProps}/>
            {
                label ?
                (
                    <label className={
                        `${otherProps.value.length ? 'shrink':'' }
                        form-input-label`
                    }>
                        {label}
                    </label>
                ) : null
            }

        </div>
    );
}

export default FormInput;
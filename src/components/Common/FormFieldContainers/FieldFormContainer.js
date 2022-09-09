export const FieldFormContainer = ({
   placeholder,
   type,
   input,
   meta: {
       touched, error
   }
}) => {
    const hasError = touched && error;
    return (
        <div>
            <input {...input} placeholder={placeholder} type={type} style={{border: hasError ? '2px solid red': 'none'}}/>
            {hasError && <div style={{color: 'red'}}>{error}</div>}
        </div>
    );
};
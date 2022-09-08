import {Field, reduxForm} from "redux-form";

const AddMessageForm = ({ handleSubmit }) => {
    return (
        <form onSubmit={ handleSubmit }>
            <Field
                name="message"
                component="input"
                type="text"
                placeholder="Message"
            />
            <button type="submit">Send Message</button>
        </form>
    );
};

export default reduxForm({
    form: 'dialogsAddMessageForm'
})(AddMessageForm);
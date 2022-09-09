import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators";
import {FieldFormContainer} from "../../Common/FormFieldContainers/FieldFormContainer";

const maxLength = maxLengthCreator(10);

const AddPost = ({ handleSubmit }) => {
    return (
        <form onSubmit={ handleSubmit }>
            <Field
                name="newPost"
                component={FieldFormContainer}
                type="text"
                placeholder="New Post"
                validate={[required, maxLength]}
            />
            <button type="submit">Add Post</button>
        </form>
    );
};

export default reduxForm({
    form: 'profileAddPostForm'
})(AddPost);
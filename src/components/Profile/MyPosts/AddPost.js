import {Field, reduxForm} from "redux-form";

const AddPost = ({ handleSubmit }) => {
    return (
        <form onSubmit={ handleSubmit }>
            <Field
                name="newPost"
                component="input"
                type="text"
                placeholder="New Post"
            />
            <button type="submit">Add Post</button>
        </form>
    );
};

export default reduxForm({
    form: 'profileAddPostForm'
})(AddPost);
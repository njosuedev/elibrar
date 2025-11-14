import { Field, Formik, Form, ErrorMessage } from "formik";
import * as Yup from 'yup';
import axios from "axios";


function Create() {
    const header = {
        textAlign: "center",
        color: "blue",
    };

    const createPost = {
        padding: "10px",
        background: "#fdfcfcff",
        border: "0.5px solid #e4e3e3ff",
        width: "30vw",
        justifySelf: "center",
        marginTop: "5px",
        borderRadius: "8px",
    };

    const formStyles = {
        width: "100%",
        display: "flex",
        flexDirection: "column",
    };
    const inpuCreate = {
        paddingTop: "5px",
        paddingBottom: "5px",
        paddingLeft: "10px",
        fontSize: "18px",
        marginTop: "5px",
        border: "0.5px solid #e4e3e3ff",
        outline: "none",
        resize: "none",
    };
    const submitBtn = {
        padding: "10px",
        marginTop: "10px",
        border: "none",
        background: "blue",
        color: "#eee",
        borderRadius: "20px",
        fontSize: "15px",
        fontWeight: "bold",
    };

    const span = {
        color: "red"
    }

    const initialValues = {
        title: "",
        postText: "",
        username: ""
    }

    const onSubmit = (data) => {
        axios.post("http://localhost:3001/posts", data).then((response) => {
            console.log("IT WORKS");
        });
    }

    const validationSchema = Yup.object().shape({
        title: Yup.string()
            .required("Title is required"),

        postText: Yup.string()
            .required("Post text is required"),

        username: Yup.string()
            .min(3, "Username must be at least 3 characters")
            .max(15, "Username cannot exceed 15 characters")
            .required("Username is required")
    });

    return (
        <div style={createPost}>
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                <Form style={formStyles}>
                    <h1 style={header}>Create Post</h1>

                    <label>Title: </label>
                    <ErrorMessage style={span} name="title" component="span" />
                    <Field
                        style={inpuCreate}
                        autoComplete="off"
                        id="inpuCreate"
                        name="title"
                    />


                    <label>Post: </label>
                    <ErrorMessage style={span} name="postText" component="span" />
                    <Field
                        style={inpuCreate}
                        autoComplete="off"
                        id="inputCreate"
                        as="textarea"
                        rows="5"
                        name="postText"
                    />

                    <label>User name: </label>
                    <ErrorMessage style={span} name="username" component="span" />
                    <Field
                        style={inpuCreate}
                        autoComplete="off"
                        id="inputCreate"
                        name="username"
                    />

                    <button style={submitBtn} type="submit">
                        Create post
                    </button>
                </Form>
            </Formik>
        </div>
    );
}

export default Create;

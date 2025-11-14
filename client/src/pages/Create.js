import React from 'react'
import { Field, Formik, Form } from 'formik'

function Create() {

    const header = {
        textAlign: "center",
        color: "blue"
    }

    const createPost = {
        padding: "10px",
        background: "#fdfcfcff",
        border: "0.5px solid #e4e3e3ff",
        width: "30vw",
        justifySelf: "center",
        marginTop: "5px",
        borderRadius: "8px",
    }

    const formStyles = {
        width: "100%",
        display: "flex",
        flexDirection: "column"
    }
    const inpuCreate = {
        paddingTop: "5px",
        paddingBottom: "5px",
        paddingLeft: "10px",
        fontSize: "18px",
        marginTop: "5px",
        border: "0.5px solid #e4e3e3ff",
        outline: "none",
        resize: "none"
    }
    const submitBtn = {
        padding: "10px",
        marginTop: "10px",
        border: "none",
        background: "blue",
        color: "#eee",
        borderRadius: "20px",
        fontSize: "15px",
        fontWeight: "bold"
    }

    return (
        <div style={createPost}>
            <Formik>
                <Form style={formStyles}>
                    <h1 style={header}>Create Post</h1>
                    <label>Title: </label>
                    <Field style={inpuCreate} id="inpuCreate" name="title" />

                    <label>Post: </label>
                    <Field style={inpuCreate} id="inputCreate" as="textarea" rows="5" name="postText" />

                    <label>User name: </label>
                    <Field style={inpuCreate} id="inputCreate" name="username" />

                    <button style={submitBtn} type='submit'>Create post</button>
                </Form>
            </Formik>
        </div>
    )
}

export default Create
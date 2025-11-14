import React from 'react'
import {Field, Formik} from 'formik'

function Create() {
  return (
    <div>
        <Formik>
            <form>
                <Field placeholder="Title"/>
            </form>
        </Formik>
    </div>
  )
}

export default Create
import { useFormik } from "formik";
import { basicSchema } from "../schemas";
import { useState } from "react";
import './VidStyles2.css';



const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const Form = () => {
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    
  } = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  const handleSubmit=()=> { // Once the form has been submitted, this function will post to the backend
    const postURL = "http://localhost:4000/api/submissions/" //Our previously set up route in the backend
    fetch(postURL, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ // We should keep the fields consistent for managing this data later
            email: values.email,
            age: values.age,
            password: values.password
        })
    })
    .then(()=>{
        // Once posted, the user will be notified 
        alert('You have been added to the system!');
    })
  }
  

  console.log(errors);

  return (
    <div className="formContainer">
    <div className="formbox">
    <form onSubmit={handleSubmit} autoComplete="off">
      <div className="email">
      <label  htmlFor="email">Email :</label>
      <input
        value={values.email}
        onChange={handleChange}
        id="email"
        type="email"
        placeholder=""
        onBlur={handleBlur}
        className={errors.email && touched.email ? "input-error" : ""}
      />
      {errors.email && touched.email && <p className="error">{errors.email}</p>}
      </div>
      <div className="age">
      <label  htmlFor="age">Age :</label>
      <input
        id="age"
        type="number"
        placeholder=""
        value={values.age}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.age && touched.age ? "input-error" : ""}
      />
      {errors.age && touched.age && <p className="error">{errors.age}</p>}
      </div>
      <div className="password">
      <label htmlFor="password">Password :</label>
      <input
        id="password"
        type="password"
        placeholder=""
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.password && touched.password ? "input-error" : ""}
      />
      {errors.password && touched.password && (
        <p className="error">{errors.password}</p>
      )}
      </div>
      <div className="confirmPassword">
      <label htmlFor="confirmPassword">Confirm Password :</label>
      <input
        id="confirmPassword"
        type="password"
        placeholder=""
        value={values.confirmPassword}
        onChange={handleChange}
        onBlur={handleBlur}
        className={
          errors.confirmPassword && touched.confirmPassword ? "input-error" : ""
        }
      />
      {errors.confirmPassword && touched.confirmPassword && (
        <p className="error">{errors.confirmPassword}</p>
      )}
      </div>
      <button className="btn2" disabled={isSubmitting} type="submit">
        Submit
      </button>
    </form>
    </div>
    </div>
  );
};
export default Form;
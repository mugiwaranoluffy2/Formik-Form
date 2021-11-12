import { useFormik } from "formik";
import Input from "./Input.styled";
import * as yup from "yup";
import Error from "./Error.styled";

const Form = () => {
  const initialValues = {
    fname: "",
    lname: "",
    email: "",
    phoneNumber: Number
  };

  const onSubmit = (values) => {
    console.log(values);
  };
  const validate = (values) => {
    const errors = {};

    if (!values.fname) {
      errors.fname = "Required";
    }
    if (!values.lname) {
      errors.lname = "Required";
    }
    if (!values.email) {
      errors.email = "Required";
    }
    return errors;
  };

  const validationSchema = yup.object({
    fname: yup.string("Enter string").required("Required"),
    email: yup.string().email("Invalid Email").required("Required"),
    lname: yup.string().required("Required"),
    phoneNumber: yup.number().required("Required")
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="fname">FirstName</label>
        <Input
          type="text"
          id="fname"
          name="fname"
          onChange={formik.handleChange}
          value={formik.values.fname}
        />
        {formik.errors.fname ? (
          <div>
            <Error>{formik.errors.fname}</Error>
          </div>
        ) : null}
        <label htmlFor="lname">LastName</label>
        <Input
          type="text"
          id="lname"
          name="lname"
          onChange={formik.handleChange}
          value={formik.values.lname}
        />
        {formik.errors.lname ? (
          <div>
            <Error>{formik.errors.lname}</Error>
          </div>
        ) : null}
        <label htmlFor="email">Email</label>
        <Input
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email ? (
          <div>
            <Error>{formik.errors.email}</Error>
          </div>
        ) : null}

        <label htmlFor="number">Phone Number</label>
        <Input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          onChange={formik.handleChange}
          value={formik.values.phoneNumber}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default Form;

import React, {useState, useEffect} from 'react';
import {Form, Field, withFormik} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';


const UserForm = ({touched, values, errors, status}) => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        if (status) {
            setUsers(users => [...users, status])
        }
}, [status]);

return (
    <div className="user-form">
        <h1>User Form</h1>
        <Form>
            <label>
                Name
            <Field type="text" name="name" palceholder="name" />
            {touched.name && errors.name && (
                <p className="error">{errors.name}</p>
            )}
            </label>
            <label>
                Email
            <Field type="email" name="email" palceholder="name@example.com" />
            {touched.email && errors.email && (
                <p className="error">{errors.email}</p>
            )}
            </label>
            <label>
                PassWord
            <Field type="password" name="password" palceholder="password" />
            {touched.password && errors.password && (
                <p className="error">{errors.password}</p>
            )}
            </label>
            
            <label className="checkbox-container">
                Terms Of service
                <Field type="checkbox" name="termsofservice" checked={values.termsofservice} />
                <span className="checkmark" />
            </label>
            <button type="submit">Submit</button>
        </Form>
        {users.map(user => (
            <ul key={user.id}>
            <li>Name: {user.name}</li>
            <li>Email: {user.email}</li>
            </ul>
        ))}
        
         </div>
        );
    };

    const FormikForm = withFormik({
        mapPropstoValues({name, email, password, termsofservice}) {
        
            return{
               name: name || '',
               email: email || '',
               password: password || '',
               termsofservice: termsofservice || false 
        
        };
    },

        validationSchema: Yup.object().shape({
            name: Yup.string().required(),
            email: Yup.string().required(),
            password: Yup.string().required(),
            termsofservice: Yup.boolean().oneOf([true, 'Must accept Terms'])
        }),

        handleSubmit(values, {setStatus}) {
            axios
            .post("https://reqres.in/api/users/", values)
            .then(response => {
                setStatus(response.data);
            })
            .catch(error => console.log(error.response));
        }
    
})(UserForm);

export default FormikForm;
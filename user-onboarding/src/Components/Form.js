import React, {useState, useEffect} from 'react';
import Formik from 'formik';
import Yup from 'yup';
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
            <Field type="text" name="name" palceholder="name" />
            
            <Field type="email" name="email" palceholder="name@example.com" />
            
            <Field type="password" name="password" palceholder="password" />
            
            
            <label className="checkbox-container">
                Terms Of service
                <Field type="checkbox" name="termsofservice" checked={values.termsofservice} />
                <span className="checkmark" />
            </label>
            <button type="submit">Submit</button>
        </Form>
        
    </div>

    <Formik 
        render={props => {
            return(
               name: name || '',
               email: email || '',
               password: password || '',
               termsofservice: termsofservice || false 
        
        }})
        </Formik>
    
)
}
}

export default Form;
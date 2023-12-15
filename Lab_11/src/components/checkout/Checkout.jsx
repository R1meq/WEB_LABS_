import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import {useNavigate} from 'react-router-dom';
import ErrorFormik from '../ErrorMassage/ErrorMassage';
import './Checkout.css';


const Checkout = () => {
    const navigate = useNavigate();

    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: ''
    };

    const validationSchema = Yup.object().shape({
        firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    lastName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string()
        .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,'invalid email')
        .required('email required'),
    phoneNumber: Yup.string()
        .matches(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/, 'Invalid  number')
        .required('Phone is required')
    });

    const handleSubmit = (values, actions) => {
        actions.setSubmitting(false);
        navigate('/formik_success');
    };

    return (
        <div>
            <div>
                <div className={'formik_wrapper'}>
                    <h2 className={'formik_title'}>Enter your details</h2>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ isSubmitting }) => (

                            <Form className='form_input'>
                                <div className={'input'}>
                                    <div>
                                        <label htmlFor="firstName">First Name</label>
                                        <Field type="text" id="firstName" name="firstName"/>
                                        <ErrorMessage name="firstName" component={ErrorFormik}/>
                                    </div>
                                    <div>
                                        <label htmlFor="lastName">Last Name</label>
                                        <Field type="text" id="lastName" name="lastName"/>
                                        <ErrorMessage name="lastName" component={ErrorFormik}/>
                                    </div>
                                    <div>
                                        <label htmlFor="email">Email</label>
                                        <Field type="email" id="email" name="email"/>
                                        <ErrorMessage name="email" component={ErrorFormik}/>
                                    </div>
                                    <div>
                                        <label htmlFor="phoneNumber">Phone Number</label>
                                        <Field type="tel" id="phoneNumber" name="phoneNumber"/>
                                        <ErrorMessage name="phoneNumber" component={ErrorFormik}/>
                                    </div>

                                </div>
                                <div className={'button_wrapper'}>
                                    <button className={'formik_button'}><a className={'button_text'}
                                                                           href={'/catalog'}>Back</a></button>
                                    <button className={'formik_button'} type="submit" disabled={isSubmitting}>
                                        Continue
                                    </button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
};

export default  Checkout;
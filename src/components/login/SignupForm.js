import { Box, Button, TextField, Typography } from '@mui/material'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { useHistory } from 'react-router-dom'
import { useIdentityContext } from 'react-netlify-identity-gotrue'

const modalStyle = {
    margin: "2% auto",
    maxWidth: 400,
    bgcolor: 'background.paper',
    borderRadius: 1,
    boxShadow: 24,
    p: 4,
}

const SignupForm = (props) => {
    const history = useHistory()
    const identity = useIdentityContext()
    const handleClose = () => {
        history.push('/')
    }

    return (
        <>
            <Typography
                variant="h3"
                component="h1"
                sx={{ display: 'flex', justifyContent: 'center', mt: 8 }}>
                Signup Page
            </Typography>
            <Typography color="text.secondary" sx={{display: 'flex', justifyContent: 'center', mt: 2, mx: 3}}>
                Sign up with your email address for free to start viewing Soccer App content!
            </Typography>

            <Box sx={modalStyle}>
                <Formik
                    initialValues={{
                        userName: 'First Last',
                        email: 'foo@example.com',
                        password: 'Password123!',
                    }}
                    validationSchema={Yup.object().shape({
                        userName: Yup.string()
                            .min(4, 'Must be at least 4 characters')
                            .max(30, 'Must be less than 30 characters')
                            .required('User Name is required'),
                        email: Yup.string()
                            .email('Must be a valid email')
                            .max(255)
                            .required('Email is required'),
                        password: Yup.string()
                            .min(8, 'Must be at least 8 characters')
                            .max(255)
                            .required('Password is required'),
                    })}
                    onSubmit={async (
                        value,
                        { setErrors, setStatus, setSubmitting }
                    ) => {
                        try {
                            setStatus({ success: true })
                            setSubmitting(false)
                            await identity
                                .signup({
                                    email: value.email,
                                    password: value.password,
                                    user_metadata: {
                                        full_name: value.userName,
                                    },
                                })
                                .then(() => {
                                    handleClose()
                                    console.log('Successfully submitted!')
                                })
                        } catch (err) {
                            console.error(err)
                            setStatus({ success: false })
                            setErrors({ submit: err.message })
                            setSubmitting(false)
                        }
                    }}>
                    {({
                        errors,
                        values,
                        handleSubmit,
                        handleBlur,
                        handleChange,
                        isSubmitting,
                        touched,
                    }) => (
                        <form noValidate onSubmit={handleSubmit}>
                            <TextField
                                fullWidth
                                label="User Name"
                                margin="normal"
                                name="userName"
                                type="text"
                                variant="outlined"
                                color="grey"
                                // value={values.userName}
                                error={Boolean(
                                    touched.userName && errors.userName
                                )}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                helperText={touched.userName && errors.userName}
                            />

                            <TextField
                                fullWidth
                                label="Email Address"
                                margin="normal"
                                name="email"
                                type="email"
                                variant="outlined"
                                color="grey"
                                // value={values.email}
                                error={Boolean(touched.email && errors.email)}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                helperText={touched.email && errors.email}
                            />

                            <TextField
                                fullWidth
                                label="Password"
                                margin="normal"
                                name="password"
                                type="password"
                                variant="outlined"
                                color="grey"
                                // value={values.password}
                                error={Boolean(
                                    touched.password && errors.password
                                )}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                helperText={touched.password && errors.password}
                            />

                            <Button
                                sx={{
                                    backgroundColor: '#d00',
                                    ':hover': {
                                        backgroundColor: '#d00',
                                        filter: 'brightness(95%)',
                                    },
                                }}
                                color="primary"
                                size="large"
                                variant="contained"
                                type="submit"
                                disabled={isSubmitting}>
                                Sign Up
                            </Button>
                        </form>
                    )}
                </Formik>
            </Box>
        </>
    )
}

export default SignupForm

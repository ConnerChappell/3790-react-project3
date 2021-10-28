import { Box, Button, TextField } from '@mui/material'
import { Formik } from 'formik'
import * as Yup from 'yup'

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: 1,
    boxShadow: 24,
    p: 4,
}

const LoginForm = (props) => {
    const { closeHandler } = props

    return (
        <Box sx={modalStyle}>
            <Formik
                initialValues={{
                    email: 'foo@example.com',
                    password: 'Password123!',
                }}
                validationSchema={Yup.object().shape({
                    email: Yup.string()
                        .email('Must be a valid email')
                        .max(255)
                        .required('Email is required'),
                    password: Yup.string()
                        .min(8, 'Must be at least 8 characters')
                        .max(255)
                        .required('Password is required'),
                })}
                onSubmit={(value, { setErrors, setStatus, setSubmitting }) => {
                    try {
                        setStatus({ success: true })
                        setSubmitting(false)
                    } catch (err) {
                        console.error(err)
                        setStatus({ success: false })
                        setErrors({ submit: err.message })
                        setSubmitting(false)
                    } finally {
                        closeHandler()
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
                            label="Email Address"
                            margin="normal"
                            name="email"
                            type="email"
                            variant="outlined"
                            // value={values.email}
                            error={Boolean(touched.email && errors.email)}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            helperText={touched.email && errors.email}/>
                        
                        <TextField
                            fullWidth
                            label="Password"
                            margin="normal"
                            name="password"
                            type="password"
                            variant="outlined"
                            // value={values.password}
                            error={Boolean(touched.password && errors.password)}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            helperText={touched.password && errors.password}/>

                        <Button
                            color="primary"
                            size="large"
                            variant="contained"
                            type="submit"
                            disabled={isSubmitting}>
                            Login
                        </Button>
                    </form>
                )}
            </Formik>
        </Box>
    )
}

export default LoginForm

import Box from '@mui/material/Box'

const style = {
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

const NotFound = () => {
    return (
        <Box sx={style} className="not-found-box">
            <h1>Page Not Found</h1>
        </Box>
    )
}

export default NotFound
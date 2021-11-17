import { useIdentityContext } from 'react-netlify-identity-gotrue'

const Home = () => {
    const identity = useIdentityContext()
    console.log(identity)

    return (
        <>
            {!identity.provisionalUser && !identity.user && (
                <div>
                    <h1>Welcome to the Soccer App!</h1>
                    <h2>Please signup or login to view content</h2>
                </div>
            )}

            {identity.provisionalUser && (
                <div>
                    <h1>Thanks for signing up!</h1>
                    <h2>Please check your email at "{identity.provisionalUser.email}" to confirm your account</h2>
                </div>
            )}

            {identity.user && (
                <div>
                    <h1>Welcome {identity.user?.user_metadata?.full_name}!</h1>
                    <h2>Some links and stuff will be added here</h2>
                </div>
            )}
        </>
    )
}

export default Home

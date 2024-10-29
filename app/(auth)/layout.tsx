interface AuthLayoutProps {
    children : React.ReactNode
}

const AuthLayout = ({
    children
}: AuthLayoutProps) => {
    return (
        <main className="h-full bg-[url('/assets/42153edee14c6bb2affb2bdb5c065004.webp')] bg-cover">
            <div className="h-full w-full  backdrop-brightness-50 bg-gradient-to-b from-black/60 via-transparent to-black/60">
                {children}
            </div>
        </main>
    )
}

export default AuthLayout
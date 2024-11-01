import { ModalProvider } from "@/providers/modal.provider";
import { ThemeProvider } from "@/providers/theme.provider";

interface RootLayoutProps {
    children: React.ReactNode;
}

const RootLayout = ({
    children
}: RootLayoutProps ) => {
    
    return (
        <div className="h-full">
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                <ModalProvider/>
                {children}
            </ThemeProvider>
        </div>
    )
}

export default RootLayout;
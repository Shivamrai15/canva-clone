import { Wrapper } from "@/components/layout/wrapper";

interface SiteLayoutProps {
    children: React.ReactNode;
}

const SiteLayout = ({
    children
}: SiteLayoutProps) => {
    
    return (
        <div className='h-full'>
            <Wrapper>
                {children}
            </Wrapper>
        </div>
    )
}

export default SiteLayout
import { BottomBar } from "./bottombar";
import { Sidebar } from "./sidebar";

interface WrapperProps {
    children: React.ReactNode;
}


export const Wrapper = ({
    children
}: WrapperProps) => {
    return (
        <div className="h-full w-full flex flex-col bg-gradient-to-br from-[#f8f3ff] from-20% to-[#ddeaf9] md:flex-row dark:bg-gradient-to-l md:dark:bg-gradient-to-b dark:from-60% md:dark:from-30% dark:from-[#2b1052] dark:to-[#0b284c] transition-all">
            <aside className="hidden md:flex w-80 h-full shrink-0">
                <div className="w-16 h-full border-r border-neutral-300 dark:border-zinc-600">
                    <Sidebar/>
                </div>
                <div className="w-64 h-full">
                    
                </div>
            </aside>
            <div className="h-[calc(100%-3.5rem)] w-full md:h-full md:w-[calc(100%-20rem)] overflow-y-auto relative transition-all">
                <header className="md:hidden h-20 w-full">

                </header>
                <main className="w-full md:h-full p-3">
                    {children}
                </main>
            </div>
            <footer className="md:hidden w-full h-14 border-t dark:border-neutral-700 dark:bg-neutral-800">
                <BottomBar/>
            </footer>
        </div>
    )
}

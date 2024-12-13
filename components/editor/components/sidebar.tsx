"use client";

import { 
    ActiveDrawIcon,
    ActiveElementsIcon,
    ActiveProjectsIcon,
    ActiveTemplateIcon,
    ActiveTextIcon,
    ActiveUploadIcon,
    DrawIcon,
    ElementsIcon,
    ProjectsIcon,
    TemplateIcon,
    TextIcon,
    UploadIcon
} from '@/components/icons/icons';
import { cn } from '@/lib/utils';
import { Tool } from '../hooks/types';
import { SidebarItem } from './sidebar-item';

interface SidebarProps {
    activeTool : Tool,
    onChangeActiveTool : (activeTool: Tool)=>void;
}

export const Sidebar = ({
    activeTool,
    onChangeActiveTool
}: SidebarProps) => {
    return (
        <aside 
            className={cn(
                "hidden md:block w-[72px] h-full overflow-y-auto p-2",
                activeTool!=="SELECT" && "bg-white dark:bg-[#252627]"
            )}
        >
            <ul className='flex flex-col' >
                <SidebarItem
                    label="Design"
                    color='#13a3b5'
                    icon={TemplateIcon}
                    activeIcon={ActiveTemplateIcon}
                    activeTool={activeTool}
                    onChangeActiveTool={onChangeActiveTool}
                    tool="DESIGNS"
                />
                <SidebarItem
                    label="Elements"
                    color='#4a53fa'
                    icon={ElementsIcon}
                    activeIcon={ActiveElementsIcon}
                    activeTool={activeTool}
                    onChangeActiveTool={onChangeActiveTool}
                    tool='ELEMENTS'
                />
                <SidebarItem
                    label="Text"
                    color='#992bff'
                    icon={TextIcon}
                    activeIcon={ActiveTextIcon}
                    activeTool={activeTool}
                    onChangeActiveTool={onChangeActiveTool}
                    tool='TEXT'
                />
                <SidebarItem
                    label="Upload"
                    color='#ff6105'
                    icon={UploadIcon}
                    activeIcon={ActiveUploadIcon}
                    activeTool={activeTool}
                    onChangeActiveTool={onChangeActiveTool}
                    tool='UPLOAD'
                />
                <SidebarItem
                    label="Draw"
                    color='#0ba84a'
                    icon={DrawIcon}
                    activeIcon={ActiveDrawIcon}
                    activeTool={activeTool}
                    onChangeActiveTool={onChangeActiveTool}
                    tool='DRAW'
                />
                <SidebarItem
                    label="Projects"
                    color='#138eff'
                    icon={ProjectsIcon}
                    activeIcon={ActiveProjectsIcon}
                    activeTool={activeTool}
                    onChangeActiveTool={onChangeActiveTool}
                    tool='PROJECT'
                />
            </ul>
        </aside>
    )
}

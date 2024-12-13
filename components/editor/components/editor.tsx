"use client";

import {
    useRef,
    useState,
    useCallback,
    useEffect
} from "react";
import { fabric } from 'fabric';
// import debounce from "lodash.debounce";

import { Header } from "./header";
import { Footer } from "./footer";
import { Sidebar } from "./sidebar";
import { Draw } from "./draw-tool";
import { ProjectResponse } from "@/types";
import { useEditor } from "@/components/editor/hooks/use-editor";
import { Tool, selectionDependentTools } from "@/components/editor/hooks/types";
import { TextTool } from "./text-tool";
import { cn } from "@/lib/utils";
import { DesignTool } from "./design-tool";
import { ElementsTool } from "./elements-tool";
import { UploadTool } from "./upload-tool";
import { ProjectsTool } from "./project-tool";


interface EditorProps {
    data : ProjectResponse
}

export const Editor = ({
    data
}: EditorProps ) => {
    

    const [activeTool, setActiveTool] = useState<Tool>("SELECT");
    
    const onChangeActiveTool = useCallback((tool: Tool)=>{
        setActiveTool(tool);
    }, [activeTool]);


    const canvasRef = useRef(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const onClearSelection = useCallback(() => {
        if (selectionDependentTools.includes(activeTool)) {
            setActiveTool("SELECT");
        }
    }, [activeTool]);

    const { init, editor } = useEditor({
        defaultState: data.pages[0].data ? JSON.stringify(data.pages[0].data) : "",
        defaultWidth: data.width,
        defaultHeight: data.height,
        clearSelectionCallback: onClearSelection,
        // saveCallback: debouncedSave,
    });

    useEffect(() => {
        if (!canvasRef.current) {
            return;
        }
        const canvas = new fabric.Canvas(canvasRef.current, {
            controlsAboveOverlay: true,
            preserveObjectStacking: true,
        });
    
        init({
            initialCanvas: canvas,
            initialContainer: containerRef.current!,
        });
    
        return () => {
            canvas.dispose();
        };
    }, [])

    return (
        <div className="h-full w-full bg-[#f0f1f5] dark:bg-[#0d1216]">
            <Header/> 
            <div className="h-[calc(100%-8rem)] md:h-[calc(100%-3.5rem)] flex">
                <Sidebar
                    activeTool={activeTool}
                    onChangeActiveTool={onChangeActiveTool}
                />
                <div className="w-full md:w-[calc(100%-72px)] h-full">
                    <div className="w-full h-full flex flex-row">
                        <TextTool
                            editor={editor}
                            activeTool={activeTool}
                            onChangeActiveTool={onChangeActiveTool}
                        />
                        <DesignTool
                            editor={editor}
                            activeTool={activeTool}
                            onChangeActiveTool={onChangeActiveTool}
                        />
                        <ElementsTool
                            editor={editor}
                            activeTool={activeTool}
                            onChangeActiveTool={onChangeActiveTool}
                        />
                        <UploadTool
                            editor={editor}
                            activeTool={activeTool}
                            onChangeActiveTool={onChangeActiveTool}
                        />
                        <ProjectsTool
                            editor={editor}
                            activeTool={activeTool}
                            onChangeActiveTool={onChangeActiveTool}
                        />
                        <div className={cn(
                            "w-full h-full relative",
                            (activeTool != "SELECT" && activeTool != "DRAW") && "md:w-[calc(100%-20rem)]"
                        )}>
                            <Draw
                                activeTool={activeTool}
                                onClose={()=>setActiveTool("SELECT")}
                            />
                            <main className="h-full md:h-[calc(100%-2.5rem)] w-full relative overflow-y-auto">
                                <div className="flex-1 h-full pt-12" ref={containerRef}>
                                    <canvas className="shadow-lg" ref={canvasRef} />
                                </div>
                            </main>
                            <footer className="hidden md:block h-10 w-full">

                            </footer>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

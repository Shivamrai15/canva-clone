"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Loader2, TriangleAlert } from "lucide-react";
import { Editor } from "@/components/editor/components/editor";
import { useGetProject } from "@/components/design/hooks/use-get-design";


interface DesignPageProps {
    params : {
        designId: string;
    }
}

const DesignPage = ({
    params
}: DesignPageProps) => {
    
    const { data, isError, isLoading } = useGetProject(params.designId);
    
    if (isLoading || !data) {
        return (
            <div className="h-full flex flex-col items-center justify-center">
                <Loader2 className="size-6 animate-spin text-muted-foreground" />
            </div>
        );
    }

    if (isError) {
        return (
            <div className="h-full flex flex-col gap-y-5 items-center justify-center">
                <TriangleAlert className="size-6 text-muted-foreground" />
                <p className="text-muted-foreground text-sm">
                    Failed to fetch project
                </p>
                <Button asChild variant="secondary">
                    <Link href="/">
                        Back to Home
                    </Link>
                </Button>
            </div>
        );
    }
    
    return (
        <Editor data={data} />
    )
}

export default DesignPage;
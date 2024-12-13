import { useQuery } from "@tanstack/react-query";
import { ProjectResponse } from "@/types";


const fetcher = async (projectId: string) : Promise<ProjectResponse> => {
    const response = await fetch(`/api/v1/design/${projectId}`);
    if (!response.ok) {
        throw new Error("Failed to fetch design");
    }
    return response.json();
}


export const useGetProject = ( id: string )=>{
    return useQuery<ProjectResponse, Error>({
        enabled : !!id,
        queryKey : ['project', {id}],
        queryFn : ()=>fetcher(id),
    });
}
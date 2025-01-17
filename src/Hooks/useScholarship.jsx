import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useScholarship = () => {
    const axiosPublic = useAxiosPublic();
    const { refetch, data: scholarships = [], isLoading, } = useQuery({
        queryKey: ['scholarships'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/scholarships`)
            return res.data;
        }
    })
    return [scholarships, refetch, isLoading]
};

export default useScholarship;




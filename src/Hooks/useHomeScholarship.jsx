import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useHomeScholarship = () => {
    const axiosPublic = useAxiosPublic();
    const { refetch, data: scholarship = [], isLoading, } = useQuery({
        queryKey: ['scholarship'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/homeScholarships`)
            return res.data;
        }
    })
    return [scholarship, refetch, isLoading]
};

export default useHomeScholarship;




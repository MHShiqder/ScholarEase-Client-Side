import { useParams } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const DetailsPage = () => {
    const {id}=useParams()
    const axiosSecure = useAxiosSecure()
    const { refetch, data: scholarship = {}, isLoading, } = useQuery({
        queryKey: ['scholarship'],
        queryFn: async () => {
            const result = await axiosSecure.get(`/scholarship/${id}`)
            return result.data;
        }

    })
    return (
        <div>
            asssssss
        </div>
    );
};

export default DetailsPage;
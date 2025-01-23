import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useRole = () => {
    const { user,loading } = useAuth()
    const axiosSecure = useAxiosSecure()
    const { refetch, data: singleUser={},isLoading } = useQuery({
        queryKey: ["singleUser",user?.email],
        enabled:!loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/${user?.email}`)
            return res.data;
        }

    })

    return [singleUser,refetch,isLoading,]
};

export default useRole;
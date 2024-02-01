import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const useMovies = () => {
    const { data:movies=[],isLoading,isPending } = useQuery({
        queryKey: ["movies"],
        queryFn: async () => {
            const res = await axios.get("https://api.tvmaze.com/search/shows?q=all")
            return res.data;
        }
    })
return {movies,isLoading,isPending}
};

export default useMovies;
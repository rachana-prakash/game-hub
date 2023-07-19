import apiClient, { FetchResponse } from "../services/api-client";
import { Platform } from "./useGames";
import { useQuery } from "@tanstack/react-query";
const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24h,
  });

export default usePlatforms;

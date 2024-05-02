import { me } from "@/service/auth";
import { User } from "@/service/schema/user";
import { UseQueryOptions, useQueries } from "@tanstack/react-query";

type UseUserQuery = UseQueryOptions<User>[];

export function useUser() {
  const [{ data, ...rest }] = useQueries<UseUserQuery>({
    queries: [
      {
        queryKey: ["me"],
        queryFn: me,
        staleTime: Infinity,
      },
    ],
  });

  return {
    user: data,
    ...rest,
  };
}

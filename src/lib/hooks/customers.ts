import { useQuery } from "@tanstack/react-query";
import { FirestoreTransformer } from "../../utils/transformData";
import UsersApi from "../../api/users";
const usersApi = new UsersApi();

export function useCustomers() {
  return useQuery<any, Error>({
    queryKey: ["users"],
    queryFn: () =>
      usersApi
        .getAll()
        .then((response) =>
          FirestoreTransformer.transformFirebaseData(response.data.documents)
        ),
  });
}

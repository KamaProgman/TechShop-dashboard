import { useQuery } from "@tanstack/react-query";
import UsersApi from "../../api/users"
import { IdType } from "../../types";
import { FirestoreTransformer } from "../../utils/transformData";

export function useUser(userId: IdType) {
  return useQuery<any, Error>({
    queryKey: ["users"],
    queryFn: () => UsersApi.getUser(userId).then(response => FirestoreTransformer.transformDocument(response.data))
  })
}
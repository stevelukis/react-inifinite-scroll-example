import axios from "axios";
import { useInfiniteQuery } from "@tanstack/react-query";

export interface Product {
  id: number;
  title: string;
  price: number;
  images: string[];
}

interface FetchResponse {
  products: Product[];
  skip: number;
}

const PAGE_SIZE = 30;

const useProducts = () =>
  useInfiniteQuery({
    queryKey: ["products"],
    queryFn: ({ pageParam = 1 }) =>
      axios
        .get<FetchResponse>("https://dummyjson.com/products", {
          params: {
            skip: (pageParam - 1) * PAGE_SIZE,
          },
        })
        .then((res) => res.data.products),
    getNextPageParam: (lastPage, allPages) =>
      lastPage.length === 0 ? undefined : allPages.length + 1,
  });

export default useProducts;

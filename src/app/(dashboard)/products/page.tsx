"use client";
import MetricsSection from "@/app/components/metricsSection";
import SearchBar from "@/app/components/searchBar";
import CustomTable from "@/app/components/table";
import { productsColums } from "@/app/components/table/columns";
import { Product, User } from "@/services/utils/interfaces";
import { images } from "@/theme";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "antd";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";

const Products = () => {
  const [searchParam, setSearchParams] = useState("");
  const [filteredData, setFilteredData] = useState<Product[]>([]);

  const { data: products, isLoading: isLoadingUsers } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: async () => {
      try {
        const response = await axios(
          "https://dummyjson.com/products"
        );
        
        const modifyProduct = response.data?.products.map((product: Product) => ({
          ...product,
          status: Math.random() < 0.4 ? "In Stock" : "Out of Stock",
        }));
      
        return modifyProduct ?? [];
      } catch (error) {
        return [];
      }
    },
  });

  const OnchangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const searchText = e.target.value;
    setSearchParams(searchText);

    const theFilterData =
      products &&
      products.filter((value, _) =>
        Object.values(value)
          .join("")
          .toLowerCase()
          .includes(searchText.toLowerCase())
      );
    setFilteredData(theFilterData || []);
  };

  const RealdataSource = searchParam ? filteredData : products;

  return (
    <div>
      {isLoadingUsers ? (
        <Skeleton />
      ) : (
        <div>
          {/* metrics card  */}
          <MetricsSection
            firstCardCopy="Total Product"
            firstCardValue={products?.length?.toString() || ""}
            secondCardCopy="Members"
            secondCardValue="1,893"
            thirdCardCopy="In Stock"
            thirdCardValue="189"
          />

          <div className="bg-[#FFFFFF]! rounded-[30px] shadowX p-[30px] mt-10 ">
            <div className="flex md:flex-row flex-col justify-start items-start md:justify-between md:items-center mb-6">
              <div>
                <p className="text-[#000000] font-semibold  text-[22px]  ">
                  All Product
                </p>
                <p className="text-[#16C098] font-normal  text-[14px] mt-1.5 ">
                  Available Product
                </p>
              </div>

              <div className="flex md:justify-end justify-start items-center gap-4 ">
                <SearchBar isfilter onChange={OnchangeHandler} />
                <div className="rounded-[10px] bg-[#F9FBFF] px-[15px] py-2.5 flex justify-center items-center gap-[7px] text-nowrap! ">
                  <p className="text-[#7E7E7E] text-[12px] font-normal ">
                    Short by :{" "}
                    <span className="font-semibold text-black">Newest</span>{" "}
                  </p>
                  <Image src={images.downcaret} alt="" width={18} height={18} />
                </div>
              </div>
            </div>

            <CustomTable data={RealdataSource ?? []} columns={productsColums} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;

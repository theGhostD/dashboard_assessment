"use client";
import MetricsSection from "@/app/components/metricsSection";
import SearchBar from "@/app/components/searchBar";
import CustomTable from "@/app/components/table";
import { usersColums } from "@/app/components/table/columns";
import { User } from "@/services/utils/interfaces";
import { images } from "@/theme";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "antd";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";

const Customers = () => {
  const [searchParam, setSerachParams] = useState("");
  const [filteredData, setFilteredData] = useState<User[]>([]);

  const { data: Users, isLoading: isLoadingUsers } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: async () => {
      try {
        const response = await axios(
          "https://jsonplaceholder.typicode.com/users"
        );
        const usersWithStatus = response.data.map((user: User) => ({
          ...user,
          status: Math.random() < 0.4 ? "Active" : "Inactive",
        }));
        console.log(usersWithStatus, "usersWithStatus");
        return usersWithStatus ?? [];
      } catch (error) {
        return [];
      }
    },
  });

  const OnchangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const searchText = e.target.value;
    setSerachParams(searchText);

    const theFilterData =
      Users &&
      Users.filter((value, _) =>
        Object.values(value)
          .join("")
          .toLowerCase()
          .includes(searchText.toLowerCase())
      );
    setFilteredData(theFilterData || []);
  };

  const RealdataSource = searchParam ? filteredData : Users;

  return (
    <div>
      {isLoadingUsers ? (
        <Skeleton />
      ) : (
        <div>
          {/* metrics card  */}
          <MetricsSection
            firstCardCopy="Total Customers"
            firstCardValue={Users?.length?.toString() || ""}
            secondCardCopy="Members"
            secondCardValue="1,893"
            thirdCardCopy="Active Now"
            thirdCardValue="189"
          />

          <div className="bg-[#FFFFFF]! rounded-[30px] shadowX p-[30px] mt-10 ">
            <div className="flex md:flex-row flex-col justify-start items-start md:justify-between md:items-center mb-6">
              <div>
                <p className="text-[#000000] font-semibold  text-[22px]  ">
                  All Customers
                </p>
                <p className="text-[#16C098] font-normal  text-[14px] mt-1.5 ">
                  Active Members
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

            <CustomTable data={RealdataSource ?? []} columns={usersColums} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Customers;

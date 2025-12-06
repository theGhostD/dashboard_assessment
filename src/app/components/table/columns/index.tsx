export const usersColums = [
  {
    title: (
      <p className="text-[#B5B7C0] text-[14px]  font-medium ">Customer Name</p>
    ),
    dataIndex: "name",
    key: "name",
    render: (record: string) => (
      <p className={`  text-sm text-[#292D32] leading-[21px] font-medium `}>
        {record}
      </p>
    ),
  },

  {
    title: <p className="text-[#B5B7C0] text-[14px]  font-medium ">Company</p>,
    dataIndex: "company",
    key: "company",
    render: (record: any) => (
      <p className={`  text-sm text-[#292D32] leading-[21px] font-medium `}>
        {record?.name}
      </p>
    ),
  },

  {
    title: (
      <p className="text-[#B5B7C0] text-[14px]  font-medium ">Phone Number</p>
    ),
    dataIndex: "phone",
    key: "phone",
    render: (record: string) => (
      <p className={`  text-sm text-[#292D32] leading-[21px] font-medium `}>
        {record?.split(" ")[0]}
      </p>
    ),
  },

  {
    title: <p className="text-[#B5B7C0] text-[14px]  font-medium ">Email</p>,
    dataIndex: "email",
    key: "email",
    render: (record: string) => (
      <p className={`  text-sm text-[#292D32] leading-[21px] font-medium `}>
        {record}
      </p>
    ),
  },

  {
    title: <p className="text-[#B5B7C0] text-[14px]  font-medium ">Country</p>,
    dataIndex: "address",
    key: "address",
    render: (record: any) => (
      <p className={`  text-sm text-[#292D32] leading-[21px] font-medium `}>
        {record?.city}
      </p>
    ),
  },
  {
    title: <p className="text-[#B5B7C0] text-[14px]  font-medium ">Status</p>,
    dataIndex: "status",
    key: "status",
    render: (record: string) => (
      <p
        className={` ${
          record === "Active"
            ? "text-[#008767] border-[#00B087] bg-[#16C09861]"
            : "text-[#DF0404] border-[#DF0404] bg-[#FFC5C5]"
        }  text-sm  font-medium w-20 h-[29px] border flex justify-center items-center `}
      >
        {record}
      </p>
    ),
  },
];
export const productsColums = [
  {
    title: (
      <p className="text-[#B5B7C0] text-[14px]  font-medium ">Product Name</p>
    ),
    dataIndex: "title",
    key: "title",
    render: (record: string) => (
      <p className={`  text-sm text-[#292D32] leading-[21px] font-medium `}>
        {record}
      </p>
    ),
  },

  {
    title: <p className="text-[#B5B7C0] text-[14px]  font-medium ">Brand</p>,
    dataIndex: "brand",
    key: "brand",
    render: (record: string) => (
      <p className={`  text-sm text-[#292D32] leading-[21px] font-medium `}>
        {record || '-'}
      </p>
    ),
  },

  {
    title: (
      <p className="text-[#B5B7C0] text-[14px]  font-medium ">Category</p>
    ),
    dataIndex: "category",
    key: "category",
    render: (record: string) => (
      <p className={`  text-sm text-[#292D32] leading-[21px] font-medium capitalize `}>
        {record}
      </p>
    ),
  },

  {
    title: <p className="text-[#B5B7C0] text-[14px]  font-medium ">Price</p>,
    dataIndex: "price",
    key: "price",
    render: (record: string) => (
      <p className={`  text-sm text-[#292D32] leading-[21px] font-medium `}>
        ${record}
      </p>
    ),
  },

  {
    title: <p className="text-[#B5B7C0] text-[14px]  font-medium ">SKU</p>,
    dataIndex: "sku",
    key: "sku",
    render: (record: any) => (
      <p className={`  text-sm text-[#292D32] leading-[21px] font-medium `}>
        {record}
      </p>
    ),
  },
  {
    title: <p className="text-[#B5B7C0] text-[14px]  font-medium ">Status</p>,
    dataIndex: "status",
    key: "status",
    render: (record: string) => (
      <p
        className={` ${
          record === "In Stock"
            ? "text-[#008767] border-[#00B087] bg-[#16C09861]"
            : "text-[#DF0404] border-[#DF0404] bg-[#FFC5C5]"
        }  text-sm  font-medium min-w-20 px-1 h-[29px] border flex justify-center items-center text-nowrap `}
      >
        {record}
      </p>
    ),
  },
];

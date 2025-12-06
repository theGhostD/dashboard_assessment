import { Table } from "antd";
import { ColumnsType } from "antd/es/table";

interface tableProps {
  data: any[];
  columns: ColumnsType<any>;
}

const CustomTable = ({ data, columns }: tableProps) => {
  return (
    <Table
      size="large"
      scroll={{ x: "max-content" }}
      columns={columns}
      dataSource={data}
      rowKey={(record) => record?.id}
      // pagination={false}
      rowClassName={"cursor-pointer"}
    />
  );
};

export default CustomTable;

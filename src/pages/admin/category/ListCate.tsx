import { ColumnsType } from 'antd/lib/table';
import React, { useState } from 'react'
import { FaEdit, FaPlus } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import useCategory from '../../../hooks/useCategory'
import { Button, Result, Spin, Switch, Table } from "antd"
import { StyledAddButton, StyledAdminHeadline, StyledSpace } from '../../../components/styled-components';
import CategoryForm from '../../../components/CategoryForm';

type Props = {}
interface DataType {
  _id: string;
  name: string;
  status: number
}
const ListCate = (props: Props) => {
  const [id, setId] = useState("");
  const { data, error, updateCategory } = useCategory();
  const updateStatus = (id: string, status: any) => { updateCategory(id, status) }
  const columns: ColumnsType<DataType> = [
    {
      title: 'Tên danh mục',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Ẩn/hiện',
      dataIndex: 'status',
      key: 'status',
      render: (_, record) => <Switch checked={record.status ? true : false} onClick={() => { updateStatus(record._id, { status: !record.status ? 1 : 0 }) }}></Switch>
    },
    {
      title: 'Thao tác',
      key: 'action',
      render: (_, record) => <Link to={`/admin/category/edit/${record._id}`}><FaEdit /></Link>
    },
  ];
  if (error) return <Result
    status="warning"
    title="There are some problems with your operation."
    extra={
      <Button type="primary" key="console" onClick={() => { window.location.reload() }}>
        Tải lại
      </Button>
    }
  />;
  if (!data) return <StyledSpace >
    <Spin size="large" />
  </StyledSpace>;

  const cateData = data.map((item: DataType, index: number) => {
    return {
      key: index,
      name: item.name,
      status: item.status,
      _id: item._id
    }
  })
  return (
    <>
      <div style={{ "display": "flex", "justifyContent": "space-between", "alignItems": "center" }}>
        <StyledAdminHeadline>
          Danh mục
        </StyledAdminHeadline>
      </div>
      <CategoryForm id={id} />
      <Table columns={columns} dataSource={cateData} size='small' />
    </>
  )
}

export default ListCate
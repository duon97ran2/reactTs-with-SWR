import { Button, message, Result, Space, Spin, Switch, Table } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import React from 'react'
import { FaEdit, FaPlus } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { StyledAddButton, StyledAdminHeadline, StyledSpace } from '../../../components/styled-components'
import useProduct from '../../../hooks/useProduct'


type Props = {}
interface DataType {
  _id: string,
  name: string,
  status: number,
  image: Array<string>,
  // category: string,
  // price: number,
  newPrice: number,
  // shortDescription: string
}
const ListPhone = (props: Props) => {
  const { data, error, productUpdate } = useProduct()
  const updateStatus = (id: string, status: any) => { productUpdate(id, status) }
  const columns: ColumnsType<DataType> = [
    {
      title: 'Tên sản phẩm',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Hình ảnh',
      dataIndex: 'image',
      key: 'image',
      render: (_, record) => <img width={200} src={record.image[0]} alt="" />
    },
    // {
    //   title: 'Danh mục',
    //   dataIndex: 'category',
    //   key: 'category',
    // },
    // {
    //   title: 'Giá sản phẩm',
    //   dataIndex: 'price',
    //   key: 'price',
    // },
    {
      title: 'Thành tiền ',
      dataIndex: 'newPrice',
      key: 'newPrice',
    },
    {
      title: 'Mô tả ',
      dataIndex: 'shortDescription',
      key: 'shortDescription',
    },
    {
      title: 'Ẩn/hiện',
      dataIndex: 'status',
      key: 'status',
      render: (_, record) => <Switch checked={!record.status ? true : false} onClick={() => { updateStatus(record._id, { status: !record.status ? 1 : 0 }) }}></Switch>
    },
    {
      title: 'Thao tác',
      key: 'action',
      render: (_, record) => <Link to={`/admin/cellphone/edit/${record._id}`}><FaEdit /></Link>
    },
  ];
  const navigate = useNavigate();
  if (!data) {
    return <StyledSpace >
      <Spin size="large" />
    </StyledSpace>
  }
  if (error) {
    return <Result
      status="warning"
      title="There are some problems with your operation."
      extra={
        <Button type="primary" key="console" onClick={() => { window.location.reload() }}>
          Tải lại
        </Button>
      }
    />
  }
  const newData = data?.filter((item: any) => item.category.status == 1);
  console.log(newData);
  const productData = newData.map((item: any, index: number) => {
    return {
      key: index + 1,
      name: item.name,
      // price: item.price,
      newPrice: item.newPrice,
      _id: item._id,
      image: item.image,
      shortDescription: item.shortDescription,
      status: item.status,
      // category: item.category.name
    }
  })
  return (
    <>
      <div style={{ "display": "flex", "justifyContent": "space-between", "alignItems": "center", "marginBottom": "20px" }}>
        <StyledAdminHeadline>
          Điện thoại
        </StyledAdminHeadline>
        <StyledAddButton onClick={() => navigate("/admin/cellphone/create")}>
          <FaPlus />
        </StyledAddButton>
      </div>
      <Table columns={columns} dataSource={productData} size='small' />
    </>
  )
}

export default ListPhone
import React, { useEffect, useState } from 'react'
import { Button, Col, Menu, MenuProps, Result, Row, Spin } from 'antd';
import { AiOutlineMail, AiOutlineRight } from 'react-icons/ai';
import banner from "../../assets/img/Rectangle.png"
import ProductPanel from '../../components/ProductPanel';
import { Footer } from 'antd/lib/layout/layout';
import AppFooter from '../../components/Footer';
import useCategory from '../../hooks/useCategory';
import { Link, useParams } from 'react-router-dom';
import { StyledSpace } from '../../components/styled-components';
import useProduct from '../../hooks/useProduct';
import useSWR, { mutate, useSWRConfig } from 'swr';

type MenuItem = Required<MenuProps>['items'][number];

type Props = {}

const Home = (props: Props) => {
  const { data: productData, error: productError } = useSWR("/products/home");
  const { data, error } = useCategory();
  const [category, setCategory] = useState([]);
  const generateRandomColor = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  }
  const [tiles, setTiles] = useState<Array<any>>([]);
  useEffect(() => {
    if (data) {
      const categoryList = data.map((item: any) => {
        return {
          key: item._id,
          label: (
            <Link style={{ "display": "flex", "justifyContent": "space-between", "alignItems": "center" }} to={`/category/${item._id}`}> <span>{item.name}</span> <AiOutlineRight /></Link>
          ),
        }
      });
      setCategory(categoryList);
    }
  }, [])
  useEffect(() => {
    let arr = []
    for (let i = 0; i < 20; i++) {
      let item = { id: i, name: "Phụ kiện Apple", color: generateRandomColor(), image: "https://s3-alpha-sig.figma.com/img/17d0/f3ac/9197a48bcbf5b568b402ae906b5e132c?Expires=1660521600&Signature=T1eGH45FVAQ49KWnl9RjQp8LL0N~Tp25uR-zXAyBZQX-5-ewSc~9enzelSCl~9DLislsegtxSnle79wE2uV9qYfMqzC82~wDAjeosewr0pQfg6gXkiu4IXyVyXAdsnJ-Lmgukg4e2IGDkCqDePaEYmgQlF-Y41Z~rAETGSLGWoiZ4OgJmQH8TIDwU-96Som71vKYsz8gt1~4MqaW~H7wP9cycECwqTIbbm3uPW7HWXGq547LspfL3oLKhl4Ca9EEMo0QjmXmS6uDS60ZrYB~nV6BLNyLpzE5gBGKShOyzh2cJ6xWx~oiBIjt74rYyVAKO9RLXCpI068Juglbh0c-Dg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" }
      arr.push(item);
    }
    setTiles(arr);
  }, [])

  if (!productData || !data) {
    return <StyledSpace >
      <Spin size="large" />
    </StyledSpace>
  }
  if (productError || error) {
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
  // const items: MenuItem[] = [
  //   getItem('Navigation One', 'sub1', <AiOutlineMail />,
  //     [
  //       getItem('Item 1', null, null, [getItem('Option 1', '1'), getItem('Option 2', '2')], 'group'),
  //       getItem('Item 2', null, null, [getItem('Option 3', '3'), getItem('Option 4', '4')], 'group'),
  //     ]
  //   ),
  //   getItem('Navigation Two', 'sub22', <AiOutlineMail />,
  //     [
  //       getItem('Item 1', null, null, [getItem('Option 2', '2'), getItem('Option 2', '2')], 'group'),
  //       getItem('Item 2', null, null, [getItem('Option 4', '4'), getItem('Option 4', '4')], 'group'),
  //     ]
  //   ),
  //   getItem('Navigation Two', 'sub5', <AiOutlineMail />,
  //     [
  //       getItem('Item 1', null, null, [getItem('Option 5', '5'), getItem('Option 2', '2')], 'group'),
  //       getItem('Item 2', null, null, [getItem('Option 7', '7'), getItem('Option 4', '4')], 'group'),
  //     ]
  //   ),
  //   getItem('Navigation Two', 'sub2', <AiOutlineMail />,
  //     [
  //       getItem('Item 1', null, null, [getItem('Option 8', '8'), getItem('Option 2', '2')], 'group'),
  //       getItem('Item 2', null, null, [getItem('Option 9', '9'), getItem('Option 4', '4')], 'group'),
  //     ]
  //   ),
  //   getItem('Navigation Two', 'sub3', <AiOutlineMail />,
  //     [
  //       getItem('Item 1', null, null, [getItem('Option 10', '10'), getItem('Option 2', '2')], 'group'),
  //       getItem('Item 2', null, null, [getItem('Option 13', '13'), getItem('Option 4', '4')], 'group'),
  //     ]
  //   ),
  //   getItem('Navigation Two', 'sub4', <AiOutlineMail />,
  //     [
  //       getItem('Item 1', null, null, [getItem('Option 1', '1'), getItem('Option 2', '2')], 'group'),
  //       getItem('Item 2', null, null, [getItem('Option 3', '3'), getItem('Option 4', '4')], 'group'),
  //     ]
  //   ),
  // ];
  return (
    <div>
      <div style={{ "display": "grid", "gridTemplateColumns": "0.5fr auto", "gap": '20px', "margin": "10px 0px" }}>
        <Menu style={{ width: 256 }} mode="vertical"
          items={category}
        />
        {/* <Menu style={{ width: 256 }} mode="vertical" items={items} /> */}
        <img src={banner} alt="" width={"100%"} />
      </div>
      <h4>ĐIỆN THOẠI NỔI BẬT NHẬT</h4>
      <ProductPanel products={productData.product} />
      <h4>Phụ kiện</h4>
      <Row justify='start' >
        {
          tiles.map((item: any) => <Col key={item.id} span={2} style={{
            "backgroundColor": item.color, "color": "white", "margin": "5px", "borderRadius": "5px", "textAlign": "center"
          }}>{item.name}  <img style={{ "width": "100% ", "objectFit": "contain", "padding": "10px", "objectPosition": "center" }} src={item.image} alt="" /></Col>)
        }
      </Row>
      <h4>Link kiện máy tính</h4>
      <Row justify='start' >
        {
          tiles.slice(0, 9).map((item: any) => <Col key={item.id} span={2} style={{
            "backgroundColor": item.color, "color": "white", "margin": "5px", "borderRadius": "5px", "textAlign": "center"
          }}>{item.name}  <img style={{ "width": "100% ", "objectFit": "contain", "padding": "10px", "objectPosition": "center" }} src={item.image} alt="" /></Col>)
        }
      </Row>
    </div>
  )
}

export default Home
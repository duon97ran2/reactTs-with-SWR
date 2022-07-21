import React from 'react'
import SideNav from '../../components/SideNav'
import { Menu, MenuProps } from 'antd';
import { AiOutlineMail } from 'react-icons/ai';
import banner from "../../assets/img/Rectangle.png"

type MenuItem = Required<MenuProps>['items'][number];

type Props = {}

const Home = (props: Props) => {
  function getItem(
    label: React.ReactNode,
    key?: React.Key | null,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
      type,
    } as MenuItem;
  };
  const items: MenuItem[] = [
    getItem('Navigation One', 'sub1', <AiOutlineMail />,
      [
        getItem('Item 1', null, null, [getItem('Option 1', '1'), getItem('Option 2', '2')], 'group'),
        getItem('Item 2', null, null, [getItem('Option 3', '3'), getItem('Option 4', '4')], 'group'),
      ]
    ),
    getItem('Navigation Two', 'sub22', <AiOutlineMail />,
      [
        getItem('Item 1', null, null, [getItem('Option 2', '2'), getItem('Option 2', '2')], 'group'),
        getItem('Item 2', null, null, [getItem('Option 4', '4'), getItem('Option 4', '4')], 'group'),
      ]
    ),
    getItem('Navigation Two', 'sub5', <AiOutlineMail />,
      [
        getItem('Item 1', null, null, [getItem('Option 5', '5'), getItem('Option 2', '2')], 'group'),
        getItem('Item 2', null, null, [getItem('Option 7', '7'), getItem('Option 4', '4')], 'group'),
      ]
    ),
    getItem('Navigation Two', 'sub2', <AiOutlineMail />,
      [
        getItem('Item 1', null, null, [getItem('Option 8', '8'), getItem('Option 2', '2')], 'group'),
        getItem('Item 2', null, null, [getItem('Option 9', '9'), getItem('Option 4', '4')], 'group'),
      ]
    ),
    getItem('Navigation Two', 'sub3', <AiOutlineMail />,
      [
        getItem('Item 1', null, null, [getItem('Option 10', '10'), getItem('Option 2', '2')], 'group'),
        getItem('Item 2', null, null, [getItem('Option 13', '13'), getItem('Option 4', '4')], 'group'),
      ]
    ),
    getItem('Navigation Two', 'sub4', <AiOutlineMail />,
      [
        getItem('Item 1', null, null, [getItem('Option 1', '1'), getItem('Option 2', '2')], 'group'),
        getItem('Item 2', null, null, [getItem('Option 3', '3'), getItem('Option 4', '4')], 'group'),
      ]
    ),
  ];
  return (
    <div>
      <div style={{ "display": "grid", "gridTemplateColumns": "0.5fr auto", "gap": '20px', "margin": "10px 0px" }}>
        <Menu style={{ width: 256 }} mode="vertical" items={items} />
        <img src={banner} alt="" width={"100%"} />
      </div>
    </div>
  )
}

export default Home
import { Badge, Row } from 'antd'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import useSWR from 'swr'
import { getSearchProduct } from '../api/product'
import { CurrencyConvert } from '../utils/common'
import { StyledSearchBar } from './styled-components'

type Props = {}

const SearchBar = (props: Props) => {
  const [search, setSearch] = useState<any>(null);
  const ref = useRef<any>(null);
  const debounce = (delay: any, fn: any) => {
    let timerId: any;
    return function (...args: any) {
      if (timerId) {
        clearTimeout(timerId);
      }
      timerId = setTimeout(() => {
        fn(...args);
        timerId = null;
      }, delay)
    }
  }
  const handleChange = async (event: any) => {
    if (!event.target.value) {
      setSearch(null)
    }
    else {
      await getSearchProduct(event.target.value).then((res: any) => { setSearch(res.filter((item: any) => item.status == 0)) }).catch(err => console.log(err)
      )
    }
  }
  const navigate = useNavigate();
  const optimiseSearch = useCallback(debounce(500, handleChange), []);
  return (
    <StyledSearchBar>
      <FaSearch />
      <input type="text" ref={ref} onChange={optimiseSearch} placeholder='Tìm kiếm' />
      <div className='result'>
        {(search?.length != 0) ? search?.map(((item: any, i: number) => <div key={i} onClick={() => { navigate(`/products/${item._id}`); ref.current.value = null; setSearch(null) }} className="result-item">
          <img src={item.image[0]} alt="" />
          <div>
            <h5 >{item.name}</h5>
            <div style={{ "marginBottom": "20px", "display": "block", "width": "100%" }}>
              <span style={{ "color": "#D70018", "marginRight": "5px", "fontSize": "18px" }}>{CurrencyConvert(item.newPrice)}</span>
              <span style={{ "color": "gray", "fontSize": "16px" }}> {CurrencyConvert(item.price)}</span>
              <Badge style={{ "backgroundColor": "#D70018", "padding": "5px", "color": "white", "marginLeft": "10px", "borderRadius": "5px" }} count={<span> Giảm {Math.floor(100 * (1 - +item.newPrice / +item.price))}%</span>}></Badge>
            </div>
          </div>
        </div>)) : <span>Không tìm thấy kết quả</span>}
      </div>
    </StyledSearchBar>
  )
}

export default SearchBar
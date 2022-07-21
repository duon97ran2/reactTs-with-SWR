import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { StyledSearchBar } from './styled-components'

type Props = {}

const SearchBar = (props: Props) => {
  return (
    <StyledSearchBar>
      <FaSearch />
      <input type="text" />
    </StyledSearchBar>
  )
}

export default SearchBar
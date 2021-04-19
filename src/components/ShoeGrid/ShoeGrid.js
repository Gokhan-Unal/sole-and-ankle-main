import React from 'react'
import styled from 'styled-components/macro'

import SHOES from '../../data'
import ShoeCard from '../ShoeCard'

const ShoeGrid = () => {
  return (
    <Wrapper>
      {SHOES.map((shoe) => (
        <ShoeWrapper key={shoe.slug}>
          <ShoeCard key={shoe.slug} {...shoe} />
        </ShoeWrapper>
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));
  grid-gap: 32px;
  /* display: flex; */
  /* flex-wrap: wrap; */
  /* margin: -16px; // dont forget about negative margins */
  /* gap: 32px; */
`

const ShoeWrapper = styled.div`
  min-width: 275px;
  max-width: 450px;
  /* margin: 16px; */
  /* flex: 1; */
`

export default ShoeGrid

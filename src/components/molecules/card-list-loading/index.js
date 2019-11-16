import React from 'react'

import CardLoading from '_atoms/card-loading'

const cardArray = Array.from(
  {
    length: 40,
  },
  (v, i) => i
)

const CardListLoading = ({ dark }) => (
  <>
    {cardArray.map(item => (
      <CardLoading key={`card_${item}`} dark={dark} />
    ))}
  </>
)

export default CardListLoading

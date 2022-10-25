import React, { FC } from 'react'

type Props = {
  className?: string
}

const DownRight: FC<Props> = ({ className }): JSX.Element => {
  return (
    <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.92,12.62a1,1,0,0,0-.21-.33l-3-3a1,1,0,0,0-1.42,1.42L17.59,12H8a1,1,0,0,1-1-1V7A1,1,0,0,0,5,7v4a3,3,0,0,0,3,3h9.59l-1.3,1.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l3-3a1,1,0,0,0,.21-.33A1,1,0,0,0,20.92,12.62Z" />
    </svg>
  )
}

export default DownRight

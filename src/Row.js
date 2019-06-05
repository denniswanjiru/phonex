import React from 'react'

export default function Row({ data: { index, phone }, onClick, className }) {
  return (
    <div className={className ? 'row sticky' : 'row'}>
      <div>{index}</div>
      <div className="clickable" onClick={onClick}>{phone}</div>
    </div>
  )
}

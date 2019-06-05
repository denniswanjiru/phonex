import React from 'react'

export default function Row({ data: { index, phone }, onClick }) {
  return (
    <div className="row">
      <div>{index}</div>
      <div className="clickable" onClick={onClick}>{phone}</div>
    </div>
  )
}

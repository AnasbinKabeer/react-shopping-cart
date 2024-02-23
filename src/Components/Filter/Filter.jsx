import React from 'react'
import "./Filter.css"

function Filter(props) {
  return (
    <div className='filter'>
      <div className="filter-result">{props.count} Products</div>
      <div className="filter-sort">Order{" "}<select value={props.sort}
       onChange={props.sortProducts}>
        <option value="">Latest </option>
        <option value="lowest">Lowest </option>
        <option value="highest">Higest</option>
      </select>
      </div>
      <div className="filter-Size">Filter {" "}
      <select value={props.size} onChange={props.filterProducts}>
        <option value="">All Products</option>
        <option value="S">S</option>
        <option value="XL">XL</option>
        <option value="XLL">XLL</option>
        <option value="M">M</option>
        </select></div>

    </div>
  )
}

export default Filter

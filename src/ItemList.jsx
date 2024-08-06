import React from 'react';

import { FaTrashCan } from "react-icons/fa6";

const ItemList = ({items,handleCheck,handleDelete}) => {
  return (
    <ul>    
            {items.map((item) => (
            <li className="item " key={item.id}>
              <input
              type="checkbox" 
              onChange={() => handleCheck(item.id)}
              checked = {item.checked}
            />
              <label 
              style={(item.checked)?{textDecoration:'line-through'}:null}
               onDoubleClick={()=>handleCheck(item.id)}>{item.item}</label>
              < FaTrashCan
                role="button"
                onClick={()=> handleDelete(item.id)}
                tabindex="0"
                />
              </li>

          ))}
       </ul>
  )
}
export default ItemList

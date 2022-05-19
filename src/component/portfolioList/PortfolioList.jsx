import React from  'react'
import "./portfolioList.scss"  
 
 export default function PortfolioList({title,active,setSelected,id}) {
     return (
         <li
             onClick={() => setSelected(id)}
             className={active ? "list active":"list"}>
             {title}
         </li>
     )
 }
 
  
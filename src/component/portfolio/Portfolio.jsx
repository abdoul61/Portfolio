import React, { useState,useEffect} from 'react'
import PortfolioList from '../portfolioList/PortfolioList'
import "./Portfolio.scss"
import
    {
        featuredPortfolio,
        webPortfolio,
        mobilePortfolio,
        designPortfolio,
        contentPortfolio,
        list
    } from "../../data"

export default function Portfolio()
{
    
    
    const [selected, setSelected] = useState("feature");
    const [data, setData] = useState([]);

    useEffect(() =>
    {
        switch (selected)
        {
            case "feature":
                setData(featuredPortfolio)
                break;
            case "web":
                setData(webPortfolio);
                break;
            case "mobile":
                setData(mobilePortfolio);
                break;
            case "design":
                setData(designPortfolio);
                break;
            case "content":
                setData(contentPortfolio);
                break;
            default:
                setData(featuredPortfolio);
        } 
    },[selected])
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map((item) => (
                    <PortfolioList
                        key={item.id}
                        title={item.title}
                        id={item.id}
                        active={selected === item.id}
                        setSelected={setSelected}/>
                ))}
            </ul>

            <div className="container">
                {data.map((d)=>(
                    <div
                        key={d.title}
                        className="item">
                    <img src={d.img} alt="" />
                        <h3>{ d.title}</h3>
                    </div>
                    ))}
            </div>
           
        </div>
    )
}; 
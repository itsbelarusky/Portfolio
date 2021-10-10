import React, {useEffect, useState} from 'react';
import "./portfolio.scss"
import PortfolioList from "./portfoliolist/PortfolioList";
import {featurePortfolio, webPortfolio, layoutPortfolio, designPortfolio, contentPortfolio} from "../../data"


const Portfolio = () => {

    const [selected, setSelected] = useState("featured")
    const [data, setData] = useState([])

    const list = [
        {
            id: "featured",
            title: "Featured",
        },
        {
            id: "web",
            title: "Web App",
        },
        {
            id: "layout",
            title: "Layout",
        },
        {
            id: "design",
            title: "Design",
        },
        {
            id: "content",
            title: "Content",
        },

    ]

    useEffect(() => {
        switch (selected) {
            case "featured":
                setData(featurePortfolio);
                break;
            case "web":
                setData(webPortfolio);
                break;
            case "layout":
                setData(layoutPortfolio);
                break;
            case "design":
                setData(designPortfolio);
                break;
            case "content":
                setData(contentPortfolio);
                break;
            default:
                setData(featurePortfolio);

        }
    }, [selected])

    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map((item) => (
                    <PortfolioList title={item.title}
                                   active={selected === item.id}
                                   setSelected={setSelected}
                                   id={item.id}
                    />))}
            </ul>
            <div className="container">
                {data.map((d) => (
                    <div className="item">
                        <img src={d.img}/>
                        <h3><a href={d.src}>{d.title}</a></h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
import React from "react";
import Content from "../../components/item/Content";
import ViewButton from "./ViewButton";

function ContentSection({ headers, viewMore, setViewMore }) {
    return (
        <div className="contentSec">
            <h3 className="topTen">
                #top 10 for face
            </h3>
            <div className="itemSec">
                {viewMore ?
                    headers.map(item => (
                        <Content image={item.image} name={item.name} price={item.price} id={item.id} />))
                    :
                    headers.slice(0, 3).map(item => (
                        <Content image={item.image} name={item.name} price={item.price} id={item.id} />))}
            </div>
            <ViewButton onClick={() => setViewMore(!viewMore)} viewMore={viewMore} />
        </div>
    );
}

export default ContentSection;

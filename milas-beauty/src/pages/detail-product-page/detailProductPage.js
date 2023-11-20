import React, {useEffect, useState} from "react";
import "./detailProductPage.css"
import {Link, useParams} from "react-router-dom";
import Loader from "../../components/loader/loader";
import {getItemById} from "../catalog/api";

function DetailProductPage() {
    const {id} = useParams();
    const [item, setItem] = useState({id: 1, image: "", name: "Not found", price: 0});
    useEffect(() => {
        getItemById(id).then((res) => {
            setItem(res);
        })
    }, [id]);
    const [loading, setLoading] = useState(true);
    setTimeout(() => {
        setLoading(false);
    }, 1000)
    return (
        <>
            {
                loading ?
                    <Loader/>
                    :
                    <main className="productPage">
                        <section className="backLink">
                            <Link to={`/catalog`}><p>BACK</p></Link>
                        </section>
                        <img src={item.image} alt="product"/>
                        <div className="infoSide">
                            <h2>{item.name}</h2>
                            <div className="price">
                                <p>{item.price}$</p>
                            </div>
                            <button className="buyBtn">Buy</button>
                        </div>
                    </main>
            }
        </>
    );
}

export default DetailProductPage;

import React, {useEffect, useState} from "react";
import "./detailProductPage.css"
import {Link, useParams} from "react-router-dom";
import Loader from "../../components/loader/loader";
import {getItemById} from "../catalog/api";
import {useDispatch} from "react-redux";
import {addToCart} from "../store/itemSlice";


function DetailProductPage() {
    const dispatch = useDispatch();
    const handle = (id, image, name, price) => dispatch(addToCart({id, image, name, price, amount : itemCount}))
    const {id} = useParams();
    const [item, setItem] = useState({id: 1, image: "", name: "Not found", price: 0});
    useEffect(() => {
        getItemById(id).then((res) => {
            setItem(res);
        })
    }, [id]);
    const [loading, setLoading] = useState(true);
    const [itemCount, setItemCount] = useState(1);
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
                            <input type="number" id="count" placeholder="Type count" min = "1"
                                   onChange={(event) => {
                                       if (event.target.value > 0 ) {
                                           setItemCount(event.target.value)
                                       } else {
                                           event.target.value = 1
                                       }
                                   }}/>
                            <button className="buyBtn" onClick={() => handle(item.id, item.image, item.name, item.price)}>Buy</button>
                        </div>
                    </main>
            }
        </>
    );
}

export default DetailProductPage;

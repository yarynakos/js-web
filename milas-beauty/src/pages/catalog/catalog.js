import React, {useEffect, useState} from "react";
import Content from "../../components/item/Content";
import "./catalog.css";
import Loader from "../../components/loader/loader";
import {getItems} from "./api";

function Catalog() {
    const [items, setItems] = useState([]);
    const [request, setRequest] = useState('');
    const [isCheckedPrice, setIsCheckedPrice] = useState(false);
    const [isCheckedName, setIsCheckedName] = useState(false);
    useEffect(() => {
        getItems().then((res) => {
            setItems(res);
        })
    }, []);
    const [loading, setLoading] = useState(true);
    setTimeout(() => {
        setLoading(false);
    }, 1500)

    const sortByPrice = (arr) => {
        setIsCheckedName(false)
        setIsCheckedPrice(!isCheckedPrice)
        if (!isCheckedPrice) {
            return arr.sort((a, b) => {
                return b.price - a.price;
            });
        } else {
            getItems().then((res) => {
                setItems(res)
            })
        }
    };

    const sortByName = (arr) => {
        setIsCheckedPrice(false)
        setIsCheckedName(!isCheckedName)
        if (!isCheckedName) {
            return arr.sort((a, b) => {
                if (a.name.toUpperCase() > b.name.toUpperCase()) {
                    return 1;
                } else if (a.name.toUpperCase() < b.name.toUpperCase()) {
                    return -1;
                } else {
                    return 0;
                }
            });
        } else {
            getItems().then((res) => {
                setItems(res);
            })
        }
    };
    return (
        <>
            {
                loading ?
                    <Loader/>
                    :
                    <>
                        <div className="filterSec">
                            <div className="sortSec">
                                <h3>SORT BY:</h3>
                                <div className="sortInpt">
                                    <input type="checkbox" checked={isCheckedPrice} onClick={() => sortByPrice(items)}
                                           id="byPrice"/>
                                    <label htmlFor="byPrice">BY PRICE</label>
                                    <input type="checkbox" checked={isCheckedName} onClick={() => sortByName(items)}
                                           id="byName"/>
                                    <label htmlFor="byName">BY NAME</label>
                                </div>
                            </div>
                            <div className="searchSec">
                                <input type="text" id="search" placeholder="Search here..."
                                       onChange={(event) => setRequest(event.target.value)}/>
                            </div>
                        </div>
                        <div className="itemSection">
                            {items.filter((value) => {
                                if (request === "") {
                                    return value;
                                } else if (value.name.toLowerCase().includes(request.toLowerCase())) {
                                    return value;
                                }
                            }).map((item, id) => (
                                <Content image={item.image} name={item.name} price={item.price} id={item.id} key={id}/>))}
                        </div>
                    </>
            }
        </>
    );
}

export default Catalog;
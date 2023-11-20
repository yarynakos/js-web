import React, {useEffect, useState} from "react";
import "./homePage.css";
import background from "../../assets/images/homePage/elements_desktop_1441-2.png";
import ContentSection from "./ContentSection";
import Loader from "../../components/loader/loader";
import {getItems} from "../catalog/api";

function HomePage() {
    const [headers, setHeaders] = useState([]);
    useEffect(() => {
        getItems().then((res) => {
            setHeaders(res);
        })
    }, []);
    const [viewMore, setViewMore] = useState(false);
    const [loading, setLoading] = useState(true);
    setTimeout(() => {
        setLoading(false);
    }, 1500)

    return (
        <>
            {
                loading ?
                    <Loader/>
                    :
                    <main>
                        <div className="imageSec">
                            <img src={background} alt="" />
                        </div>
                        <div className="aboutSec">
                            <h2>The Elements</h2>
                            <p>
                                Інноваційні формули, ретельні розробки та лише високоефективні природні мінерали та
                                компоненти для вирішення проблем акне та постакне
                            </p>
                            <button className="selectBtl">Обрати баночку</button>
                        </div>

                        <ContentSection headers={headers} viewMore={viewMore} setViewMore={setViewMore} />

                        <section className="openingSec">
                            <h2>WE'RE OPENING</h2>
                            <p>Велика Васильківська, 49</p>
                        </section>
                    </main>
            }
        </>
    );
}

export default HomePage;

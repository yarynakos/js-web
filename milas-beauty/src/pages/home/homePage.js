import React, { useState } from "react";
import "./homePage.css";
import background from "../../assets/images/homePage/elements_desktop_1441-2.png";
import Content from "../../components/item/Content";
import ContentSection from "./ContentSection"; // Імпортуємо нову компоненту
import { getData } from "./data";

function HomePage() {
    const headers = getData();
    const [viewMore, setViewMore] = useState(false);

    return (
        <>
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
        </>
    );
}

export default HomePage;

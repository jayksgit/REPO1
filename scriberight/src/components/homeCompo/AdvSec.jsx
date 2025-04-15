import React from 'react'

export default function AdvSec() {
    return (

        <section className="advantage">
            <div className="container adv-container scroll">
                {/* <!-- Card 1 --> */}
                <div className="card crd-1 scroll-block">
                    <div className="icon">
                        {/* <!-- <span className="number">01</span> --> */}
                        <img src="adv01.png" alt="Icon 1"></img>
                    </div>
                    <p className="description">Real-time grip pressure sensing using the sensors attached to the pen’s grip</p>
                </div>

                {/* <!-- Card 2 --> */}
                <div className="card crd-2 scroll-block">
                    <p className="description">Personalized writing assistance using modern Machine Learning technology.</p>
                    <div className="icon">
                        {/* <!-- <span className="number">02</span> --> */}
                        <img src="adv02.png" alt="Icon 2"></img>
                    </div>
                </div>

                {/* <!-- Card 3 --> */}
                <div className="card crd-3 scroll-block">
                    <div className="icon">
                        {/* <!-- <span className="number">03</span> --> */}
                        <img src="adv03.png" alt="Icon 3"></img>
                    </div>
                    <p className="description">Progress reports and handwriting analysis shown graphically on the mobile interface.</p>
                </div>
            </div>
        </section>
    )
}

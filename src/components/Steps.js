import React from 'react'

const Steps = () => (
    <section className="section-steps" id="works">
        <div className="row">
            <h2>How it works &mdash; Simple as 1, 2, 3</h2>
        </div>
        <div className="row">
            <div className="col span-1-of-2 steps-box">
                <img src={require(`../assets/img/app-iPhone.png`)} alt="Omnifood app on iPhone" className="app-screen" />
            </div>
            <div className="col span-1-of-2 steps-box">
                <div className="works-step clearfix">
                    <div>1</div>
                    <p>Choose the subscription plan that best fits your needs and sign up today.</p>
                </div>
                <div className="works-step clearfix">
                    <div>2</div>
                    <p>Order your delicious meal using our mobile app or website. Or you can even call us!</p>
                </div>
                <div className="works-step clearfix">
                    <div>3</div>
                    <p>Enjoy your meal after less than 20 minutes. See you the next time!</p>
                </div>

                <a href="" className="btn-app"><img src={require(`../assets/img/download-app.svg`)} alt="App Store Button" /></a>
                <a href="" className="btn-app"><img src={require(`../assets/img/download-app-android.png`)} alt="Play Store Button" /></a>
            </div>
        </div>
    </section>
)

export default Steps
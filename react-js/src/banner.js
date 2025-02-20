import "./banner.css"
function Banner() {
    return (
        <div>
            <div id="banner">
                <div className="bannertxt">
                    <h1>Landing page template for developers & startups</h1>
                    <h2>Beautifully designed templates using React.js, ant design and styled-components! Save weeks of time and build your landing page in minutes.</h2>
                </div>
                <img src="https://landy-web.netlify.app/img/svg/developer.svg" alt="landy" width="500" height="500" />

            </div>
            <div id="bannerbtn">
                <button className="btn1">Explore</button>
                <button className="btn2">Learn more</button>
            </div>
            <div id="banner2">
                <h1>Introduce your product quickly & effectively</h1>
                <h2>
                    Landy comes with multi-lingual support, all of the content is stored in JSON files,
                    so that you can manage the texts without having any prior knowledge in developing
                    web applications using React.js.
                </h2>
                <button class="button">Get started</button>
            </div>
            <div id="banner3">
                <img src="https://landy-web.netlify.app/img/svg/graphs.svg" style={{ width: 500 }} alt="landy2" />
                <div id="banner-content">
                    <h1>Light, fast & responsive</h1>
                    <span>This template is ready to use, so you don't need to change anything at a component level, unless you want to customize the default styling.</span>
                    <div id="cards">
                        <div className="card1"><img src="https://landy-web.netlify.app/img/svg/notes.svg" alt="card1" />
                            <h5>Why Antd?</h5>
                            <p>Ant Design is a React UI library that has a lot of easy-to-use components for building elegant UI.</p>
                        </div>
                        <div className="card2">
                            <img src="https://landy-web.netlify.app/img/svg/notes.svg" alt="card2" />
                            <h5>Why styled-components?</h5>
                            <p>Styled Components gives you total control over your components.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="banner4">
                <div className="banner4-txt">
                    <h1>Ready made sections</h1>
                    <span>Landy comes with a set of ready to use sections to help you easily create a landing page for your own brand, with all the content your startup desires. In order to replace any dummy elements (text, image, etc..) all you need to do is go to content folder and input your real content.</span>
                </div>
                <img src="https://landy-web.netlify.app/img/svg/product-launch.svg" style={{ width: 500 }} alt="landy3" />
            </div>
            <div id="banner5">
                <img src="https://landy-web.netlify.app/img/svg/waving.svg" style={{ width: 500 }} alt="landy3" />
                <div className="banner5-txt">
                    <h1>That's about it!</h1>
                    <span>If you are familiar with React, or SPA frameworks in general, there shouldn't be any confusing parts about this template. if not, you can always reach out to me and I'll try me best to answer your questions.</span>
                </div>
            </div>
            <div id="banner6">
                <div id="contact">
                    <h1>Contact form</h1>
                    <p>The following form demonstrates form validation in action. Contact form component reduces the amount of time it is being re-rendered by the user as it embraces uncontrolled form validation to reduce any unnecessary performance penalty.
                    </p>
                </div>
                <div id="contact-info">
                    <form>
                        <label for="name">Name</label><br />
                        <input type="text" placeholder="Your Name" id="name" /><br />
                        <label for="email">Email</label><br />
                        <input type="text" placeholder="Your Email" id="email" /><br />
                        <label for="message">Message</label><br />
                        <input type="text" placeholder="Your Message" id="message" /><br />
                        <button className="btn">Submit</button>
                    </form>
                </div>
            </div>
            <div id="Footer">
                <div id="banner7">

                    <div id="contact-details">
                        <h2>Contact</h2>
                        <p>Tell us everything</p>
                        <span>Do you have any question? Feel free to reach out.</span>
                        <h3>Let's chat</h3>
                    </div>
                    <div id="Policy">
                        <h2>Policy</h2>
                        <p>Application Security</p>
                        <span>Software Principles</span>
                    </div>
                    <div id="info">
                        <p>Support Center</p>
                        <span> Customer Support</span>
                    </div>
                    <div id="address">
                        <h2>Address</h2>
                        <p>Rancho Santa Margarita
                            2131 Elk Street
                            California</p>
                    </div>
                    <div id="company">
                        <h2>Company</h2>
                        <p>About</p>
                        <p>Blog</p>
                        <p>Press</p>
                        <p>Careers&Culture</p>

                    </div>
                    <div id="Language">
                        <h2>Language</h2>
                        <img src="https://landy-web.netlify.app/img/svg/united-states.svg" alt="flag1" width="50" />
                        <img src="https://landy-web.netlify.app/img/svg/spain.svg" alt="flag2" width="50" />
                        
                    </div>
                  </div>  
                  <hr/>
                <div id="footer">
                    <h1>Landy</h1>
                    <div>
                    <img src="https://landy-web.netlify.app/img/svg/github.svg" alt="emoji1" width="30"/>
                    <img src="https://landy-web.netlify.app/img/svg/twitter.svg" alt="emoji2" width="30"/>
                    <img src="https://landy-web.netlify.app/img/svg/linkedin.svg" alt="emoji3" width="30"/>
                    <img src="https://landy-web.netlify.app/img/svg/medium.svg" alt="emoji4" width="30"/>
                    <button id="btn2">buy me a coffee</button>
                    </div>
                    

                
                </div>
            </div>
        </div>
    )
}
export default Banner;
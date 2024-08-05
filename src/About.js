import React from "react";
import AboutFirst from "./AboutFIrst";
import { logo1,logo2,logo3,logo4,logo5,logo6} from "./utils/constants";
import Yearcard from "./Yearcard";
import AboutCard from "./AboutCard";
const About = () => {
    return (
        <>
            <div className="aboutouter">
                <div className="aboutouter1">
                    <h1>Our mission</h1>
                    <h2>We're making homeownership simpler,faster<span>-</span> and most importantly,more accessible for all Americans.</h2>
                </div>
                <div className="aboutouter2">
                    <AboutFirst />
                </div>

            </div>
            <div className="aboutorder3">
                <div className="aboutheading">
                    <h1>How we're changing things</h1>
                </div>
                <div className="aboutcontent">
                    <p>Homeownership is a huge part of our economy. Housing overall is a $33 trillion business, and mortgages account for $15 trillion. Yet home finance operates in the same way it has for decades - through opaque systems and expensive intermediaries whose interests are misaligned with consumers.</p>
                    <p>That's why Better.com is redefining the homeownership process from the ground up. We're using technology to make it faster and more efficient, and humans to help make it friendly and enjoyable.</p>
                </div>
            </div>
            <div className="aboutcontainer">
                <h1>Backed by</h1>
                <div className="logos">
                    <div className="logo">
                        <img src={logo1 } alt="SoftBank logo" />
                    </div>
                    <div className="logo">
                        <img src={logo2 } alt="SoftBank logo" />
                    </div> 
                    <div className="logo">
                        <img src={ logo3} alt="SoftBank logo" />
                    </div> 
                    <div className="logo">
                        <img src={ logo4} alt="SoftBank logo" />
                    </div>
                     <div className="logo">
                        <img src={ logo5} alt="SoftBank logo" />
                    </div> 
                    <div className="logo">
                        <img src={logo6 } alt="SoftBank logo" />
                    </div>
                </div>
                <div className="aboutorder4">
                <h1>Company timeline</h1>
                <div className="aboutoutercont">
                    <div className="cardfirst">
                        <div>
                            <Yearcard title="2014" />
                        </div>
                        <div className="aboutdes">
                            <AboutCard description="After Vishal Garg’s first attempt to purchase his own dream home, he quickly realized that the homebuying process is unnecessarily broken. This inspired him to found a technology-first company led by engineers and data experts with the mission of digitizing and automating home finance to make it cheaper, easier, and faster for all."/>
                        </div>
                    </div>
                    <div className="cardfirst">
                        <div>
                            <Yearcard title="2015" />
                        </div>
                        <div className="aboutdes1">
                            <AboutCard description="Better Mortgage funds its first mortgage loan entirely online (without a single phone call!)."/>
                        </div>
                    </div>                    <div className="cardfirst">
                        <div>
                            <Yearcard title="2016" />
                        </div>
                        <div className="aboutdes">
                            <AboutCard description="Better Mortgage becomes a Fannie Mae approved seller + servicer and establishes relationships with top mortgage investors."/>
                        </div>
                    </div>
                    <div className="cardfirst">
                        <div>
                            <Yearcard title="2017" />
                        </div>
                        <div className="aboutdes1">
                            <AboutCard description="Better expands into the real estate market with Better Real Estate."/>
                        </div>
                    </div>   
                    <div className="cardfirst">
                        <div>
                            <Yearcard title="2018" />
                        </div>
                        <div className="aboutdes">
                            <AboutCard description="Better Mortgage partners with Ally Bank to build Ally powered by Better."/>
                        </div>
                    </div> 
                    <div className="cardfirst">
                        <div>
                            <Yearcard title="2019" />
                        </div>
                        <div className="aboutdes1">
                            <AboutCard description="Better Mortgage launches its pilot partnership with American Express to deliver a seamless homebuying experience to AMEX customers."/>
                        </div>
                    </div> <div className="cardfirst">
                        <div>
                            <Yearcard title="2021" />
                        </div>
                        <div className="aboutdes">
                            <AboutCard description="Better acquires Trussle — The UK’s most innovative online mortgage broker."/>
                        </div>
                    </div> <div className="cardfirst">
                        <div>
                            <Yearcard title="2022" />
                        </div>
                        <div className="aboutdes1">
                            <AboutCard description="Better Mortgage becomes the first fintech to fund $100B home loans entirely online."/>
                        </div>
                    </div>
                     <div className="cardfirst">
                        <div>
                            <Yearcard title="2023" />
                        </div>
                        <div className="aboutdes">
                            <AboutCard description="Better Mortgage launches One Day Mortgage¹: The first offering to customers to go from application to full mortgage Commitment Letter within 24 hours vs. typical industry process of 30+ days."/>
                        </div>
                    </div>     
                    <div className="cardfirst">
                        <div>
                            <Yearcard title="Today" />
                        </div>
                        <div className="aboutdes1">
                            <AboutCard description="You become part of the story by joining tens of thousands of happy Better Mortgage borrowers."/>
                        </div>
                    </div>     
                </div>
                </div>
            </div>
        </>
    )
}
export default About;
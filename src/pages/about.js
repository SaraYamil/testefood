import React, {  } from "react";

function About(){
    return(
        <>
           <main>

<header className="baldi-header baldi-about-header">
    <div className="container">
        <div className="row">

            <div className="col-lg-10 col-12 mx-auto">
                <h1 className="text-white">Beldi Food Story</h1>

                <strong className="text-white">This is How Our Beldi Food Came to Be</strong>
            </div>

        </div>
    </div>

    <div className="overlay"></div>
</header>

<section className="about section-padding bg-white">
    <div className="container">
        <div className="row">

            <div className="col-lg-6 col-12 mb-2">
                <h4 className="mb-3">This is the story of Beldi Food—where the spirit of Morocco is served on a plate.</h4>

                <a href="news" className="custom-btn btn btn-dark mt-3">Check Our News</a>

                <a href="contact" className="custom-btn btn btn-danger mt-3 ms-3">Say Hi</a>
            </div>

            <div className="col-lg-6 col-12">
            
                <p>In the heart of Marrakech, amidst the labyrinthine alleys of the medina, a culinary journey began. It was here that Chef Nadia's love for Moroccan cuisine was sparked by the aromatic spices, bustling markets, and the warm hospitality of her grandmother's kitchen.</p>
            
                <p>Growing up, Chef Nadia, with her grandmother Fatima's guidance, learned the art of traditional Beldi cooking. Fatima's recipes were not just about ingredients; they were stories passed down through generations, each dish carrying the history and flavors of Morocco.</p>
                
                <p>With this revelation, Beldi Food was born—a homage to the essence of Moroccan cooking and the spirit of sharing meals with loved ones. Nestled in the heart of Marrakech, Beldi Food is a culinary sanctuary where tradition meets innovation.</p>

                <p>Every dish at Beldi Food tells a story—a tale of the artisans, farmers, and chefs who have poured their love and expertise into creating flavors that transport you to the heart of Morocco. From the sizzle of the grill to the aroma of freshly baked bread, each moment at our table is a celebration of the rich flavor of Moroccan cuisine.</p>

                <p>We invite you <a href="contact" target="_blank">to join us</a> on this culinary adventure. Whether you are a seasoned traveler or a curious food lover, Beldi Food promises an experience that is both authentic and unforgettable. Come taste the magic of Morocco, where every meal is a journey and every bite a discovery.</p>

            </div>

        </div>
    </div>
</section>

<section className="about section-padding">
    <div className="container">
        <div className="row">

            <div className="col-12">
                <h2 className="mb-5">Team Members</h2>
            </div>

            <div className="col-lg-4 col-12">
                <div className="team-thumb">
                    <img src="assets/images/team/chef1.jpg" className="img-fluid team-image" alt=""/>
                    
                    <div className="team-info">
                        <h4 className="mt-3 mb-0">Nadia</h4>

                        <p>Chef &amp; Founder</p>
                    </div>
                </div>
            </div>

            <div className="col-lg-4 col-12 my-lg-0 my-4">
                <div className="team-thumb">
                    <img src="assets/images/team/chef2.jpg" className="img-fluid team-image" alt=""/>

                    <h4 className="mt-3 mb-0">Ahmed</h4>

                    <p>Restaurant Manager</p>
                </div>
            </div>

            <div className="col-lg-4 col-12">
                <div className="team-thumb">
                    <img src="assets/images/team/chef3.jpg" className="img-fluid team-image" alt=""/>
                    
                    <h4 className="mt-3 mb-0">Haja Fatima</h4>

                    <p>Senior Chef</p>
                </div>
            </div>

        </div>
    </div>
</section>
</main>  
        </>
    )
}

export default About;
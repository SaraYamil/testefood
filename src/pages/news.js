import React, { Fragment } from "react";

function News(){
    return(
        <Fragment>
            <main>

<header class="baldi-header baldi-news-header">
    <div class="container">
        <div class="row">

            <div class="col-lg-10 col-12 mx-auto">
                <h1 class="text-white">News &amp; Events</h1>

                <strong class="text-white">Our latest updates, news and events</strong>
            </div>

        </div>
    </div>

    <div class="overlay"></div>
</header>


<section class="news section-padding">
    <div class="container">
        <div class="row">

            <div class="col-12">
                <h2 class="mb-lg-5 mb-4">News &amp; Events</h2>
            </div>

            <div class="col-lg-4 col-md-6 col-12">
                <div class="news-thumb mb-4">
                    <a href="news-detail.html">
                        <img src="assets/images/news/evnt1.jpg" class="img-fluid news-image" alt=""/>
                    </a>
                    
                    <div class="news-text-info">
                        <span class="category-tag me-3 bg-info">Chef's Recipe</span>

                        <strong>26 March 2024</strong>

                        <h5 class="news-title mt-2">
                            <a href="contact" class="news-title-link"> Bissara perfection tip: Flavor with finesse</a>
                        </h5>
                    </div>
                </div> 
            </div>

            <div class="col-lg-4 col-md-6 col-12">
                <div class="news-thumb mb-4">
                    <a href="news-detail1.html">
                        <img src="assets/images/news/event2.jpg" class="img-fluid news-image" alt=""/>
                    </a>
                    
                    <div class="news-text-info">
                        <span class="category-tag me-3 bg-info">News</span>

                        <strong>12 March 2024</strong>

                        <h5 class="news-title mt-2">
                            <a href="contact" class="news-title-link">Varied Ftour Ramadan buffet at only 249dh</a>
                        </h5>
                    </div>
                </div> 
            </div>

            <div class="col-lg-4 col-md-6 col-12">
                <div class="news-thumb mb-4">
                    <a href="news-detail2.html">
                        <img src="assets/images/news/event3.jpg" class="img-fluid news-image" alt=""/>
                    </a>
                    
                    <div class="news-text-info">
                        <span class="category-tag me-3 bg-info">Events</span>

                        <strong>12 April 2024</strong>

                        <h5 class="news-title mt-2">
                            <a href="contact" class="news-title-link">Birthday with a Moroccan touch</a>
                        </h5>
                    </div>
                </div> 
            </div>

        </div>
    </div>
</section>

</main>

        </Fragment>
    )
}

export default News;
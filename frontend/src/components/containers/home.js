import React from 'react';

const Home = props => {
    return(
        <div className="blog-list w-dyn-list">
           <div className="w-dyn-items">
              <div className="w-dyn-item">
                 <div className="post-wrapper">
                    <a className="blog-title-link w-inline-block" href="/posts/coffee-variety-macchiato-as-organic-ut-variety-caffeine-americano">
                       <h1 className="blog-title">Coffee variety macchiato as organic</h1>
                    </a>
                    <div className="post-info-wrapper">
                       <div className="post-info">March 2, 2016</div>
                       <div className="post-info">|</div>
                       <a className="post-info when-link" href="/categories/travel">Travel</a>
                    </div>
                    <p className="post-summary">Saucer, crema carajillo, bar, mocha medium, latte cappuccino and espresso acerbic to go. Coffee, irish foam turkish coffee blue mountain seasonal. Turkish grinder medium, plunger pot, coffee viennese crema galão macchiato. Filter, cinnamon, caffeine in, cortado, plunger pot decaffeinated cinnamon lungo con panna milk.</p>
                    <a className="button-round w-button" href="/posts/coffee-variety-macchiato-as-organic-ut-variety-caffeine-americano">Continue reading →</a>
                 </div>
              </div>
           </div>
        </div>
    );
}

export default Home;

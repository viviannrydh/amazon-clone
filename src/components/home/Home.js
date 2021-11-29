import React from 'react';
import Product from '../product/Product';
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      
      <img src="https://m.media-amazon.com/images/I/61CX1noQ8nL._SX3000_.jpg"
          alt="" 
          className="home-img"
      />
      <div className="home-container">
        <div className="home-row">
          <Product
            id={123}
            title="lenovo"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, quae? Placeat natus dolores, sit quibusdam hic commodi, enim harum exercitationem minima"
            price={598}
            image='https://www.lenovo.com/medias/lenovo-laptop-thinkpad-x1-carbon-gen-9-14-subseries-hero.png?context=bWFzdGVyfHJvb3R8NjM3NDR8aW1hZ2UvcG5nfGg1Yy9oNDMvMTE2Mjg3NTE2MTgwNzgucG5nfDA1N2Y2ZjU4M2YwOGQ0OTFmMGI4Y2RlN2ZmYTQ4ZWJhZDljNTVlOTNkNTNjNmI2ZDM1ODNjODVmMGY5NGUyMTU'
            rating={5}
            />
          <Product
            id={234}
            title="lenovo"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, quae? Placeat natus dolores, sit quibusdam hic commodi, enim harum exercitationem minima"
            price={598}
            image='https://www.lenovo.com/medias/lenovo-laptop-thinkpad-x1-carbon-gen-9-14-subseries-hero.png?context=bWFzdGVyfHJvb3R8NjM3NDR8aW1hZ2UvcG5nfGg1Yy9oNDMvMTE2Mjg3NTE2MTgwNzgucG5nfDA1N2Y2ZjU4M2YwOGQ0OTFmMGI4Y2RlN2ZmYTQ4ZWJhZDljNTVlOTNkNTNjNmI2ZDM1ODNjODVmMGY5NGUyMTU'
            rating={4}
          />
        </div>
        <div className="home-row">
          <Product
            id={345}
            title="lenovo"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, quae? Placeat natus dolores, sit quibusdam hic commodi, enim harum exercitationem minima"
            price={598}
            image='https://www.lenovo.com/medias/lenovo-laptop-thinkpad-x1-carbon-gen-9-14-subseries-hero.png?context=bWFzdGVyfHJvb3R8NjM3NDR8aW1hZ2UvcG5nfGg1Yy9oNDMvMTE2Mjg3NTE2MTgwNzgucG5nfDA1N2Y2ZjU4M2YwOGQ0OTFmMGI4Y2RlN2ZmYTQ4ZWJhZDljNTVlOTNkNTNjNmI2ZDM1ODNjODVmMGY5NGUyMTU'
            rating={5}
          />
          <Product
            id={456}
            title="lenovo"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, quae? Placeat natus dolores, sit quibusdam hic commodi, enim harum exercitationem minima"
            price={598}
            image='https://www.lenovo.com/medias/lenovo-laptop-thinkpad-x1-carbon-gen-9-14-subseries-hero.png?context=bWFzdGVyfHJvb3R8NjM3NDR8aW1hZ2UvcG5nfGg1Yy9oNDMvMTE2Mjg3NTE2MTgwNzgucG5nfDA1N2Y2ZjU4M2YwOGQ0OTFmMGI4Y2RlN2ZmYTQ4ZWJhZDljNTVlOTNkNTNjNmI2ZDM1ODNjODVmMGY5NGUyMTU'
            rating={4}
          />
          <Product
            id={567}
            title="lenovo"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, quae? Placeat natus dolores, sit quibusdam hic commodi, enim harum exercitationem minima"
            price={598}
            image='https://www.lenovo.com/medias/lenovo-laptop-thinkpad-x1-carbon-gen-9-14-subseries-hero.png?context=bWFzdGVyfHJvb3R8NjM3NDR8aW1hZ2UvcG5nfGg1Yy9oNDMvMTE2Mjg3NTE2MTgwNzgucG5nfDA1N2Y2ZjU4M2YwOGQ0OTFmMGI4Y2RlN2ZmYTQ4ZWJhZDljNTVlOTNkNTNjNmI2ZDM1ODNjODVmMGY5NGUyMTU'
            rating={3}
          />
        </div>
        <div className="home-row">
          <Product
            id={678}
            title="lenovo"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, quae? Placeat natus dolores, sit quibusdam hic commodi, enim harum exercitationem minima"
            price={598}
            image='https://www.lenovo.com/medias/lenovo-laptop-thinkpad-x1-carbon-gen-9-14-subseries-hero.png?context=bWFzdGVyfHJvb3R8NjM3NDR8aW1hZ2UvcG5nfGg1Yy9oNDMvMTE2Mjg3NTE2MTgwNzgucG5nfDA1N2Y2ZjU4M2YwOGQ0OTFmMGI4Y2RlN2ZmYTQ4ZWJhZDljNTVlOTNkNTNjNmI2ZDM1ODNjODVmMGY5NGUyMTU'
            rating={5}
          />
        </div>
      </div>
    </div>
  )
}

export default Home

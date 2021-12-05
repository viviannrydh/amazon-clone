import React from 'react';
import Product from '../product/Product';
import './Home.css'
import Slideshow from './Slideshow';

const Home = () => {
  return (
    <div className="home">
      
      <Slideshow />
      <div className="home-container">
        <div className="home-row">
          <Product
            id={123}
            title="Laptop"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, quae? Placeat natus dolores, sit quibusdam hic commodi, enim harum exercitationem minima"
            price={288}
            image='https://www.lenovo.com/medias/lenovo-laptop-thinkpad-x1-carbon-gen-9-14-subseries-hero.png?context=bWFzdGVyfHJvb3R8NjM3NDR8aW1hZ2UvcG5nfGg1Yy9oNDMvMTE2Mjg3NTE2MTgwNzgucG5nfDA1N2Y2ZjU4M2YwOGQ0OTFmMGI4Y2RlN2ZmYTQ4ZWJhZDljNTVlOTNkNTNjNmI2ZDM1ODNjODVmMGY5NGUyMTU'
            rating={5}
          />
          <Product
            id={123}
            title="Computer Screen"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, quae? Placeat natus dolores, sit quibusdam hic commodi, enim harum exercitationem minima"
            price={288}
            image='https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_83551467/fee_786_587_png'
            rating={5}
          />
          <Product
            id={234}
            title="Headphone"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, quae? Placeat natus dolores, sit quibusdam hic commodi, enim harum exercitationem minima"
            price={120}
            image='https://i.pcmag.com/imagery/reviews/046UyKcU86Megq3Eenq0sbo-1.fit_lpad.size_625x365.v1597063431.jpg'
            rating={4}
          />
        </div>
        <div className="home-row">
          <Product
            id={345}
            title="Desktop screen"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, quae? Placeat natus dolores, sit quibusdam hic commodi, enim harum exercitationem minima"
            price={198}
            image='https://img01.huaweifile.com/eu/es/huawei/pms/product/6941487212750/800_800_A9B1C9B8334E972659658F6477BC8F7342F5B7168A0196CAmp.png'
            rating={5}
          />
          <Product
            id={456}
            title="Keyboard"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, quae? Placeat natus dolores, sit quibusdam hic commodi, enim harum exercitationem minima"
            price={88}
            image='https://resource.logitechg.com/content/dam/gaming/en/products/pro-keyboard/pro-keyboard-gallery/pan-pro-gaming-keyboard-gallery-topdown.png'
            rating={4}
          />
          <Product
            id={567}
            title="Speaker"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, quae? Placeat natus dolores, sit quibusdam hic commodi, enim harum exercitationem minima"
            price={168}
            image='https://m.media-amazon.com/images/I/711TfVyTXEL._AC_SL1000_.jpg'
            rating={3}
          />
        </div>
        <div className="home-row">
          <Product
            id={38}
            title="Mouse"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, quae? Placeat natus dolores, sit quibusdam hic commodi, enim harum exercitationem minima"
            price={598}
            image='https://m.media-amazon.com/images/I/61vZbAIAI3L._AC_SL1500_.jpg'
            rating={5}
          />
          <Product
            id={678}
            title="In-ear headphone"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, quae? Placeat natus dolores, sit quibusdam hic commodi, enim harum exercitationem minima"
            price={30}
            image='https://cdn.mos.cms.futurecdn.net/mkP2sBQpXSCEbcDnbiWF34-1200-80.jpg'
            rating={5}
          />
        </div>
      </div>
    </div>
  )
}

export default Home

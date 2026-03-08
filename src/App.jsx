import React from 'react';
import './styles/App.css'
import { Navbar } from "./components/Navbar/Navbar";
import { Article } from "./components/Article/Article";
import dbDesign from "./assets/images/dbdesign.jpg";
import portraits from "./assets/images/portraits.jpg";
import malayalam from "./assets/images/days.jpg";


class App extends React.Component {
  render() {
    return (
      //fragment
      <>
      <Navbar/>

      <section id="articles">
         <Article title="Dashboard Design" 
         provider="NASA" 
         description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, quidem. Unde, quia nesciunt doloribus possimus nisi sequi soluta molestias esse! Quia veniam soluta labore beatae repellat. Ducimus quasi nobis aliquid beatae nulla dolore aliquam est asperiores eos, fugit ad accusamus sint rem quam at iste exercitationem ratione voluptatem obcaecati dolores!"
         thumbnail={dbDesign}/>

         <Article title="Vibrant Portraits of 2020"
         provider="SpaceNews"
         description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, quidem. Unde, quia nesciunt doloribus possimus nisi sequi soluta molestias esse! Quia veniam soluta labore beatae repellat. Ducimus quasi nobis aliquid beatae nulla dolore aliquam est asperiores eos, fugit ad accusamus sint rem quam at iste exercitationem ratione voluptatem obcaecati dolores!"
         thumbnail={portraits}/>

         <Article title="36 Days of Malayalam type"
         provider="SpaceFlight Now"
         description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, quidem. Unde, quia nesciunt doloribus possimus nisi sequi soluta molestias esse! Quia veniam soluta labore beatae repellat. Ducimus quasi nobis aliquid beatae nulla dolore aliquam est asperiores eos, fugit ad accusamus sint rem quam at iste exercitationem ratione voluptatem obcaecati dolores!"
         thumbnail={malayalam}/>

         <Article title="Dashboard Design"
         provider="NASA"
         description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, quidem. Unde, quia nesciunt doloribus possimus nisi sequi soluta molestias esse! Quia veniam soluta labore beatae repellat. Ducimus quasi nobis aliquid beatae nulla dolore aliquam est asperiores eos, fugit ad accusamus sint rem quam at iste exercitationem ratione voluptatem obcaecati dolores!"
         thumbnail={dbDesign}/>

      </section>
     
      </>
    );
  }
}

export default App;

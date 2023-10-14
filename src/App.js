import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CardUsingClass from './components/CardUsingClass';
import imgOne from '../src/components/assets/AMRITSAR.jpg'
import imgTwo from '../src/components/assets/AGRA.jpg'
import imgThree from '../src/components/assets/ANDAMAN-NICOBAR-ISLANDS.jpg'
import imgFour from '../src/components/assets/Ajanta-Cave.jpg'
import CardUsingFunction from './components/CardUsingFunction';
import imgFive from '../src/components/assets/GANGTOK.jpg'
import imgSix from '../src/components/assets/GOA.jpg'
import imgSeven from '../src/components/assets/MANALI.jpg'
import imgEight from '../src/components/assets/UDAIPUR.jpg'

function App() {
  return (
    <div className="App">
    <div style={{display: 'flex', justifyContent: "space-evenly", marginTop:"50px"}}>
    <CardUsingClass title="Amritsar" image={imgOne} discription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus qui maiores provident error laudantium hic?"/>
    <CardUsingClass title="Agra"  image={imgTwo} discription="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto officiis mollitia deserunt porro facere quibusdam et molestias quisquam vitae eius." />
    <CardUsingClass title="Andaman-Nicobar"  image={imgThree} discription="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto officiis mollitia deserunt porro facere quibusdam et molestias quisquam vitae eius." />
    <CardUsingClass title="Ajanta-Cave"  image={imgFour} discription="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto officiis mollitia deserunt porro facere quibusdam et molestias quisquam vitae eius." />
    </div>

    <div style={{display:"flex", justifyContent:"space-evenly", marginTop:"50px"}}>
      <CardUsingFunction title="Gangotak"  image={imgFive} discription="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto officiis mollitia deserunt porro facere quibusdam et molestias quisquam vitae eius." />
      <CardUsingFunction title="Goa"  image={imgSix} discription="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto officiis mollitia deserunt porro facere quibusdam et molestias quisquam vitae eius." />
      <CardUsingFunction title="Manali"  image={imgSeven} discription="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto officiis mollitia deserunt porro facere quibusdam et molestias quisquam vitae eius." />
      <CardUsingFunction title="Udaipur"  image={imgEight} discription="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto officiis mollitia deserunt porro facere quibusdam et molestias quisquam vitae eius." />
    </div>
   
    </div>
  );
}

export default App;

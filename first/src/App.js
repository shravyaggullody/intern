import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Headers from './Headers';
import Grids from './Grids';
function App() {
  const cardDetails = [
    {
      img: "/grey.png", 
      description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      time: "9min"
    },
    {
      img: "/grey.png", 
      description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      time: "9min"
    },
    {
      img: "/grey.png", 
      description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      time: "9min"
    },
    {
      img: "/grey.png", 
      description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      time: "19min"
    },
    {
      img: "/grey.png", 
      description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      time: "19min"
    },
    {
      img: "/grey.png", 
      description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      time: "19min"
    },
    {
      img: "/grey.png", 
      description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      time: "29min"
    },
    {
      img: "/grey.png", 
      description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      time: "29min"
    },
    {
      img: "/grey.png", 
      description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      time: "29min"
    }
  ];  
  return (
    <div>
    <main role="main">
      <Headers title="Album example"/>
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row">
          {
            cardDetails.map((data) => {
              return (<Grids description={data.description} img={data.img} time={data.time}/>);
            })
          }
          </div>
        </div>
      </div>
    </main>
    <footer className="text-muted">
      <div className="container">
        <p className="float-right">
          <a href="#">Back to top</a>
        </p>
        <p>Album example is &copy; Bootstrap, but please download and customize it for yourself!</p>  </div>
    </footer>
  </div>
  );
}
export default App;
import Head from "next/head";
import Navbar from "../components/navBar";
import Sidebar from "../components/sideBar";
import Carousal from "../components/carousal";
import Movielist from "../components/movieList";
import Footer from "../components/footer";
import {getMovies} from "../action/index";
import React, {useState,useEffect} from "react";

//Functional Component
// const Home = () => {
//   const [movies,setMovies] = useState([]);
//   const [count, setCount] = useState(0);

//   useEffect(()=>{
//      const fetchMovies = async() =>{
//        const movies = await getMovies();
//        setMovies(movies);
//      }

//      fetchMovies();
//   },[count]);


//   return (
//     <div>
//       <Head>
//         <title>Home</title>
//         <link
//           rel="stylesheet"
//           href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
//           integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
//           crossOrigin="anonymous"
//         />
//         <script
//           src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
//           integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
//           crossOrigin="anonymous"
//         ></script>
//         <script
//           src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
//           integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
//           crossOrigin="anonymous"
//         ></script>
//         <script
//           src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
//           integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
//           crossOrigin="anonymous"
//         ></script>
//       </Head>
//       <Navbar />
//       <div className="home-page">
//         <div className="container">
//         <button onClick={()=>{setCount(count + 1)}}>Click Me!</button>
//           <div className="row">
//             <div className="col-lg-3">
//               <Sidebar appName={"Movie DB"} />
//             </div>
//             <div className="col-lg-9">
//               <Carousal />
//               <div className="row">
//                 <Movielist movies={movies} />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//       <style jsx>
//         {`
//           .home-page {
//             padding-top: 80px;
//           }
//         `}
//       </style>
//     </div>
//   );
// };

//Class Component modified
class Home extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      movies: []
    }
  }

  componentDidMount(){
    getMovies()
    .then(movies =>{
      this.setState({movies});
    })
    .catch(error => {
      console.log(error);
    });
    
  }

  render(){
    const {movies} = this.state

    return (
      <div>
        <Head>
          <title>Home</title>
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossOrigin="anonymous"
          />
          <script
            src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
            integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
            crossOrigin="anonymous"
          ></script>
          <script
            src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
            integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
            crossOrigin="anonymous"
          ></script>
          <script
            src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
            integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
            crossOrigin="anonymous"
          ></script>
        </Head>
        <Navbar />
        <div className="home-page">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <Sidebar appName={"Movie DB"} />
              </div>
              <div className="col-lg-9">
                <Carousal />
                <div className="row">
                  <Movielist movies={movies} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
        <style jsx>
          {`
            .home-page {
              padding-top: 80px;
            }
          `}
        </style>
      </div>
    );
  }
  
}

export default Home;

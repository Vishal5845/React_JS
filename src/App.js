import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';


function App() {
  // const title = "Welcome to the new blog";
  // const like = 50;
  // const person = { name : "yoshi", age:30};
  // const link = "http://google.com";

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className='content'>
          {/* <h1>{ title }</h1>
          <p>Liked { like } times</p>
          {/* <p> { person } </p> 
          <p> { 10 } </p>
          <p> { "hello, ninjas"} </p>
          <p>{[1,2,3,4,5]} </p>
          <p>{ Math.random() *10 }</p>

          <a href={link}>Google Site</a> */}
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path = "/create" element = {<Create />} />
            <Route path = "/blogs/:id" element = {<BlogDetails />} />
            <Route path="*" element = {<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

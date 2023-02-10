import { Routes, Route ,BrowserRouter,Link} from "react-router-dom";

function IndexPage(){
    return(
        <div>
    <BrowserRouter>
          <Link to="/">Default Page </Link> 
          <Link to="/home"> Home</Link>
          <Routes>
              <Route path="/" element={<h1>Default Page</h1>} />
              <Route path="/home/*" element={<Home/>  } />
          </Routes>
    </BrowserRouter>
  </div>
    );
}

function Home(){
    return(
        <div>
            <h1>Home Page</h1>
          <Link to="/home/page1">Page 1 </Link>
          <Link to="/home/page2">Page 2</Link>
          <Routes>
              <Route path="/Page1" element={<h1>Page 1</h1>} />
              <Route path="/page2" element={<h1>Page 2</h1>} />
          </Routes>
        </div>
    );
}

export default IndexPage;
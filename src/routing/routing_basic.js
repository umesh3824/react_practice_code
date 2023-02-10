
import { Routes, Route ,BrowserRouter} from "react-router-dom";

function RoutingBasic() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<h1>Home</h1>} />
                    <Route path="/about" element={<h1>About</h1>} />
                    <Route path="/contact" element={<h1>Contact</h1>} />
                </Routes>
                <hr/>
                <Routes>
                    <Route path="/profile" element={<h1>Profile</h1>} />
                    <Route path="/logout" element={<h1>Logout</h1>} />
                    <Route path="/info" element={<h1>Info</h1>} />
                </Routes>
                <Routes>
                    <Route path="a/profile" element={<h1>Profile</h1>} />
                    <Route path="a/logout" element={<h1>Logout</h1>} />
                    <Route path="a/info" element={<h1>Info</h1>} />
                </Routes>
            </BrowserRouter>
           
        </div>
    );
}

export default RoutingBasic;
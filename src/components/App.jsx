import './app.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Blog from './Blog';
import WhyUs from './WhyUs';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Footer from './Footer';
import Pricing from './Pricing';

function App() {
  return (
    <Router>
      <div className="body">
        <Navbar/>
        <div>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/contactus">
              <ContactUs/>
            </Route>
            <Route exact path="/aboutus">
              <AboutUs/>
            </Route>
            <Route exact path="/blog">
              <Blog/>
            </Route>
            <Route exact path="/whyus">
              <WhyUs/>
            </Route>
            <Route exact path="/pricing">
              <Pricing/>
            </Route>
          </Switch>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;

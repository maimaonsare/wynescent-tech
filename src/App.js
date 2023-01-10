
import './App.css';
import Footer from './components/footer/Footer';
import Join from './components/join/Join';
import MainBody from './components/mainbody/MainBody';
import Project from './components/projects/Project';
import Service from './components/services/Service';
import Subscription from './components/subscriptions/Subscription';
import Testimonials from './components/testimonials/Testimonials';

function App() {
  return (
    <div className="App">
      <MainBody />
      <Service/>
      <Project/>
      <Subscription/>
      <Testimonials/>
      <Join/>
      <Footer />
    </div>
  );
}

export default App;

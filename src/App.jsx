import {useState} from 'react'
import TopBar from "./component/topbar/TopBar";
import Intro from "./component/intro/Intro";
import Portfolio from "./component/portfolio/Portfolio"
import Work from "./component/work/Work"
import Testimonial from "./component/testimonials/Testimonials"
import Contact from "./component/contacts/Contacts"
import "./app.scss"
import Menu from './component/menu/Menu';
import Education from './component/education/Education';

function App()
{
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="app">
      <TopBar openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <Menu openMenu={openMenu} setOpenMenu={setOpenMenu}/>
      <section className="section">
        <Intro/>
        <Education/>
        <Portfolio/>
        <Work/>
        <Testimonial/>
        <Contact/>
      </section>
    </div>
  );
}

export default App;

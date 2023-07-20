import mobile from "./images/image-hero-desktop.png";
import desktop from "./images/image-hero-mobile.png";
import audio from "./images/client-audiophile.svg";
import data from "./images/client-databiz.svg";
import maker from "./images/client-maker.svg";
import meet from "./images/client-meet.svg";
import down from "./images/icon-arrow-down.svg";
import up from "./images/icon-arrow-up.svg";
import todo from "./images/icon-todo.svg";
import calendar from "./images/icon-calendar.svg";
import plan from "./images/icon-planning.svg";
import reminders from "./images/icon-reminders.svg";
import logo from "./images/logo.svg";
import menuOpen from "./images/icon-menu.svg";
import menuClose from "./images/icon-close-menu.svg";
import {useState} from "react"

function App() {

  const [features, setFeatures] = useState(false)
  const [company, setCompany] = useState(false)


  const handleOpen = () => {
 


    const navbar  = document.querySelector(".navbar")
    const  menuButton = document.querySelector(".menu-Button")

    navbar.classList.toggle("open")

    if(navbar.classList.contains("open")) {
      menuButton.src = menuClose
    } else {
      menuButton.src= menuOpen
    }
  }
  return (
    <>
      <header className="p-5 flex items-center justify-between">
        <div className="lg:flex lg:items-start lg:justify-start" >
          <img src={logo} alt="logo" className="lg:mr-5" />
          <nav className="navbar open">
            <div>
              <button onClick={() => setFeatures(!features)} className="flex items-center justify-start">Features {features ? (<img src={up} alt="up" className="ml-2"/>) : (<img src={down} alt="down" className="ml-2"/>)}</button>
              {features && <ul className="mt-2 ml-3 lg:ml-0 lg:p-3 lg:shadow">
                <li className="flex items-center justify-start text-sm mb-2"><img src={todo} alt="todo" className="mr-2" />Todo List</li>
                <li className="flex items-center justify-start text-sm mb-2"><img src={calendar} alt="calendar" className="mr-2" />Calendar</li>
                <li className="flex items-center justify-start text-sm mb-2"><img src={reminders} alt="remind" className="mr-2" />Reminders</li>
                <li className="flex items-center justify-start text-sm mb-2"><img src={plan} alt="plan" className="mr-2" />Planning</li>
              </ul>}
            </div>
            <div>
              <button onClick={() => setCompany(!company)} className="flex items-center justify-start">Company {company ? (<img src={up} alt="up" className="ml-2"/>) : (<img src={down} alt="down" className="ml-2"/>)}</button>
              {company && <ul className="mt-2 ml-3 lg:ml-0 lg:p-3 lg:shadow">
                <li className="flex items-center justify-start text-sm mb-2" >History</li>
                <li className="flex items-center justify-start text-sm mb-2">Our Team</li>
                <li className="flex items-center justify-start text-sm mb-2">Blog</li>
              </ul>}
            </div>
            <div>
              <button className="mb-2 lg:mb-0">Careers</button>
            </div>
            <div>
              <button>About</button>
            </div>
          </nav>
        </div>
        
        <div className="lg:hidden">
          <button onClick={handleOpen}  ><img src={menuOpen} alt="menuOpen"className="menu-Button" /></button>
        </div>

        <div className="hidden lg:block">
          <button className="opacity-75 mr-5">Login</button>
          <button className="border-2 border-black opacity-75 px-6 py-2 rounded-2xl ml-5 ">Register</button>
        </div>
      </header>
      <section className="flex flex-col-reverse py-20 md:grid md:gap-10 md:grid-cols-2 md:place-items-center max-w-4xl lg:max-w-5xl md:mx-auto">
        <article className="text-center md:text-left px-5 xl:px-0 mt-10 md:mt-0">
          <h1 className="font-bold text-4xl lg:text-6xl xl:text-7xl mb-5">
            Make remote work
          </h1>
          <p className="mb-5">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <button className="bg-black rounded-lg shadow text-white font-bold hover:opacity-75 transition-all duration-150 pt-3 pb-2 px-6 cursor-pointer">
            Learn More
          </button>
          <ul className="grid grid-cols-4 gap-1 mt-10 placw-items-center md:place-items-start">
            <li>
              <img src={data} alt="data" className="w-16 md:w-24" />
            </li>
            <li>
              <img src={audio} alt="audio" className="w-16 md:w-24" />
            </li>
            <li>
              <img src={meet} alt="meet" className="w-16 md:w-24" />
            </li>
            <li>
              <img src={maker} alt="maker" className="w-16 md:w-24" />
            </li>
          </ul>
        </article>

        <article>
          <picture>
            <source media="(max-width: 768px)" srcSet={desktop} />
            <img src={mobile} alt="mobile" className="w-full" />
          </picture>
        </article>
      </section>
    </>
  );
}

export default App;

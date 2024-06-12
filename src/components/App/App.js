import './App.css';
import Header from "../Header/Header";
import Cover from "../Cover/Cover";
import Marquee from "../Marquee/Marquee";
import AboutMe from "../AboutMe/AboutMe";
import Contacts from "../Contacts/Contacts";
import React from "react";

function App() {
    const [burgerMenuOpened, setBurgerMenuOpened] = React.useState(false);
    const openBurgerMenu = () => {
        if(!burgerMenuOpened) {
            setBurgerMenuOpened(true);
        } else {
            setBurgerMenuOpened(false);
        }
    }

  return (
    <div className="App">
        <Header openBurgerMenu={openBurgerMenu} burgerMenuOpened={burgerMenuOpened}/>
        <Cover burgerMenuOpened={burgerMenuOpened}/>
        <Marquee />
        <AboutMe burgerMenuOpened={burgerMenuOpened} />
        <Contacts />
    </div>
  );
}

export default App;

/*
        <Contacts />
 */

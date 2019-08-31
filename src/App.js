import React, { Fragment, Component } from "react";
import "./App.scss";

//components
import Title from "./components/Title/Title";
import Paragraph from "./components/Paragraph/Paragraph";
import Header from "./components/Header/Header";
import Link from "./components/Link/Link";
import Button from "./components/Buttton/Button";
import Section from "./components/Section/Section";
import Menu from "./components/Menu/Menu";
import Card from './components/Card/Card';


let toggle = "";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      overlay: "",
      line__top: "",
      line__middle: "",
      line__bottom: "",

      menu__box__display: "",
      menu__box__hide: ""
    };
    this.menuToggle = this.menuToggle.bind(this);
  }
  menuToggle() {
    if (this.state.overlay != "menu__overlay--cover") {
      this.setState({
        overlay: "menu__overlay--cover",
        line__top: "menu__line__top--rotate",
        line__middle: "menu__line__middle--hide",
        line__bottom: "menu__line__bottom--rotate",
        menu__box__hide: "",
        menu__box__display: "menu__box--display"
      });
    } else {
      this.setState({
        overlay: "",
        line__top: "",
        line__middle: "",
        line__bottom: "",
        menu__box__display: "",
        menu__box__hide: "menu__box--hide"
      });

    }
  }

  //used outer dic for menutoggle becasue Menu component would not fire onclick
  render() {
    return (
      <div className="App">
        <div onClick={this.menuToggle}>
          <Menu
            overlay={this.state.overlay}
            line__top={this.state.line__top}
            line__middle={this.state.line__middle}
            line__bottom={this.state.line__bottom}
            menu__box__display={this.state.menu__box__display}
            menu__box__hide={this.state.menu__box__hide}
          />
        </div>
        <Section type="hero">
          <Title size="lg">outdoors</Title>
          <Title size="sm">is where life happens</Title>
          <Button type="primary" color="primary--white">
            discover our tours
          </Button>
        </Section>
        <Section id='about' Header={<Header>EXCITING TOURS FOR ADVENTUROUS PEOPLE</Header>} type='about'>
          <Paragraph size='lg'>YOU'RE GOING TO FALL IN LOVE WITH NATURE</Paragraph>
          <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui.</Paragraph>
          <Paragraph>LIVE ADVENTURES LIKE YOU NEVER HAVE BEFORE</Paragraph>
          <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla deserunt voluptatum nam.</Paragraph>
          <Link>Learn more</Link>
        </Section>
        <Section type="benefits">
          <Card Header='meet nature' Paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur." />
          <Card Header='meet nature' Paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur." />
          <Card Header='meet nature' Paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur." />
          <Card Header='meet nature' Paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur." />
        </Section>
      </div>
    );
  }
}

export default App;

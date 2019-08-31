import React, { Component } from "react";
import "./App.scss";

//components
import Title from "./components/Title/Title";
import Paragraph from "./components/Paragraph/Paragraph";
import Header from "./components/Header/Header";
import Link from "./components/Link/Link";
import Button from "./components/Buttton/Button";
import Section from "./components/Section/Section";
import Menu from "./components/Menu/Menu";

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

        menu__box__display: "menu__box--display"
      });
    } else {
      this.setState({
        overlay: "",
        line__top: "",
        line__middle: "",
        line__bottom: "",
        menu__box__display: ""
      });
      setTimeout(function() {
        this.setState({
          menu__box__hide: "menu__box__hide"
        });
      }, 500);
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
        <Section>
          <p>test</p>
        </Section>
      </div>
    );
  }
}

export default App;

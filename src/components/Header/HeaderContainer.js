import React from 'react';
import Header from "./Header";

class HeaderContainer extends React.Component {
  state = {
    language: 'ua'
  };

  componentDidMount() {
    let locale = window.localStorage.getItem('locale');

    if (locale === null) {
      window.localStorage.setItem('locale', 'ua')
    }
  }

  setLanguage = (newLanguage) => {
    console.log('newLanguage = ', newLanguage);
    window.localStorage.setItem('locale', newLanguage)
    this.setState({
      language: newLanguage
    })
  };

  render() {
    return <Header/>
  }
};

export default HeaderContainer;

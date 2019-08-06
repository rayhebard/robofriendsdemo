import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSearchField, requestRobots } from '../actions';
//import CardList from '../components/CardList';
//import SearchBox from '../components/Searchbox';
//import Scroll from '../components/Scroll';
//import ErrorBoundry from '../components/ErrorBoundry';
//import Header from '../components/Header';
//import { robots } from '../robots';
//import './App.css'

import  MainPage  from '../components/MainPage'

const mapStateToProps = state => {
  return{
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange:(event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}

class App extends Component{
  render(){
      return <MainPage {...this.props} />
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

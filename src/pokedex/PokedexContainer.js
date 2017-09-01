import React, { Component } from 'react';
import { connect } from 'react-redux';
import PokedexList from './PokedexList';

export class PokedexContainer extends Component {

  componentWillMount() {
    // load data
  }

  render() {
    // set up loading indicator
    // return wanted components when data is loaded
    return (
      <PokedexList/>
    );
  }
}

export const mapStateToProps = (state) => {
  // get needed reducer state
  console.log(state);

  // return props wanted
  return {};
};

export const mapDispatchToProps = (dispatch) => (!console.log(dispatch) && {
  // return actions wanted
});

export default connect(mapStateToProps, mapDispatchToProps)(PokedexContainer);

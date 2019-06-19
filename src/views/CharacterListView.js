import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { fetching, success, failure } from '../actions'
// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
      this.state = {
        characters: []
      }
  }

  componentDidMount() {
    console.log(fetching, 'fetching')
    this.props.fetching()
    // call our action
  }

  render() {
    if (this.props.fetching === true) {
      return(
        <h2>
        still fetching...
        </h2>
      )

      // return something here to indicate that you are fetching data
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    characters: state.charsReducer.characters,
    isFetching: state.charsReducer.isFetching
  };
}
// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps /* mapStateToProps replaces null here */,
  {
    fetching, success, failure
    /* action creators go here */
  }
)(CharacterListView);

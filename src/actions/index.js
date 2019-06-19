// we'll need axios
import axios from 'axios'

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have control over our thunk-based action creator


export const FETCHING = 'FETCHING';
export const SUCCESS = 'SUCCESS';
export const success = SUCCESS;
export const FAILURE = 'FAILURE';
export const failure = FAILURE

export const fetching = () => dispatch => {
  console.log('inside fetching action')
  dispatch({ type: FETCHING });
    axios
      .get(`https://swapi.co/api/people/`)
      .then(results => {
        dispatch({ type: SUCCESS, payload: results.data })
      })
      .catch(error => {
        dispatch({ type: FAILURE, payload: 'ERROR' })
      })
}



// export const success = () => newChar => {
//   console.log('inside Success function')
//   return {
//     type: SUCCESS,
//     payload: newChar
//   }
// }

// .then(res => {
//   this.setState({ smurfs: res.data });
// })



// export const failure = () => dispatch => {
//   console.log('inside failure function')
//   dispatch({ type: FAILURE });
//     axios.get(`https://swapi.co/api/people`)
// }


// componentDidMount() {
//   axios
//     .get('http://localhost:3333/smurfs')
//     .then(res => {
//       this.setState({ smurfs: res.data });
//     })
//     .catch(err => {
//       console.log(err);
//       this.setState({ error: err });
//     });
// }
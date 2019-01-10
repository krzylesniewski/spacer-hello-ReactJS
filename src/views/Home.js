import React, {Component} from 'react';
import axios from 'axios';


class Home extends Component {
  state = {
    value: '',
    results: [],
  };
  inputChangeHandler = (e) => {
    this.setState({
      value: e.target.value
    });
  };
  onSubmit = (e) =>{
    e.preventDefault();

    if(this.state.value !== ''){
      axios.get(`https://images-api.nasa.gov/search?q=${this.state.value}&media_type=image`)
        .then((res)=>{
          //console.log(res.data.collection.items);
          this.setState({
            results: res.data.collection.items,
          });
        })
        .catch((error) => {
          console.log(error);
        })
    }

  };

  // let API = 'https://images-api.nasa.gov/search?q=moon&media_type=image';
  render() {
    return (
      <div className="wrapper" style={Wrapper}>
        <div style={Search}>
          <form action="" onSubmit={this.onSubmit}>
            <label htmlFor="search">Search</label>
            <input type="text"
                   name="search"
                   id="search"
                   onChange={this.inputChangeHandler}
                   style={Input}/>
          </form>

        </div>
      </div>
    )
  }

  /* Do i ned This ?


  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/photos')
      .then((res)=>{
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      })
  };

  */
}
const Wrapper = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '0',
  padding: '30px',
  width: '100%',
};
const Search = {
  display: 'flex',
  flexDirection: 'column',
  width: '250px',
};
const Input = {
  height: '30px',
  border: '0',
  borderBottom: '1px solid black',
};


export default Home;
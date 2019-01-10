import React, {Component} from 'react';


class Home extends Component {
  state = {
    value: '',
  };
  inputChangeHandler = (e) => {
    this.setState({
      value: e.target.value
    });
  };

  render() {
    return (
      <div className="wrapper" style={Wrapper}>
        <div style={Search}>
          <label htmlFor="search">Search</label>
          <input type="text"
                 name="search"
                 id="search"
                 onChange={this.inputChangeHandler}
                 style={Input}/>
        </div>
      </div>
    )
  }




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
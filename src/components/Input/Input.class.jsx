import React from 'react';
import './input.scss';

class Input extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    })
  }

  // componentDidMount() {
  //   fetch()
  // }

  // componentDidUpdate(prevProps, nextProps) {
  //   if (prevProps.id !== nextProps.id) {
  //     fetch(id);
  //   }
  // }


  render() {
    return (
      <label>
        {this.props.label}
        <input className='input' value={this.state.value} name={this.props.name} type='text' onChange={this.handleChange} />
      </label>
    )
  }
}

export default Input

import React from 'react';

function Hoc(WrappedComponent) {
    return class PP extends React.Component {
      constructor(props) {
        super(props)
        this.state = {
          name: ''
        }
        this.onNameChange = this.onNameChange.bind(this)
      }
        
      onNameChange(event) {
          console.log(9087)
        this.setState({
          name: event.target.value
        })
      }
        
      render() {
        const newProps = {
          value: this.state.name,
          onChange: this.onNameChange
        }
        return <WrappedComponent {...this.props} {...newProps}/>
      }
    }
  }
  
  @Hoc
  class HocDemo extends React.Component {
    render() {
      return <div>
          <br />
          <div>HocDemo：</div>
          <input name="name" {...this.props.name}/>
      </div>
    }
  }

  export default HocDemo
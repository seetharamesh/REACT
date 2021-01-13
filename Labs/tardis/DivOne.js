class DivOne extends React.Component {
  state = {
  tardis: {
  name: 'Time and Relative Dimension in Space',
  caps: false,
}
}

  changeIt = (text) => {
  if (this.state.tardis.caps) {
    this.setState({
      tardis: {
        name: text.toLowerCase(),
        caps: false
      }
    })
  } else {
    this.setState({
      tardis: {
        name: text.toUpperCase(),
        caps: true
      }
    })
  }
}

    render() {
      console.log("inside DivOne");
        return (
          <div id="divone">
          <DivTwo passingProp1 = {this.state.tardis} passingProp2={this.changeIt}/>
          </div>
          // <div id="divone">
          //     <h3 onClick={() => this.changeIt(this.state.tardis.name)}> {this.state.tardis.name}</h3>
          // </div>
        )
    }
}

class DivThree extends React.Component {
  state = {
  tardis: {
  name: 'Time and Relative Dimension in Space',
  caps: false
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

render(){
  console.log("Inside DivThree");
  return(
    <div id="appcomponent">
    <h3 onClick={() => (this.changeIt(this.state.tardis.name))}> {this.state.tardis.name}</h3>
    </div>
  )
}
}//end of class App

ReactDOM.render(
<App />, document.getElementById('root')
);

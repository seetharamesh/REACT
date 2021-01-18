class App extends React.Component {
  state = {
    baseURL: "https://taco-randomizer.herokuapp.com/random/?full-tack=true",
    taco: { shell: {}, seasoning: {}, base_layer: {}, mixin: {}, condiment: {} }
  };
  // The componentDidMount method is a great place to request data from the server since even though
  // setting the state(using setState) will cause a second render, it happens before the browser updates the screen.
  // The user will not see the intermediate state.
  // What Exactly Just Happened?
  // What's happening here is:
  // 1. The component will start to get inserted into the DOM.
  // 2. The initial render happens (with an empty array for taco).
  // 3. Then componentDidMount() is called
  // 4. Once that request successfully finishes, setState() is called and the taco property will be updated

  componentDidMount() {
    console.log("componentdidmount");
    fetch(this.state.baseURL)
      .then((response) => {
        console.log("test");
        return response.json();
      })
      .then(
        (json) => {
          this.setState({ taco: json });
        },
        (error) => {
          console.log(error);
        }
      );
  }

  render() {
    console.log("inside App renderd");
    console.log(this.state.taco);
    return (
      <div>
        <h1>Random Taco</h1>
        <h2>Shell:{this.state.taco.shell.name}</h2>
        <h4>{this.state.taco.shell.recipe}</h4>
        <h2>Mixin:{this.state.taco.mixin.name}</h2>
        <h4>{this.state.taco.mixin.recipe}</h4>
        <h2>Condiment:{this.state.taco.condiment.name}</h2>
        <h4>{this.state.taco.condiment.recipe}</h4>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));

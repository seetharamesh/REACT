class App extends React.Component {
    state = {
        baseURL: 'http://taco-randomizer.herokuapp.com/random/?full-tack=true',
        taco:[]
    }
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
        .then((response) => response.json())
        .then(json => {
            this.setState({ taco: json  });
        }
      );
    }

    render () {
      console.log("inside App render");
       console.log(this.state.taco);
        return (
          <div>
         </div>
        )
      }
  }

  ReactDOM.render(
    <App />,
    document.querySelector('.container')
  )

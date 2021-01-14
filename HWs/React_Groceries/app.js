const groceries = [
  {
    item: 'Bread',
    brand: 'Kirkland',
    units: 'one loaf',
    quantity: 2,
    isPurchased: true
  },
  {
    item: 'Milk',
    brand: 'Wesley Farms',
    units: 'one Gallon',
    quantity: 1,
    isPurchased: true
    },
  {
    item: 'Eggs',
    brand: 'Eggland Best',
    units: 'one carton',
    quantity: 1,
    isPurchased: true
  }
]
//console.log(groceries);

class App extends React.Component{
  //no need of this.state as there's no props or child components
  state =  {
    groceries:groceries,
    item:'',
    quantity:0,
    units:''
    //isPurchased:false
  }//state is a JS object
  //This method handleChange makes the textbox editable. It validates for only numbers to be entered using regular expression
  handleChange = (event) =>{
    const re = /^[0-9\b]+$/;
      if (event.target.value === '' || re.test(event.target.value)) {
         this.setState({[event.target.id]: event.target.value})
       }
    //this.setState({[event.target.id]: event.target.value})
  }
//This method is added to validate only characters to be entered in textbox of name and unit
  handleTextChange = (event) =>{
    const re = /[A-Za-z]/ig;
      if (event.target.value === '' || re.test(event.target.value)) {
         this.setState({[event.target.id]: event.target.value})
       }
  }

  //submit button method. The setState of the new items are set to purchased as true (or false). It's a hard coded user option.
  //
  handleSubmit = (event) =>{
    event.preventDefault()
    const newItem = {
      item: this.state.item,
      quantity: this.state.quantity,
      units: this.state.units,
      isPurchased:true
    }
    this.setState({
      groceries: [ newItem, ...this.state.groceries],
      item: '',
      quantity:0,
      units: ''
    })
}


  render(){
    const listStyles = {color:'orange'}
    return(
      <div className = "groceriesApp">
      <h1>Welcome to Online Shopping!!</h1>
      <form onSubmit={this.handleSubmit}>
          <label htmlFor='item'>Item </label>
          <input type='text' value={this.state.item} onChange={this.handleTextChange} id='item' placeholder='Name of the item' />
          <br /><br />
          <label htmlFor='quantity'>Quantity </label>
          <input type='number' value={this.state.quantity} onChange={this.handleChange} id='quantity' />
          <br /><br />
          <label htmlFor='units'>Units </label>
          <input type='units' value={this.state.units} onChange={this.handleTextChange} id='units' placeholder='Enter name of units' />
          <input type="submit" />
          <br />
      </form>

      <div>
          <h2>Preview our new item</h2>
          <h3>{this.state.item} {"  "} {this.state.quantity} {"  "}{this.state.units}</h3>
      </div>

      <ul>
      {this.state.groceries.map(grocery => {
                          return (grocery.isPurchased ?
                                  <li><span style={listStyles}>Item: </span>{grocery.item}{'  '}
                                      <span style={listStyles}>Qty: </span>{grocery.quantity}{'  '}
                                      <span style={listStyles}>Units: </span>{grocery.units}{'  '}
                                  </li> : null
                                )
                              }
        )
      }
      </ul>
        </div>
    )
}
}//end of class App

ReactDOM.render(
  <App />, document.getElementById('root')
);


//ignore this toggle method right now as it's for "stretch" practice
// handleToggle = () =>{
//   this.setState(() =>({
//     isPurchased: !this.state.isPurchased
//   }))
// }
// <button type="button" >REMOVE</button>

// <h1 onClick={this.handleToggle}> Happy Shopping!</h1>
// {!this.state.isPurchased ? <h2>Thank you for your purchase </h2> : <h2>Find a better Price next time!</h2>}

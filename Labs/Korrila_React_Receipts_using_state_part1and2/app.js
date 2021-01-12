const receipt1 =
  {
  person: 'Karolin',
  order: {
    main: 'Burrito',
    protein: 'Organic Tofu',
    rice: 'Purple Rice',
    sauce: 'Green Crack',
    toppings: [
      'Baby Bok Choy', 'Cucumber Kimchi'
    ],
     drink: 'Korchata',
    cost: 22
  },
   paid: false
 }
 const receipt2 = {
   person: 'Jerrica',
   order: {
     main: 'Rice Bowl',
     protein: 'Ginger Soy Chix',
     rice: 'Sticky Rice',
     sauce: 'Korilla',
     toppings: [
       'Yuzu Pickled Sweet Pepper', 'Kale'
     ],
     drink: 'Korchata',
     cost: 19
   },
   paid: false
 }
 const receipt3 = {
  person: 'Matt',
  order: {
    main: 'Salad Bowl',
    protein: 'Organic Tofu',
    rice: 'none',
    sauce: "K'lla",
    toppings: [
      'Blue Potato Salad', 'Pico De Gallo', 'Red Kimchi'
    ],
    drink: 'Sparkling Blood Orange Soda',
    cost: 20
  },
  paid: true
}
//child component
class Receipt extends React.Component{
    render(){
      const styles = {color:'rgb(180, 50, 201)'}
      console.log("inside receipt");
      console.log(this.props.receipt.person);
      console.log(this.props.receipt.paid);
      return(
            <div className = "receipt">
                <h2>Name:{this.props.receipt.person}</h2>
                <h3><span style={styles}>Main:</span>{this.props.receipt.order.main}</h3>
                <h3><span style={styles}>Protein:</span>{this.props.receipt.order.protein}</h3>
                <h3><span style={styles}>Rice:</span>{this.props.receipt.order.rice}</h3>
                <h3><span style={styles}>Sauce:</span>{this.props.receipt.order.sauce}</h3>
                <h3><span style={styles}>Topping1:</span>{this.props.receipt.order.toppings[0]}</h3>
                <h3><span style={styles}>Topping2:</span>{this.props.receipt.order.toppings[1]}</h3>
                <h3><span style={styles}>Drink:</span>{this.props.receipt.order.drink}</h3>
                <h3><span style={styles}>Cost:</span>{this.props.receipt.order.cost}</h3>
            </div>
      )
    }
}//end of Receipt class

//parent component
class App extends React.Component{
  // constructor(props){
  //   super(props)
  state =  {
    receipt1:receipt1,
    receipt2:receipt2,
    receipt3:receipt3
  };//state is a JS object
// }

  render(){
    //console.log(this.state.receipt1);
    return(
      <div>
        <Receipt receipt={this.state.receipt1} />
        <Receipt receipt={this.state.receipt2} />
        <Receipt receipt={this.state.receipt3} />
      </div>
    )
  }
}//end of class App

ReactDOM.render(
  <App />, document.getElementById('root')
);

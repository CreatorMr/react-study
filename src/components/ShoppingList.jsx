import React from "react";
class ShoppingList extends React.Component {
  render() {
    const { goDetail, customize } = this.props;
    return (
      <div className="shoppingList" onClick={goDetail}>
        <h1>Shopping List for {this.props.name}</h1>
        <div> {customize && <div>{customize}</div>}</div>
        {/* <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul> */}
      </div>
    );
  }
}
export default ShoppingList;

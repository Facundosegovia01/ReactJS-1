const ItemListContainer = (props) => {
    console.log(props);
    return (
      <div>
        <h1>{props.label}</h1>
        <p>Items: </p>
      </div>
    );
  };
  
  export default ItemListContainer;
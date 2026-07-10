function ErrorMessage(props ) {
  let food_Items = props.items;
  return (
    <>
      {food_Items.length === 0 ? <h1>No Food Items Available</h1> : null}
    </>

  );
}

export default ErrorMessage;
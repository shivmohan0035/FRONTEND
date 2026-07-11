import style from "./Container.module.css";

const Container = (props) => {
  return (
    <div className={style.container}> 
      {props.children}
    </div>
  );
};

export default Container;


// Container is a functional component that serves as a
//  ===> wrapper for other components or elements.
 
//  The component takes in props and renders any child elements passed to it through `props.children`, allowing for flexible ====> composition of UI elements within the container.
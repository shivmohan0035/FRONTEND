  function About(){

    let name = "This is Shivmohan profile....";

    let fullName = ()=>{
      return "Shivmohan Chaurasia";
    };


    return (
      <div>
        <h3 style={{ color: 'black' , backgroundColor: 'pink' ,display:'flex',justifyContent:'center' }}>About Page : {name} 
        </h3>
        <p style={{color:'red',backgroundColor:'orange',display:'flex',justifyContent:'center'}}> Name: {fullName()}</p>
        

      </div>
    );
  }

  export default About;

//simple react component render an element
function Mycomponent (props) {
   const name = "basil"
   const user = {
    name: 'basil baha',
    email: 'basilbaha99@gmail.com',
    location: 'cairo',
    mobile: '12345678',}

   const myalert = () => {
    alert("hi");
  }
    return(
    <div>
        <button onClick={myalert}>make an allert</button>
        <Greetings name={name} />
        <Component/>
        <MyInfo {...user}/>
    </div>      
    )
}
//greeting component using dynamic variable
function Greetings  (props) {
    return(
   <p>
     Hello, {props.name}
   </p>
  )};
//conditional rendering
  function Component(props) {
    const condition = true;
    if (condition === true) {
      return <p>Fetch success</p>;
    } else {
      return <p>Fetch failed</p>;
    }
  }

  //react fragment

  function MyInfo ({ name, email, location, mobile }){
    return(
     <React.Fragment>
        <div>
            <strong>Name:</strong> {name}
        </div>
        <div>
            <strong>Email:</strong> {email}
         </div>
         <div>
             <strong>Location:</strong> {location}
         </div>
         <div>
             <strong>Mobile:</strong> {mobile}
        </div>


        </React.Fragment>
    )
  }

  

 

ReactDOM.createRoot(document.getElementById("root")).render(<Mycomponent/>)
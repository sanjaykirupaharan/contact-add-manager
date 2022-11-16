import React from 'react'

class AddContact extends React.Component{
   state = {
      name: "",
      email:"",
   };


      add = (e) => {
         e.preventDefault();
         if(this.state.name === "" || this.state.email === "" ) {
            alert ("All the fields are mandatory");
            return
         }
         this.props.addContactHandler(this.state); 
         this.setState({ name:"", email:"" });
         console.log(this.state);
      }

    render() {
      return(
         <div className='ui main'>

            <h3>Add Contact</h3>

            <form className='ui form' onSubmit={this.add}>
               <div className="field">
                  <label >Name</label>
                  <input type="text" name='name' placeholder='Name' onChange={(e) => this.setState({name: e.target.value })} value={this.state.name}/>
               </div>

               <div className="field">
                  <label htmlFor="">Email</label>
                  <input type="text" name='email' placeholder='Email' onChange={(e) => this.setState({email: e.target.value })} value={this.state.email}  />
               </div>
               <button className='ui button blue'>Add </button>
            </form>
         </div>
      )
    } 
}

export default AddContact ;
import React from 'react';
import './Formsection.css'

function Form (){
    return(
        <div className="form-section">
            <h2>Form</h2>
             <form>
              <label for="fname">First name:</label>
              <input type="text" id="fname" name="fname"/><br/>
              <label for="lname">Last name:</label>
              <input type="text" id="lname" name="lname"/><br/>
              <button>submit</button>
            </form>
        </div>
    )
}
export default Form;
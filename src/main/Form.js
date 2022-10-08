import React, {Fragment} from "react";


const style = {
    backgroundColor:"black",
    position:"absolute",
    bottom: 0,
    width:"100%",
    height:80,
}

const Form = () => {
    return(
        <div className="form">
          <form>
              <input type="email"/>
          </form>
        </div>
    )
}

export default Form;
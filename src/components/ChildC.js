import React from 'react';
import {useContext} from 'react';
import {data, data1} from './UseContextHook';


function ChildC() {

  const name = useContext(data);
  const gender = useContext(data1);

  return (

    <div>

      <data.Consumer>
        {
          (name) => {
            return(
                <data1.Consumer>
                  {
                    (gender) => {
                      return(
                        <h1>My name is {name} and my gender is {gender}</h1>
                      )
                    }
                  }
                </data1.Consumer>
            )
          }
        }
      </data.Consumer>

      <h1>My name is {name} and my gender is {gender}</h1>  
    </div>

  )
}

export default ChildC
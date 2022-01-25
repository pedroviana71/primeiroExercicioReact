import React from "react";

const data = [
  {
    name: '😃 William',
    location: '🏘️ Lagos',
    car: '🚘 Honda'
  },
  {
    name: '😃 Chris',
    location: '🏘️ Moon',
    car: '🚘 Tesla'
  },
  {
    name: ' 😃 Rose',
    location: '🏘️ Venice',
    car: '🚘 Pagani'
  },
  {
    name: '😃 Mike',
    location: '🏘️ Milan',
    car: '🚘 Rolls Royce'
  },
  {
    name: '😃 Liz',
    location: '🏘️ Beirut',
    car: '🚘 Mercedes'
  }
]

const UsePessoas = () => {    
    const [people, setPeople] = React.useState(data)
    
    return (
        <React.Fragment>
            {
                people.map((person)=>{
                    //console.log(person);
                    const {name, location, car} = person
                    return (
                        <div key={name} className="lista">
                            <h3>{name}</h3>
                            <h4>{location}</h4>
                            <h4>{car}</h4>
                        </div>
                    ) 
                })
            }
        </React.Fragment>
    )
};


export default UsePessoas;
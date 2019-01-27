import React, { Component } from 'react'

export default class Classes extends Component {
    
  render() {
      class Person{
        constructor(name = "Not set", age=0){
            this.name = name
            this.age = age
        }

        getGreeting(){
            //return ' Hello ' + this.name + '!'
            return `Hello ${this.name} !`
        }

        getDescription(){
            return ` ${this.name} is ${this.age} Years old`
        }
      }

      const me = new Person('Robert Hunn',37,'AA degree');
      console.log(me);

      const other = new Person();
      console.log(other);






    return (
      <div>
        
      </div>
    )
  }
}


class Student extends Person{
    constructor(name,age,major="undecided"){
        super(name,age)
        this.major=major
    }
}

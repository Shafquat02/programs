// Base class: Person
class Person {
    constructor(name, age) {
      
      this.name = name;
      this.age = age;
    }
  
    displayInfo() {
      
      console.log(`Name: ${this.name}`);
      console.log(`Age: ${this.age}`);
    }
  }
  
  // Base class
  class Employee {
    constructor(employeeID, department) {
      
      this.employeeID = employeeID;
      this.department = department;
    }
  
    displayEmployeeInfo() {
     
      console.log(`Employee ID: ${this.employeeID}`);
      console.log(`Department: ${this.department}`);
    }
  }
  
  // Derived class
  class Manager extends Person {
    constructor(name, age, employeeID, department) {
      
      super(name, age);
      this.employeeID = employeeID;
      this.department = department;
    }
  
    displayInfo() {
      super.displayInfo(); 
      console.log(`Employee ID: ${this.employeeID}`);
      console.log(`Department: ${this.department}`);
    }
  }
  
  const manager = new Manager("Nishtha Bharti", 19, "4210", "IT");
  manager.displayInfo();
class Person {
  DisplayInfo(name) {
    console.log(`Name: ${name}`);
  }

  DisplayInfo(name, age) {
    console.log(`Name: ${name}, Age: ${age}`);
  }
}
class Employee extends Person {
  constructor(name, age, salary) {
    super();
    this.salary = salary;
  }

  DisplayInfo(name, age) {
    console.log(`Name: ${name}, Age: ${age}, Salary: ${this.salary}`);
  }
}
const person = new Person();
const employee = new Employee("Jasmin", 30, 50000);

person.DisplayInfo("Jasmin", 23);

person.DisplayInfo("Jasmin", 25);

employee.DisplayInfo("Jasmin", 30); 

employee.DisplayInfo("Jasmin"); 
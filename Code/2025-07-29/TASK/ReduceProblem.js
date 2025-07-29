const employees = [
  { name: "Alice", department: "HR" },
  { name: "Bob", department: "IT" },
  { name: "Charlie", department: "HR" },
];

// const formatEmployees = employees.reduce((employee, index, employees) => {
//  employee
// });
// console.log(formatEmployees);
const formatEmployees = {};
employees.forEach((employee, index, employees) => {
  console.log(employee.department);
  // formatEmployees.employee.department=employee.name
  
});
console.log(formatEmployees)
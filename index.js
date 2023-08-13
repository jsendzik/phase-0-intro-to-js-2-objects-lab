const employee = {
    name: "Jacob",
    streetAddress: "12184 Cannes",
}
function updateEmployeeWithKeyAndValue(employee, streetAddress, value) {
    const employees = {...employee};
    employees.streetAddress = value;
    return employees;
};
function destructivelyUpdateEmployeeWithKeyAndValue(employee, streetAdress, value) {
    employee.streetAddress = value;
    return employee;
};
function deleteFromEmployeeByKey(employee, name) {
    const employees = {...employee};
    delete employees.name;
    return employees;
}
function destructivelyDeleteFromEmployeeByKey(employee, name) {
    delete employee.name;
    return employee;
};
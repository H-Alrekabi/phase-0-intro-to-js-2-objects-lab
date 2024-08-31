// Write your solution in this file!
const employee = {
    name: "Sam",
    streetAddress: "11 Broadway",
};

function updateEmployeeWithKeyAndValue(employee, name, streetAddress) {
    const employees = {...employee};
    employees["streetAddress"] = "11 Broadway";
    return employees;
};

function destructivelyUpdateEmployeeWithKeyAndValue(employee, name, streetAddress) {
    employee["streetAddress"] = "12 Broadway";
    return employee;
};

function deleteFromEmployeeByKey(employee, name, streetAddress) {
    const employee2 = {...employee};
    delete employee2.name;
    return employee2;
};

function destructivelyDeleteFromEmployeeByKey(employee, name, streetAddress) {
    delete employee.name;
    return employee;
};
/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function createEmployeeRecord(array) {
    let employeeInfo = {}
    employeeInfo.firstName = array[0];
    employeeInfo.familyName = array[1];
    employeeInfo.title = array[2];
    employeeInfo.payPerHour = array[3];
    employeeInfo.timeInEvents = [];
    employeeInfo.timeOutEvents = [];
    return employeeInfo;
}

function createEmployeeRecords(arrays) {
    let a = arrays.map(array => {
        return createEmployeeRecord(array)
    })
    return a;
}

function createTimeInEvent(dateTime) {
    let newArray = dateTime.split(" ");
    let date = newArray[0]
    let hour = parseInt(newArray[1])
    let timeIn = {
        type: "TimeIn" ,
        hour: hour ,
        date: date
    }
    this.timeInEvents.push(timeIn)
    return this
}

function createTimeOutEvent(dateTime) {
    let newArray = dateTime.split(" ");
    let date = newArray[0]
    let hour = parseInt(newArray[1])
    let timeOut = {
        type: "TimeOut" ,
        hour: hour ,
        date: date
    }
    this.timeOutEvents.push(timeOut)
    return this
}

function hoursWorkedOnDate(dateTime) {
    let timeIn = this.timeInEvents.find(event => event.date === dateTime)
    let timeOut = this.timeOutEvents.find(event => event.date === dateTime)
    return (timeOut.hour - timeIn.hour) / 100  
}

function wagesEarnedOnDate(dateTime) {
    return hoursWorkedOnDate.call(this, dateTime) * this.payPerHour
}

function findEmployeeByFirstName(arrays, firstName) {
    let array = {}
    return arrays.find(array => (firstName === array.firstName))
}

function calculatePayroll(employeeRecords) {
    console.log(employeeRecords)
    let payroll = 0
    employeeRecords.forEach(employee => {
    payroll += allWagesFor.call(employee)
    })
    console.log(payroll)
    return payroll
}

const state = {

    name: '',
    officeNum: '',
    phoneNum: '',
    command: '',


    employeeList: [
        {
            name: 'Jan',
            officeNum: 1,
            phoneNum: '(222)-222-2222'
        },
        {
            name: 'Juan',
            officeNum: 304,
            phoneNum: '(489)-789-8789'
        },
        {
            name: 'Margie',
            officeNum: 789,
            phoneNum: '(789)-789-7897'
        },
        {
            name: 'Sara',
            officeNum: 32,
            phoneNum: '(222)-789-4654'
        },
        {
            name: 'Tyrell',
            officeNum: 3,
            phoneNum: '(566)-621-0452'
        },
        {
            name: 'Tasha',
            officeNum: 213,
            phoneNum: '(789)-766-5675'
        },
        {
            name: 'Ty',
            officeNum: 211,
            phoneNum: '(789)-766-7865'
        },
        {
            name: 'Sarah',
            officeNum: 345,
            phoneNum: '(222)-789-5231'
        }
    ],

    render: function (htmlStr) {
        $('#list').html(htmlStr);
    }
}

const runCommand = function (e) {
    e.preventDefault();
    switch (state.command) {
        case 'print':
            let htmlStr = '';
            state.employeeList.forEach(e => htmlStr += `<div class='box'>Name: ${e.name}<br> Office Number: ${e.officeNum}<br> Phone: ${e.phoneNum} </div>`)
            state.render(htmlStr);
            break;
        case 'verify':
            name = $('#name').val();
            const match = state.employeeList.find(e => e.name.toLowerCase() === name.toLowerCase());
            if (match) {
                state.render(`<div class='box'>Employee Found</div>`);
            } else {
                state.render(`<div class='box'>Employee Not Found</div>`);
            }
            break;
        case 'lookup':
            nameLookup = $('#name').val();
            const matchLookup = state.employeeList.find(e => e.name.toLowerCase() === nameLookup.toLowerCase());
            if (matchLookup) {
                state.render(`<div class='box'>Name: ${matchLookup.name}<br> Office Number: ${matchLookup.officeNum}<br> Phone: ${matchLookup.phoneNum} </div>`);
            } else {
                state.render(`<div class='box'>Employee Not Found</div>`);
            }
            break;
        case 'contain':
            let containStr = ''
            nameContain = $('#name').val();
            if (nameContain) {
                state.employeeList.filter(e => e.name.toLowerCase().includes(nameContain.toLowerCase()))
                    .forEach(e => containStr += `<div class='box'>Name: ${e.name}<br> Office Number: ${e.officeNum}<br> Phone: ${e.phoneNum} </div>`);
                state.render(containStr || `<div class='box'>Employee Not Found</div>`);
            }
            break;
        case 'update':
            state.name = $('#name').val();
            state.officeNum = $('#office').val();
            state.phoneNum = $('#phone').val();
            const nameMatch = state.employeeList.find(e => e.name.toLowerCase() === state.name.toLowerCase());
            if (nameMatch) {
                nameMatch.officeNum = state.officeNum;
                nameMatch.phoneNum = state.phoneNum;
                state.render(`<div class='box'>Name: ${nameMatch.name}<br> Office Number: ${nameMatch.officeNum}<br> Phone: ${nameMatch.phoneNum} </div>`);
            } else {
                state.render(`<div class='box'>Employee Not Found</div>`);
            }
            break;
        case 'add':
            let newEmployee = {};
            let addString = '';
            newEmployee.name = $('#name').val();
            newEmployee.officeNum = $('#office').val();
            newEmployee.phoneNum = $('#phone').val();
            state.employeeList.push(newEmployee)
            state.employeeList.forEach(e => addString += `<div class='box'>Name: ${e.name}<br> Office Number: ${e.officeNum}<br> Phone: ${e.phoneNum} </div>`)
            state.render(addString);
            break;
        case 'deleter':
            deleteName = $('#name').val();
            let deletetStr = '';
            const matchDelete = state.employeeList.find(e => e.name.toLowerCase() === deleteName.toLowerCase());
            if (matchDelete) {
                state.employeeList.splice(state.employeeList.indexOf(matchDelete), 1);
                state.employeeList.forEach(e => deletetStr += `<div class='box'>Name: ${e.name}<br> Office Number: ${e.officeNum}<br> Phone: ${e.phoneNum} </div>`)
                state.render(deletetStr);
            } else {
                state.render(`<div class='box'>Employee Not Found</div>`)
            }
            break;
    }

};

const print = function () {
    state.command = 'print';
    $('#submit').removeClass('hide');
    $('.header2a').addClass('header2b');
    $('.header').addClass('hide')
    $('#list').empty();
    $('#name').addClass('hide');
    $('#office').addClass('hide');
    $('#phone').addClass('hide');
}

const verify = function () {
    state.command = 'verify'
    $('#submit').removeClass('hide');
    $('#name').removeClass('hide');
    $('#office').addClass('hide');
    $('#phone').addClass('hide');
    $('.header2a').addClass('header2b');
    $('.header').addClass('hide');
    $('#list').empty();

}

const lookup = function () {
    state.command = 'lookup'
    $('#submit').removeClass('hide');
    $('#name').removeClass('hide');
    $('#office').addClass('hide');
    $('#phone').addClass('hide');
    $('.header2a').addClass('header2b');
    $('.header').addClass('hide');
    $('#list').empty();
}
const contain = function () {
    state.command = 'contain'
    $('#submit').removeClass('hide');
    $('#name').removeClass('hide');
    $('#office').addClass('hide');
    $('#phone').addClass('hide');
    $('.header2a').addClass('header2b');
    $('.header').addClass('hide');
    $('#list').empty();
}
const update = function () {
    state.command = 'update'
    $('#submit').removeClass('hide');
    $('#name').removeClass('hide');
    $('#office').removeClass('hide');
    $('#phone').removeClass('hide');
    $('.header2a').addClass('header2b');
    $('.header').addClass('hide');
    $('#list').empty();
}
const add = function () {
    state.command = 'add'
    $('#submit').removeClass('hide');
    $('#name').removeClass('hide');
    $('#office').removeClass('hide');
    $('#phone').removeClass('hide');
    $('.header2a').addClass('header2b');
    $('.header').addClass('hide');
    $('#list').empty();
}
const deleter = function () {
    state.command = 'deleter'
    $('#submit').removeClass('hide');
    $('#name').removeClass('hide');
    $('#office').addClass('hide');
    $('#phone').addClass('hide');
    $('.header2a').addClass('header2b');
    $('.header').addClass('hide');
    $('#list').empty();
}





$('#print').on('click', print)
$('#verify').on('click', verify)
$('#lookup').on('click', lookup)
$('#contain').on('click', contain)
$('#update').on('click', update)
$('#add').on('click', add)
$('#deleter').on('click', deleter)
$('#submit').on('click', runCommand);




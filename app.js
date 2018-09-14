const state = {

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
    ]
}

let command = '';

const runCommand = function(e){
    e.preventDefault();
    switch (command){
    case 'print':
    let htmlStr ='';
    state.employeeList.forEach(e => htmlStr += `<div class='box'>Name: ${e.name}<br> Office Number: ${e.officeNum}<br> Phone: ${e.phoneNum} </div>` )
    render(htmlStr);
    break;
    case 'verify':
    name = $('#name').val();
    const match = state.employeeList.find(e => e.name.toLowerCase() === name.toLowerCase());
    if (match){
        render(`<div class='box'>Employee Found</div>`);
      }else {
        render(`<div class='box'>Employee Not Found</div>`);
      }
    break;
    case 'lookup':
    nameLookup = $('#name').val();
    const matchLookup = state.employeeList.find(e => e.name.toLowerCase() === nameLookup.toLowerCase());
    if (matchLookup){
        render(`<div class='box'>Name: ${matchLookup.name}<br> Office Number: ${matchLookup.officeNum}<br> Phone: ${matchLookup.phoneNum} </div>`);
      }else {
        render(`<div class='box'>Employee Not Found</div>`);
      }
    break;
    }
   
};



const print = function () {
    command = 'print';
    $('#submit').removeClass('hide');
    $('.header2a').addClass('header2b');
    $('.header').addClass('hide')
    $('#list').empty();
    $('#name').addClass('hide');
}

const verify = function (){
    command = 'verify'
    $('#submit').removeClass('hide');
    $('#name').removeClass('hide');
    $('.header2a').addClass('header2b');
    $('.header').addClass('hide');
    $('#list').empty();

}

const lookup = function (){
    command = 'lookup'
    $('#submit').removeClass('hide');
    $('#name').removeClass('hide');
    $('.header2a').addClass('header2b');
    $('.header').addClass('hide');
    $('#list').empty();

}

const render =function (htmlStr){
$('#list').html(htmlStr);
}

const showForm = function () {
    $('#submit').addClass('show');

}

$('#print').on('click', print )
$('#verify').on('click', verify)
$('#lookup').on('click', lookup)
$('#submit').on('click', runCommand)







// const minimalB = function(){
//     $('input').addClass('header2b');
// }

// const minimalA = function(){
//     $('input').addClass('header2a');
// }

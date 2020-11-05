// 1

obj = {
    anonim: {
        say: 'Hello anonim'
    }, 
    user: {
        say: 'Hello user'
    }, 
    admin: {
        say: 'Hello admin'
    }
}
    
function greeting(who) {
    console.log(this[who].say);
}

greeting.call(obj, 'anonim');

// 2

var user = {name: 'Алексей'};

function func(surname, patronymic) { 
    alert('привет' + ' ' + this.name + ', ' + patronymic + ' ' + surname); 
};

func.apply(user, ['Алексеевич', 'Петров']);

// 3

var user = {name: 'Алексей'}

function func(surname, patronymic) { 
    alert('привет' + ' ' + this.name + ', ' + patronymic + ' ' + surname); 
}

func = func.bind(user);

func('Николаев', 'Иванович'); //тут должно вывести 'привет, Алексей Иванович Николаев '
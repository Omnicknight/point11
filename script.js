//первая задача
var runner = {
    $$runnerId: null,
    $$tasks: [],
    setSpeed: function (speed) {
        this.stop();
        this.start(speed);
    },
    add: function (task) {
        this.$$tasks.push(task);
    },
    start: function (speed) {
        var _this = this;
        this.$$runnerId = setTimeout(function callback() {
            _this.$$tasks.forEach(function (value) {
                // Here
                value();
            })
            _this.$$runnerId = setTimeout(callback, speed);
        }, speed);
    },
    stop: function () {
        clearTimeout(this.$$runnerId);
    }
}

//вторая задача
runner.add(() => {
    console.log('Hello');
});
runner.add(() => {
    console.log('World');
});

runner.setSpeed(2000);

const maps = (arr, cb) => {
    let arr2 = [];
    for(let i = 0; i < arr.length; i++) {
        arr2[i] = cb(arr[i], i, arr);
    };
    return arr2;
}

//проверки
const a =[1,2,3];

const qwer = maps(a, function (value) {
    return value + 5;
});
console.log(qwer);

const asdf = maps(['1', '2', '3'], (Number));
console.log(asdf);


let celsius = [-15, -5, 0, 10, 16, 20, 24, 32]
let fahrenheit = maps(celsius, t => t * 1.8 + 32);
console.log(fahrenheit);
// fahrenheit is [5, 23, 32, 50, 60.8, 68, 75.2, 89.6]

let users = [
    { id: 11, name: 'Adam', age: 23, group: 'editor' },
    { id: 47, name: 'John', age: 28, group: 'admin' },
    { id: 85, name: 'William', age: 34, group: 'editor' },
    { id: 97, name: 'Oliver', age: 28, group: 'admin' }
  ];
  console.log(maps(users, ({id, age, group}) => `\n${id} ${age} ${group}`).join(''));
  // it returns:
//   "
//   11 23 editor
//   47 28 admin
//   85 34 editor
//   97 28 admin"
let arrr = [1, 2, 3, 4, 5];

let result = maps(arrr, function(value, i) {
	return value * i;
});

console.log(result);
const strings = ['Mykola', 'Ivan', 'Andrii', 'Viktor', 'Sergii', 'Olha', 'Oksana', 'Maks', 'Vasyl'];
const numbers = [10, 5, 25, 3, 0, -122, 15];
const booleans = [true, false, true, false, true];
const anyValues = [null, 'Maks', 28, true, null, 'QA', { name: 'Maks' }, [1, 2, 3]];

const total = numbers.reduce((sum, num) => sum + num);
console.log(total);

const sortedNumbers = numbers.sort((a, b) => a - b);
console.log(sortedNumbers);

const filteredNumbers = numbers.filter(num => num > 0);
console.log(filteredNumbers);

const find1 = anyValues.find(value => value != null);
console.log(find1);

const find2 = strings.find(value => value === 'Andrii');
console.log(find2);

const index = strings.indexOf('Viktor');
console.log(index);

const concatArray = anyValues.concat(booleans);
console.log(concatArray);

// У массивів немає методу groupBy, судячи по https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// const groupedEvenNumbers = numbers.groupBy(num => num % 2 === 0);
// console.log(groupedEvenNumbers);

strings.forEach((name) => {
    if (name.length >= 5) {
        console.log(name);
    }

});

const stringsQA = strings.map(value => value + ' QA');
console.log(strings);
console.log(stringsQA);

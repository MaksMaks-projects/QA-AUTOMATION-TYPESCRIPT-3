import { sumArrayElements } from './functions.js';
import { sumArrayElementsArrow } from './arrow-functions.js';
import { automationQaCourse } from './getter-setters.js';

const arrayStrings = ['Maks', 'QA', 'JavaScript', 'Testing'];
const arrayNumbers = [1, 2, 3, 4, 5, 10, 20, 30, 40, 50];

console.log(sumArrayElements(arrayStrings));
console.log(sumArrayElements(arrayNumbers));

console.log(sumArrayElementsArrow(arrayStrings));
console.log(sumArrayElementsArrow(arrayNumbers));

console.log(automationQaCourse.mentorName);
console.log(automationQaCourse.mentorEmail);
automationQaCourse.mentorEmail = 'newemail@test.com';
console.log(automationQaCourse.mentorEmail);
console.log(automationQaCourse.getCourseSummary());

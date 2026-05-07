const age = 28;
const gender = 'male';
const hasDocument = true;


if (age >= 18) {
    console.log('You are an adult');
}

if (age < 18) {
    console.log('Access denied - too young');
} else if (age >= 18 && hasDocument && gender === 'male') {
    console.log('Access granted for - adult male with document');
} else if (age >= 18 && hasDocument && gender === 'female') {
    console.log('Access granted for - adult female with document');
} else if (age >= 18 && !hasDocument) {
    console.log('Access denied - no document');
} else {
    console.log('WHO ARE YOU???? :)');
}

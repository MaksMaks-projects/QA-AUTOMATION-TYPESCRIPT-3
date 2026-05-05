const animal = 'lion';

switch (animal) {
    case 'cat':
        console.log('This is a cat');
        break;
    case 'dog': {
        console.log('This is a dog');
        break;
    }
    case 'lion':
        console.log('This is a lion');
        break;
    case 'elephant':
        console.log('This is an elephant');
        break;
    default:
        console.log('Unknown animal');
}

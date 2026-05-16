const automationQaCourse = {
    title: 'QA Automation TypeScript',
    duration: '4 months',

    mentor: {
        name: 'Viacheslav',

        contacts: {
            email: 'test@test.com',
            github: '@vlevkoniuk'
        }
    },

    students: [
        'Maks',
        'Andrii',
        'Olha',
        'Viktor',
        'Stefania'
    ],

    showCourseInfo() {
        console.log(`Course: ${this.title}`);
        console.log(`Duration: ${this.duration}`);
        console.log(`Mentor: ${this.mentor.name}`);
        console.log(`Students: ${this.students}`);
    }
};

automationQaCourse.showCourseInfo();

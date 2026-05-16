export const automationQaCourse = {
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

    get mentorName() {
        return this.mentor.name;
    },

    get mentorEmail() {
        return this.mentor.contacts.email;
    },

    set mentorEmail(newEmail) {
        this.mentor.contacts.email = newEmail;
    },

    getCourseSummary() {
        return `Course: ${this.title}, Duration: ${this.duration}, Mentor: ${this.mentor.name}, Students count: ${this.students.length}, First student: ${this.students[0]}`;
    }
};

class Student {
    name: string;
    courses: Map<string, number>;

    constructor(name: string) {
        this.name = name;
        this.courses = new Map<string, number>();
    }

    addGrade(course: string, grade: number): void {
        this.courses.set(course, grade);
    }

    getAverage(): number {
        let sum = 0;

        for (const grade of this.courses.values()) {
            sum += grade;
        }

        return sum / this.courses.size;
    }
}

function courseProgress(input: string[]): void {
    const students = new Map<string, Student>();

    for (const line of input) {
        const tokens = line.split("|");
        const command = tokens[0]!;

        if (command === "Enroll") {
            const name = tokens[1]!;

            students.set(name, new Student(name));
            console.log(`${name} enrolled.`);
        }

        else if (command === "Grade") {
            const name = tokens[1]!;
            const course = tokens[2]!;
            const grade = Number(tokens[3]!);

            const student = students.get(name);

            if (student) {
                student.addGrade(course, grade);
                console.log(`${name} received ${grade.toFixed(2)} in ${course}.`);
            }
        }

        else if (command === "Average") {
            const name = tokens[1]!;
            const student = students.get(name);

            if (student) {
                console.log(`${name} average grade: ${student.getAverage().toFixed(2)}`);
            }
        }

        else if (command === "Top") {
            let bestStudent: Student | undefined;
            let bestAverage = 0;

            for (const student of students.values()) {
                const avg = student.getAverage();

                if (avg > bestAverage) {
                    bestAverage = avg;
                    bestStudent = student;
                }
            }

            if (bestStudent) {
                console.log(`Top student: ${bestStudent.name} with average grade ${bestAverage.toFixed(2)}`);
            }
        }

        else if (command === "End") {
            break;
        }
    }
}
courseProgress([
    "Enroll|Peter",
    "Enroll|Maria",
    "Grade|Peter|TypeScript Basics|5.50",
    "Grade|Maria|TypeScript Basics|6.00",
    "Grade|Peter|OOP|4.75",
    "Average|Peter",
    "Top",
    "End"
]);
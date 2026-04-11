function summarisePerson(
    id: number,
    firstName: string,
    lastName: string,
    age: number,
    middleName?: string,
    hobbies?: string[],
    workInfo?: [string, number]
): [number, string, number, string, string] {

    const fullName = middleName ? `${firstName} ${middleName} ${lastName}` :
        `${firstName} ${lastName}`;

    const hobbiesInfo = hobbies && hobbies.length > 0 ? hobbies.join(', ') : '-';

    const jobAndSalary = workInfo && workInfo.length > 0 ? `${workInfo[0]} -> ${workInfo[1]}` : '-';

    return [
        id,
        fullName,
        age,
        hobbiesInfo,
        jobAndSalary,
    ];
}
console.log(summarisePerson(12, 'Eliot', 'Des', 20, 'Braylen',
    ['tennis', 'football', 'hiking'], ['Sales Consultant', 2500]))
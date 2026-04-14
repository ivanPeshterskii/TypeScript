enum Days {
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
};

function dayOfWeek(day: number): void {
    console.log(Days[day] || 'error');
}
dayOfWeek(-100);
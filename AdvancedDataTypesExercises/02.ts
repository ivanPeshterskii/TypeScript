function printReservedDay(day: string) {
    enum ReservedDays { 
        Monday = 1,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday,
    }; 

    console.log(ReservedDays[day as keyof typeof ReservedDays] || 'error')
}
printReservedDay('Monday');
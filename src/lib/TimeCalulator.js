
export default function TimeCalculator(start_date, due_date){ 
    const startDate = new Date(start_date);
    const dueDate = new Date(due_date);

    const diffInMilliseconds = dueDate - startDate;

    const millisecondsInSecond = 1000;
    const millisecondsInMinute = millisecondsInSecond * 60;
    const millisecondsInHour = millisecondsInMinute * 60;
    const millisecondsInDay = millisecondsInHour * 24;

    const days = Math.floor(diffInMilliseconds / millisecondsInDay);
    const hours = Math.floor((diffInMilliseconds % millisecondsInDay) / millisecondsInHour);
    const minutes = Math.floor((diffInMilliseconds % millisecondsInHour) / millisecondsInMinute);
    const seconds = Math.floor((diffInMilliseconds % millisecondsInMinute) / millisecondsInSecond);

    return `${days} days, ${hours} hours`
}



// console.log(`Total time between dates:
// ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`);

import updateGrid from './updateGrid.js';

const startDate = new Date('3/18/2026');
const endDate = new Date('3/22/2029');
let prevDate = '3/18/2026';


for (let date = startDate; date < endDate; date.setDate(date.getDate() + 1)) {
    const formattedDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    updateGrid(prevDate, formattedDate);
    prevDate = formattedDate;
}
    


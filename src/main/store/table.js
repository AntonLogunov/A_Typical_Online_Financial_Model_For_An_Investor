import { createStore, createEvent } from "effector";
import * as XLSX from 'xlsx';

export const $table = createStore(XLSX.utils.book_new());
export const addData = createEvent();

$table.on(addData, (table, { nameTable, dataTable }) => {
    // console.log(nameTable)
    // console.log(dataTable)

    const sheetIndex = table.SheetNames.indexOf(nameTable);
    if (sheetIndex !== -1) {
        table.SheetNames.splice(sheetIndex, 1);
        delete table.Sheets[nameTable];
    }

    const newList = XLSX.utils.aoa_to_sheet(dataTable);
    XLSX.utils.book_append_sheet(table, newList, nameTable);
});
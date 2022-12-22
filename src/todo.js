function Todo(title = "", description = "", duedate = "", notes = "") {

    const title1 = title;
    const description1 = description;
    const duedate1 = duedate;
    const notes1 = notes;
    const printob = function () {
        console.log(title1, description1, duedate1, notes1);
    }

    return {
        title1,
        description1,
        duedate1,
        notes1,
        printob
    };
}

module.exports=Todo;
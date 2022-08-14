// Use of Async and Await

const records = [
    { name: "John Smith", designation: "Software Engineer" },
    { name: "Denil Mark", designation: "Software Engineer" }
];

const getRecords = () => {
    setTimeout(() => {
        let output = '';
        records.forEach((record, index) => {
            output += `${++index}. ${record.name} is a ${record.designation} \n`;
        });
        console.log(output);
    }, 1000);
}

const createRecord = (record) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            records.push(record);
            let error = false;
            if(!error) {
                resolve();
            } else {
                reject("Something went wrong!!");
            }
        }, 2000);
    })
    
}

const main = async () => {
    await createRecord({name: "Strive Dev", designation: "Software Engineer"});
    getRecords();
}

main();
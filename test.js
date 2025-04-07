// let data = {
//     "isValid": true,
//     "statusMessage": null,
//     "data": [
//         {
//             "id": 1,
//             "appName": "Citizen Complaint"
//         },
//         {
//             "id": 2,
//             "appName": "Property Tax"
//         },
//         {
//             "id": 16,
//             "appName": "Water Meter"
//         },
//         {
//             "id": 17,
//             "appName": "Hydro Water Meter"
//         },
//         {
//             "id": 5,
//             "appName": "Citizen Facilities"
//         },
//         {
//             "id": 4,
//             "appName": "Important Numbers"
//         }
//     ]
// }
// data.data.forEach(item => {
//     console.log(item.appName);
// });


// // const specificApp = data.data.find(item => item.id === 16);
// // console.log(specificApp);


// // 2nd task
// const data = {
//     "isValid": true,
//     "statusMessage": null,
//     "data": [
//         {
//             "connectionNo": "30/000044",
//             "name": "Pratik Processors, PLOT NO. 509,522",
//             "address": "G.I.D.C PANDESARA, SURAT",
//             "lastBillIssueDate": "20/09/2024",
//             "outstandingAmount": "Outstanding Amt. as on 26/09/2024 Rs.209676.00"
//         }
//     ]
// }

// // data.data.forEach(item => {
// //     console.log((item));
// // });


// data.data.forEach(item => {
//     for (let key in item) {
//         console.log(`${key}: '${item[key]}'`);
//     }
// });


const rawOutput = `{\"getCurrentPahaniDetails\":{\"dcode\":\"18\",\"mcode\":\"1\",\"vCode\":\"1801004\",\"sur_No\":\"2-4A\",\"year\":2024,\"uid\":\"Land_WL\",\"pwd\":\"L@nD@2023\"}},\"vCode\":\"1801004\",\"vName\":\"అన్నంపల్లి\"}`;

const parsedObj = JSON.parse(rawOutput)


console.log(parsedObj)

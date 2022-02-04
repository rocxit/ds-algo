// // let arr = [ {
// //     a: 'abc',
// //     c: [{name: 'roshan'}]
// // }, {
// //     b: 'bcd'
// // }];

// // let obj = JSON.parse(JSON.stringify(arr))

// // obj[0].ce = 'xyz'

// // // console.log(arr[0].c);

// // let arra = ['ad', 'ada', 'ada'];

// // console.log(JSON.stringify(arra));

// // let Obj = {
// //     a: 1,
// //     b: 2
// //   }
  
// //   for(let prop in Obj) {
// //     console.log(`${prop}: ${Obj[prop]}`);
// //   }

// //   for(let i of "String")
// // 	console.log(i)

// let log = console.log;
// let names =["Maxon","Moureen", "Kaihura-nkuba"];

// names.elf = "Lindolf";

// Object.defineProperty(names, "ent",{ value: "Treebard", enumerable: false});
// //by setting enumerable to false above, we cant find this if we loop through
// //setting enumerable to true, we can see it

// log(names)

// for (prop of names){
//   log(prop); //"0" ,"1" ,"2" ,"elf"
// }

// //Example 2
// let middleEarth = {
//   'towns': ["Antact", "Tica"],
//   'races': ["Muk", "Ama", "Pendo"]
// }

// middleEarth.creator = "A.R.R Beader";
// Object.defineProperty(middleEarth, "age",{ value: "3rd", enumerable: false});

// for (prop in middleEarth){
//   console.log(prop); //"0" ,"1" ,"2" ,"elf"
// }

// let arr = Array(3).fill(0);
// console.log(arr);

function getNestedValue(obj, path) {
    let result;
    if (obj[path]) {
        return obj[path]
    }

    for (const prop in obj) {
        if(typeof obj[prop] === 'object') {
            let value = getNestedValue(obj[prop], path);
            if (value) {
                return value;
            }
        }
    }
}

let o = {
    a: 'fs',
    b: 'afa',
    d: {
        t: 'afa'
    },
    c: {
        x: [{
            q: 'qwd',
            e: 'qeqwee'
        }, {
            g: 'sdf',
            k: 'ed'
        }],
        z: 'ada'
    }
}

console.log(getNestedValue(o, 'k'));
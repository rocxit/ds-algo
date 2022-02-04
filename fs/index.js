const fs = require('fs');

function readBottomToTop(lines) {
    let fileSize = fs.statSync('test.txt').size;
    let bytesToRead = 1;
    let position = fileSize - bytesToRead;

    let arr = [];
    fs.open('test.txt', async function (err, fd) {
        let i = 0;
        let str;
        while(i!== lines) {
            let val = await read(fd, bytesToRead, 0, bytesToRead, position);
            
            if (val[0] === '\n') {
                ++i;
            }

            --position;
            bytesToRead++
        }

        console.log(val);
    });
}

function read(fd, bytesToRead, offSet, bytesToRead, position) {
    return new Promise((resolve, reject) => {
        fs.read(fd, Buffer.alloc(bytesToRead), offSet, bytesToRead, position, function(errRead, bytesRead, buffer) {
            val = buffer.toString('utf8');
            return resolve(val);
        });
    })
}

fs.watch("test.txt", (eventType, filename) => {
    console.log("\nThe file", filename, "was modified!");
    console.log("The type of change was:", eventType);
    readBottomToTop(10);
  });
 
// fs.stat('test.txt', function(err, stats) {
//  const fileSize = stats.size;
//  const bytesToRead = 10; 
//  const position = fileSize - bytesToRead;   
//   fs.open('test.txt', 'r', function(errOpen, fd) {
//     fs.read(fd, Buffer.alloc(bytesToRead), 0, bytesToRead, position, function(errRead, bytesRead, buffer) {
//       console.log(buffer.toString('utf8'));
//     });
//   });
// });

console.log("Hello");
function nextGreaterEle(arr) {
    let len = arr.length;

   let stack = []
   stack.push(arr[0])
    for (let i = 1 ; i < len ; ++i) {
        let next = arr[i];
        if (stack.length) {
            let element = stack.pop();
            while (element < next) {
                console.log(`${element}------ ${next}`);

                if (!stack.length) {
                    break;
                }

                element = stack.pop();
            }

            if (element > next) {
                stack.push(element)
            }
        }

        stack.push(arr[i]);
    }

    while(stack.length) {
        console.log(`${stack.pop()}------ -1`);
    }
}

let arr = [4, 5, 2, 25];
let a = [13, 19, 6, 12, 15, 3, 14, 18];

nextGreaterEle(a);
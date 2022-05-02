function max(iterable, key) {
    iterable.map(key)
    return iterable.sort((a, b) => b - a).slice(-1).pop()
}

const reverser = value => -1 * value


function changer(object, key, value) {
    var item = object[key];
    if (Array.isArray(prev)) {
      item.push(value);
    } else if (typeof prev == 'object' && prev != null) {
      item[key] = value;
    } else {
      object[key] = value;
    }
    return null;
}

async function promise_me(truthy) {
    const a = new Promise((resolve, reject) => {
        console.log(1)
        resolve(5)
    }).then(response => {
        console.log(2)
        console.log(3)
        console.log(4)
        const five = response
        console.log(five)
        return five
    })
}
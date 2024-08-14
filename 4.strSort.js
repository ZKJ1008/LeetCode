function func(str) {
    if (str.length === 1) {
        return [str];
    }
    let res = []
    for (let i = 0; i < str.length; i++) {
        let current = str[i]
        let left = str.slice(0, i) + str.slice(i + 1)
        let subs = func(left)
        for (let sub of subs) {
            res.push(current + sub)
        }

    }
    return res
}

let str = 'abc'

let res = func(str)
console.log(res);

const num_loop = () => {
    const n = 10000000;
    console.time("loop")
    for (let i = 0; i < n; i++) {
        console.log("Number", i)
    }
    console.timeEnd("loop")
}

const print_all_even_in_arr = () => {
    const list = [12, 13, 22, 122, 54, 23, 64, 24, 76, 232, 543, 2324, 5643]
    for (let i = 0; i < list.length; i++) {
        if (list[i] % 2 === 0) {
            console.log(list[i])
        }
    }
}

const largest_num_in_arr = () => {
    const list = [12, 13, 22, 122, 54, 23, 64, 24, 76, 232, 543, 2324, 5643, 20000]
    let max = 0
    for (let i = 0; i < list.length; i++) {
        if (list[i] > max) {
            max = list[i]
        }
    }
    console.log("max:", max)
}

const print_name_gender = () => {
    const user = [
        {
            "name": "nagapavan",
            "gender": "male"
        },
        {
            "name": "pavan",
            "gender": "male"
        },
        {
            "name": "aysu",
            "gender": "female"
        }
    ]

    for (let i = 0; i < user.length; i++) {
        if (user[i]["gender"] === "male") {
            console.log(user[i].name)
        }
    }
}

const find_sum = (num1, num2) => {
    return num1 + num2
}

const Calculator = (a, b, type, display) => {
    const res = type(a, b)
    display(res)
}
const sum = (a, b) => {
    return a + b;
}
const sub = (a, b) => {
    return a - b;
}
const display = (data) => {
    console.log("data:", data)
}



let n = 5
const runtimer = () => {
    n -= 1
    console.log("timer:", n)
    if (n == 0) {
        clearInterval(intervalId)
    }
}




const startTime = Date.now()

setTimeout(() => {
    endTime = Date.now()
    diff = endTime - startTime
    console.log("delay", diff)
}, 3 * 1000)


const getTime = ()=>{
    const now = new Date();
    const hour = String(now.getHours()).padStart(2, '0') ;
    const min = String(now.getMinutes()).padStart(2, '0');  
    const sec = String(now.getSeconds()).padStart(2, '0');
    const time = `${hour}:${min}:${sec}`
    console.log("time:" + time)
}




// print_all_even_in_arr()
// num_loop()
// largest_num_in_arr()
// print_name_gender()
// const value =  find_sum(23,1)
// console.log(value)
//Calculator(10,8,sum,display)
// setTimeout(largest_num_in_arr,2*1000)
// setInterval(largest_num_in_arr,2*1000)
// let intervalId = setInterval(runtimer,1000)
//setInterval(getTime,1000)


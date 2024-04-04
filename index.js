
function myEach (data, word) {
    let data2
    if (Array.isArray(data) === true) {
        data2 = data
    } else {
        data2 = Object.values(data)
    }
    data2.forEach(function(element){
        word(element)
    })
    return data
}

myEach({one: 1, two: 2, three: 3, four: 4}, alert)


function myMap (data) {
    let data2
    if (Array.isArray(data) === true) {
        data2 = data
    } else {
        data2 = Object.values(data)
    }
    let newArray = []
    data2.forEach(function(element){
        newArray.push(element * 3)
    })
    return newArray
}

myMap({one: 1, two: 2, three: 3})


function myReduce (data, callback, acc) {
    let data2
    if (Array.isArray(data) === true) {
        data2 = data
    } else {
        data2 = Object.values(data)
    }
        
    if (typeof acc != 'undefined') {
        let accumulator = acc
        data2.forEach(function(element){
            accumulator += (element * 3)
        })
        console.log(accumulator)
        return accumulator
    } else {
        let accumulator = data2[0]
        for (let i = 1; i < data2.length; i++) {
            accumulator += (data2[i] * 3)
        }
        console.log(accumulator)
        return accumulator
    }
}

myReduce({one: 1, two: 2, three: 3, four: 4}, callback, 10)
    

//---------------------------------------------------------
function myFind (data, find) {
    let data2
    if (Array.isArray(data) === true) {
        data2 = data
    } else {
        data2 = Object.values(data)
    }

    let targetItem
    for(let i = 0; i < data2.length; i++) {
        if (data2[i] === find) {
            targetItem = find
            break
        } else {
            targetItem = undefined
        }
    }
    console.log(targetItem)
    return targetItem
}

myFind([-1, 4, 0, 1, 3, 2, 3, 4, 5, 6], 4)
//---------------------------------------------------------


function myFilter (data) {
    let data2
    if (Array.isArray(data) === true) {
        data2 = data
    } else {
        data2 = Object.values(data)
    }

    let newArray = []
    for(let i = 0; i < data2.length; i++) {
        if (data2[i] > 10) {
            newArray.push(data2[i])
        }
    }
    return newArray
}

myFilter([6, 11, 5, 12, 17, 100, 9, 1, -8])


function mySize (data) {
    let data2
    if (Array.isArray(data) === true) {
        data2 = data
    } else {
        data2 = Object.values(data)
    }
    console.log(data2.length)
    return data2.length
}

mySize([6, 11, 5, 12, 17, 100, 9, 1, -8])


function myFirst (data, number) {
    let returnValue
    let newArray = []
    if (number === undefined) {
        returnValue = data[0]
        return returnValue
    } else if (number === 0) {
        return returnValue
    } else if (number === 1) {
        returnValue = data[0]
        return returnValue
    } else {
        for(let i = 0; i < number; i++) {
            newArray.push(data[i])
        }
        return newArray
    }
}

myFirst([6, 11, 5, 12, 17, 100, 9, 1, -8], 3)


function myLast (data, number) {
    let returnValue
    let newArray = []
    if (number === undefined) {
        returnValue = data[data.length - 1]
        return returnValue
    } else if (number === 0) {
        return returnValue
    } else if (number === 1) {
        returnValue = data[data.length - 1]
        return returnValue
    } else {
        for(let i = data.length - number; i < data.length; i++) {
            newArray.push(data[i])
        }
        return newArray
    }
}

myLast([6, 11, 5, 12, 17, 100, 9, 1, -8], 2)


function myKeys (data) {
    let newArray = []
    for (let key in data)
    newArray.push(key)
    return newArray
}

myKeys({ two: 2, three: 3, five: 5, seven: 7})


function myValues (data) {
    let newArray = []
    for (let key in data)
    newArray.push(data[key])
    return newArray
}

myValues({ two: 2, three: 3, five: 5, seven: 7})

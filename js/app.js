// const fruits = [{ name: 'pineapple' }, { name: 'papaya' }, { name: 'mango' }]

// const election = ['rajjak', 'alomgir', 'jayedkhan', 'jayedkhan', 'nipun', 'jayedkhan']
// const election2 = {

//     rajjak: 1,
//     alomgir: 1,
//     jayedkhan: 4,
//     jashim: 1
// }

let db = {}
const addToDb = item => {
    //three ways to add a property to an object
    //  db.alom= 1
    // db['alom'] = 1
    // db[item] = 1

    const storedTracker = localStorage.getItem('cheka-tracker', JSON.parse(db))
    if (storedTracker) {
        db = JSON.parse(storedTracker)
    }

    if (item in db) {
        db[item] = db[item] + 1
    }
    else {
        db[item] = 1
    }
    localStorage.setItem('cheka-tracker', JSON.stringify(db))
}

const removeItem = item => {
    const storedTracker = localStorage.getItem('cheka-tracker')
    if (storedTracker) {
        const storedObject = JSON.parse(storedTracker)
        delete storedObject[item]
        localStorage.setItem('cheka-tracker', JSON.stringify(storedObject))
    }
}
// const fruits = [{ name: 'pineapple' }, { name: 'papaya' }, { name: 'mango' }]

// const election = ['rajjak', 'alomgir', 'jayedkhan', 'jayedkhan', 'nipun', 'jayedkhan']
// const election2 = {

//     rajjak: 1,
//     alomgir: 1,
//     jayedkhan: 4,
//     jashim: 1
// }

const db = {}
const addToDb = item => {
    //three ways to add a property to an object
    //  db.alom= 1
    // db['alom'] = 1
    // db[item] = 1

    if (item in db) {
        db[item] = db[item] + 1
    }
    else {
        db[item] = 1
    }
    console.log(db)
}
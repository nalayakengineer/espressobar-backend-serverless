import menu from '../data/menu';


const items = () => {
    return menu
}

const item = (_, args) => {
    if (args.type) {
        return menu.filter(item => item.type === args.type)
    }
    if (args.id) {
        return menu.filter(item => item.id === args.id)
    }
}


// add to handler.js
// const promisify = foo =>
//     new Promise((resolve, reject) => {
//         foo((error, result) => {
//             if (error) {
//                 reject(error);
//             } else {
//                 resolve(result);
//             }
//         });
//     });


// const data = {
//     getitems(handle, args) {
//         return promisify(callback => {
//             callback
//         }).then(result => {
//             return menu
//         })
//     },
//     getitem(handle, args) {
//         return promisify(callback => { callback }).then(result => {
//             if (args.type) {
//                 return menu.filter(item => item.type === args.type)
//             }
//             if (args.id) {
//                 return menu.filter(item => item.id === args.id)
//             }
//         })
//     }
// }



export const resolvers = {
    Query: {
        item,
        items,
    }
}




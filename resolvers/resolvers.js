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



export const resolvers = {
    Query: {
        item,
        items,
    }
}




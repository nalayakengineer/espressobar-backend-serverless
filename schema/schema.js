const schema = `
type Item {
    id: ID!
    name: String!
    price: String!
    image: String!
    item: String!
    type: String!
}

type Query {
    items: [Item]!
    item(type: String, id: Int): [Item]!
}

schema {
    query: Query
}`;

export { schema };
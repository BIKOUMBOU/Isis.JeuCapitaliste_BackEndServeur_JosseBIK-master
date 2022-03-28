const {gql} = require("apollo-server-express");
module.exports = gql`

enum RatioType {
     gain
     vitesse
     ange
}

type Palier {

    name: String!
    logo: String
    seuil: Float
    idcible: Int
    ratio: Int
    typeratio: RatioType
    unlocked: Boolean
}

type Product {

    id: Int!
    name: String
    logo: String
    cout: Float
    croissance: Float
    revenu: Float
    vitesse: Int
    quantite: Int
    timeleft: Int
    managerUnlocked: Boolean
    paliers: [Paliers]
}

type World {

    name: String!
    logo: String
    money: Float
    score: Float
    totalangels: Int
    activeangels: Int
    angelbonus: Int
    lastupdate: String
    products: Products
    allunlocks: Allunlocks
    upgrades: Upgrades
    angelupgrades: Angelupgrades
    managers: Managers
}

type Products {

    product: [Product]
}

type Angelupgrades {

    Palier: [Palier]
}

type Upgrades {

    Palier: [Palier]
}

type Allunlocks {

    Palier: [Palier]
}

type Paliers {

    Palier: [Palier]
}

type Managers {

    Palier: [Palier]
}

type Query { 
getWorld: World 
}


type Mutation {

     acheterQtProduit(id: Int!, quantite: Int!): Product
     lancerProductionProduit(id: Int!): Product
     engagerManager(name: String!): Palier
     acheterCashUpgrade(name: String!): Palier
     acheterAngelUpgrade(name: String!): Palier
     resetWorld: World
}
`

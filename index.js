const express = require('express')
const handlebars = require('express-handlebars')


const app = express()


app.engine('handlebars', handlebars.create({partialsDir:["views/partials"]}).engine)
app.set('view engine', 'handlebars')


const products = [
{
    name:"colher",
    link:"/colher?name=colher&price=3&description=produto+de+não+sei+o+que+não+sei+o+que+lá+1",   
    price:3,
    description:"produto de não sei o que não sei o que lá "
},
{
    name:"vasilha",
    link:"/vasilha?name=vasilha&price=10&description=produto+de+não+sei+o+que+não+sei+o+que+lá+2",
    price:10,
    description:"produto de não sei o que não sei o que lá 2"
},
{
    name:"carro",
    link:"/carro?name=carro&price=50000&description=produto+de+não+sei+o+que+não+sei+o+que+lá+3",   
    price:50000,
    description:"produto de não sei o que não sei o que lá 3"
},
{
    name:"pneu",
    link:"/pneu?name=pneu&price=500&description=produto+de+não+sei+o+que+não+sei+o+que+lá+4",
    price:500,
    description:"produto de não sei o que não sei o que lá 4"
},
{
    name:"camiseta",
    link:"/camiseta?name=camiseta&price=80&description=produto+de+não+sei+o+que+não+sei+o+que+lá+5",
    price:80,
    description:"produto de não sei o que não sei o que lá 5"
},
{
    name:"calcinha",
    link:"/calcinha?name=calcinha&price=25&description=produto+de+não+sei+o+que+não+sei+o+que+lá+6",
    price:25,
    description:"produto de não sei o que não sei o que lá 6"
},
{
    name:"vestido",
    link:"/vestido?name=vestido&price=100&description=produto+de+não+sei+o+que+não+sei+o+que+lá+7",
    price:100,
    description:"produto de não sei o que não sei o que lá 7"
},
]

app.get('/:name', (req, res)=>{

    const name = req.params.name
    //const {price, description} = products.find(product=>product.name===name)
    const {price, description} = req.query


    const data = {
        name,
        price,
        description,
        prevRoute: "/"
    }


    res.render('product', {layout:'productLayout', data})
})

app.get('/', (req, res)=>{
    res.render('productsList', {products})
})




app.listen(3000, ()=>{
    console.log('Listening on 3000 port')
})
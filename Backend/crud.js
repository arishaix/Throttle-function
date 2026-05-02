const express = require('express')
const app = express()

app.use(express.json());

const port = 3000

app.get('/', (req,res)=> {
    res.send('Hello!')

})

app.listen(port , ()=> {
    console.log(`App listening on port ${port}`)
})
let Users = [
    { id: 1 , name: 'Alice' , },
    { id: 2 , name: 'Claire' , },
    { id: 3 , name: 'Leo' , }
]


app.get('/users' ,(req , res )=>{
    res.send(Users)

})

app.get('/users/:id' , (req, res)=> {
    const userId = req.params.id;
    const result = Users.find(user => user.id == userId)
    if ( result){
        res.send(result)
    }
    else{
        res.send('user not found')
    }
})

app.post('/user' , (req, res)=>{
    const {name} = req.body
    newId = Users[Users.length -1].id +1
    const newUser = {id: newId , name: name}
    Users.push(newUser)
    res.send('User created')

})

app.put('/user/:id' , (req, res) => {
    const userId = req.params.id
    const {name} = req.body
    const person = Users.find(user => user.id == userId)
    if ( person){
        person.name = name
        res.send('User updated')
    }
    else{
        res.send('user not found')
    }
})

app.delete('/user/:id' , (req, res)=> {
    const userId = req.params.id
    Users = Users.filter(user => user.id != userId)
    res.send('User deleted')
})
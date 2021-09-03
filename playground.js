const jwt = require('jsonwebtoken');

const user = {
    id: "20",
    name:"Joao",
    username: "joao@gmail.com",
    password: "123457"
}

const secret = "aushausausuasid";

function createToken(){
const token = jwt.sign({id:user.id, username:user.username}, secret, {expiresIn: 60});

console.log(token)
}

function testToken(token){
    try {
        const validData = jwt.verify(token, secret);
        console.log(validData);
    } catch (error) {
        console.log(error);
    }
    
}

testToken(eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIwIiwidXNlcm5hbWUiOiJqb2FvQGdtYWlsLmNvbSIsImlhdCI6MTYzMDYwMzc5OX0.fSyKgZ1-m-fXNMmG6Ns5bSK_tKBiGc409KgiMYpZt30);


// 셋은 중복을 허용하지 않는 데이터 집합
const roles = new Set();

roles.add('User');
roles.add('Admin');

for(let v of roles){
    console.log(v)
}

console.log(roles.size)

roles.add('User')
console.log(roles.size) // 중복을 허용하지 않음

roles.delete("Admin")
console.log(roles)

// 워크셋
const naughty = new WeakSet();

const children = [
     { name: "Suzy" }
    ,{ name: "Derek" }
];

naughty.add(children[1])

for(let child of children) {
    if(naughty.has(child))
        console.log(`Coal for ${child.name}!`)
    else
        console.log(`Presents for ${child.name}!`)
}


// Error
function validateEmail(email) {
    return email.match(/@/) ? email : new Error(`invalid email:${email}`)

}

let email = "jane@doe.com";

const validatedEmail = validateEmail(email);

if(validatedEmail instanceof Error) { 
    console.error(`Error: ${validatedEmail.message}`);
} else {
    console.log(`Valid email: ${validatedEmail}`)
}

// try/catch와 예외처리
email = null

try{

    const validatedEmail = validateEmail(email);

    if(validatedEmail instanceof Error) { 
        console.error(`Error1: ${validatedEmail.message}`);
    } else {
        console.log(`Valid email: ${validatedEmail}`)
    }
    

}catch(err){
    console.error(`Error2: ${err.message}`)
}

function a() {
    console.log('a: calling b')
    b();
    console.log('a: done')
}

function b() {
    console.log('b: calling c')
    c();
    console.log('b:done')
}

function c() {
    console.log('c: throwing error')
    throw new Error('c error')
    console.log('c: done')
}

function  d(){
    console.log('d: calling c');
    c();
    console.log('d: done')
}

console.log('error start')
try{
    a();
}catch(err){
    console.log(err.stack);
}

try{
    d();
}catch(err) {
    console.log(err.stack)
}

try {
    console.log('this line is executed...')
    throw new Error('whoops')
    console.log('this line is not...')
} catch(err) {
    console.log('there was an error... ')
} finally {
    console.log('...alwawys executed')
    console.log('perform clenup here')
}









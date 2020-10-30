
const u1 = { name: 'Cynthia'}
const u2 = { name: 'Jackson'}
const u3 = { name: 'Olive'}
const u4 = { name: 'James'}

const userRoles = new Map();


userRoles.set(u1, 'User')
userRoles.set(u2, 'User')
userRoles.set(u3, 'Admin')

// // 메서드 체인
// userRoles
//     .set(u1, 'User')
//     .set(u2, 'User')
//     .set(u3, 'Admin')


// const userRoles = new Map(
//      [u1, 'User']
//     ,[u2, 'User']
//     ,[u3, 'Admin']
// );


console.log(userRoles.get(u2))
console.log(userRoles.has(u1))
console.log(userRoles.size)

for(let u of userRoles.keys()){
    console.log(u.name)
}

for(let r of userRoles.values()){
    console.log(r)
}

for(let ur of userRoles.entries()){
    console.log(`${ur[0].name}:${ur[1]}`)
}

for(let [u, r] of userRoles){
    console.log(`${u.name}:${r}`)
}

userRoles.delete(u2);
console.log(userRoles.size)

userRoles.clear();
console.log(userRoles.size)

// WeakMap 다음 차이점을 제외하면 Map과 같다.
// - 키는 반드시 객체
// - WeakMap의 키는 가비지 콜렉션에 포함될 수 있다.
// - WeakMap은 이터러블이 아니며 clear() 메서드도 없다.

const SecretHolder = (function() {
    const secrets = new WeakMap();

    return class {
        setSecret(secret) {
            secrets.set(this, secret);
        }
        getSecret() {
            return secrets.get(this);
        }
    }

})();

const a = new SecretHolder();
const b = new SecretHolder();

a.setSecret('secret A');
b.setSecret('secret B');

console.log(a.getSecret());
console.log(b.getSecret());

















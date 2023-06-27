export const users=[
    {
        id:1, 
        name: '홍길동'
    },
    {
        id:2,
        name: '임꺽정'
    },
    {
        id: 3,
        name: '성춘향'
    }
]
function User(){
    return
    <>
     <ul>
        {users.map((value)=>{
            return (
            <li key={value.id}>
<value.name/>
<Link to={`/user/${value.id}`}>{value.name}</Link>
            </li>
        })}
     </ul>
    </>
    
}
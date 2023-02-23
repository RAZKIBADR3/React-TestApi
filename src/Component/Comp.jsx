import React, { useState , useEffect} from 'react'
import axios from 'axios'

export default function Comp() {
    const [s,setS] = useState(null)
    
    useEffect(()=>{
        setTimeout(()=>{
            // use axios by Promise way
            axios.get('https://jsonplaceholder.typicode.com/users')
            .then(data=>setS(data.data))
            .catch(err=>console.log('erorr :' , err.message))
        },1000)
    },[])

    const jsxResult = s!=null
        ?<>
            <p className='done'>done :)</p>
                <div className="users">
                {s.map((e,i)=>
                    <div key={i} className='user'>
                        <p>id : {e.id}</p>
                        <p>name : {e.name}</p>
                        <p>username : {e.username}</p>
                        <p>email : {e.email}</p>
                    </div>
                    )
                }
            </div>
        </>
        :
        <span className='load'>
            loading...
        </span>

    return (
        <div className='container'>
            {jsxResult}
        </div>
    )
}
import React, { useEffect, useState } from 'react';

const MyComponent2 = () => {
    
    const [name, setName] = useState('홍길동');
    const [age, setAge] = useState(20);
    
    //useEffect(Mount)
    useEffect(()=>{
        console.log('Mount...')
    }, []);
    
    //useEffect(Mount 리렌더링)
    useEffect(()=>{
        console.log('Mount and ReRendering...')
    });
    
    //useEffect(상대값 name 업데이트)
    useEffect(()=>{
        console.log('State Name Update...')
    }, [name]);
    
    //useEffect(상대값 age 업데이트)
    useEffect(()=>{
        console.log('State Age Update...')
    }, [age]);
    
    //useEffect(Unmount)
    useEffect(()=>{
        console.log('UnMount...')
        return ()=>{}
    });
    
    return (
        <div className='MyComponent2'>
            <h5>MyComponent2</h5>

            <p>
                useState Hook 실습<br/>
                이름 : {name}<br/>
                나이 : {age}<br/>
                
            </p>
            <input type="text" 
                   value={name} 
                   onChange={(e)=>{setName(e.target.value)}}/>
    
            <input type="text" 
                   value={age}  
                   onChange={(e)=>{setAge(e.target.value)}}/>
        </div>
    );
};

export default MyComponent2;
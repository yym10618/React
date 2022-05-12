import React, { useState } from 'react';

const MyComponent1 = () => {

    // state 선언
    const [person, setPerson] = useState({name:'홍길동', age:20});
    
    return (
        <div className='MyComponent1'>
            <h5>MyComponent1</h5>
            <p>
                useState Hook 실습<br/>
                이름 : {person.name}<br/>
                나이 : {person.age}<br/>
                
            </p>

            {/* 
                - 전개연산자(...)를 이용해서 기존의 상태값을 유지한다.
                - 전개연산자를 사용하지 않으려면 state name, age를 따로 선언
                  const [name, setName] = useState('홍길동');
                  const [age, setAge] = useState(20);
                  
                  이름 : {name}<br/>
                  나이 : {age}<br/>
                  
                  <input type="text" 
                         value={name} 
                         onChange={(e)=>{setName(e.target.value)}}/>
        
                  <input type="text" 
                         value={age}  
                         onChange={(e)=>{setAge(e.target.value)}}/>

            */}
            <input type="text" 
                   value={person.name} 
                   onChange={(e)=>{setPerson({...person, name: e.target.value})}}/>
            
            <input type="text" 
                   value={person.age}  
                   onChange={(e)=>{setPerson({...person, age: e.target.value})}}/>
            
            
        </div>
    );
};

export default MyComponent1;
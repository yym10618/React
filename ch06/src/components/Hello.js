import React from 'react';

const Hello = () => {
    
    const myStyle = {
        backgroundColor: 'orange'
    };
    
    
    return (
        <div className='Hello' style={myStyle}>
            <h3>Hello</h3>
            <p>
                Hello 컴포넌트 입니다.
            </p>
        </div>
    );
};

export default Hello;
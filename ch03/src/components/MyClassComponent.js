import { Component } from "react";
import './css/MyClassComponent.css'

class MyClassComponent extends Component{

    render(){

        return (
            /* 컴포넌트의 최상단 태그에 className을 컴포넌트 명으로 선언 */
            <div className="MyClassComponent">
                <h5>MyClassComponent</h5>
                <p>
                    MyClassComponent에서 출력
                </p>
            </div>
        );
    }
}
export default MyClassComponent;
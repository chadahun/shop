import {useParams} from 'react-router-dom';
import React, { useEffect, useState } from "react";
// import styled from 'styled-components';

// let YellowBtn = styled.button`
//   background:${props=>props.bg};
//   color:${props=>props.bg == 'blue' ? 'white' : 'black'};
//   padding:10px;
// `




function Detail(props){

  useEffect(()=>{console.log('안녕')})

  let [count,setCount]=useState(0);
  let {id}=useParams()
  // let [alert,setAlert]=useState(true);
  let [num,setNum]=useState('');



  useEffect(()=>{
    if(isNaN(num) == true){
      alert('그러지마요')
    }
  }, [num])
  

  // useEffect(()=>{
  //   let a =setTimeout(()=>{setAlert(false)},2000)
  //   return ()=>{clearTimeout(a) /*타이머 제거*/}           //useEffect 실행하기 전에 실행 cleanup function
  // }, [])


  let us = props.shoes.find(function(x){
    return x.id == id;
  })
    return(
      <div className="container">
        {/* {
          alert == true ?
          <div className='alert alert-warning'>2초 이내에 구매시 할인</div>
          : null
        } */}
        {count}
        <button onClick={()=>{setCount(count+1)}}></button>
        {/* <YellowBtn bg="blue">버튼</YellowBtn> */}
    <div className="row">
      <div className="col-md-6">
        <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
      </div>
      <div className="col-md-6">
      return(
    <input onChange={(e)=>{setNum(e.target.value)}}></input>
  )
        <h4 className="pt-5">{us.title}</h4>
        <p>{us.content}</p>
        <p>{us.price}</p>
        <button className="btn btn-danger">주문하기</button> 
      </div>
    </div>
  </div> 
    )
  }
  export default Detail;
//   1. find()는 array 뒤에 붙일 수 있으며 return 조건식 적으면 됩니다. 그럼 조건식에 맞는 자료 남겨줌 

// 2. find() 콜백함수에 파라미터 넣으면 array자료에 있던 자료를 뜻합니다. 전 x라고 작명해봤음 

// 3. x.id == id 라는 조건식을 써봤습니다. 그럼 array자료.id == url에입력한번호 일 경우 결과를 변수에 담아줍니다. 

// 그럼 {상품1개} 이런거 남을듯요 출력해봅시다. 

 

// 4. 마지막으로 찾은 {상품1개}를 html에 데이터바인딩해놨습니다. 

 

 

// 더 짧게 쓰고 싶으면

// props.shoes.find((x) => x.id == id )

// 이렇게 써도 똑같습니다. arrow function에서 return과 중괄호는 동시에 생략가능 
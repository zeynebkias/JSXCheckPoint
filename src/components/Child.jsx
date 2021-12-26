import React from 'react'
import styled from 'styled-components';

const Myimg = styled.div`
margin-left: 10rem;
margin-top : 30px;
height : 30vh;
width : 30vh;
box-shadow: 0px 5px 10px 0px gray;
background-color: white;
font-family : Montserrat ;



`


const Mycard = styled.div`
background-image : url(https://i.postimg.cc/fbyyMw3q/background.jpg);
padding-top : 10px;
width : 80vh;
height : 70vh;
margin : 10px;
position: relative;
font-family : Montserrat ;


`

 
const Circle = styled.div`
position : absolute;
height : 60px;
width : 60px ;
border : 2px dashed #F56131;
border-radius : 50%;
margin-left : 8rem;
margin-top : 1rem;

`
const Deco = styled.div`
position : absolute;
height : 30px;
width : 30px ;
background : #F56131;
border-radius : 50%;
margin-left : 15rem;

` 
const Deco2 = styled.div`
position : absolute;
height : 30px;
width : 30px ;
border : 2px solid gray;
border-radius : 50%;
margin-left : 15.3rem;

` 
const Intro = styled.p`
position : absolute;
color : #F56131;
font-weight : bold;
font-size : 12px;
margin-left : 20rem;
margin-top : 5rem;
text-align : left;
letter spacing : 1px;
font-family : Montserrat ;

`

const Line = styled.hr`
width : 10%;
background : #F56131;
height : 3px; 
border : none;
margin-right: 20.5rem;
margin-top : 20px;
`

const Info = styled.div`
text-align: left;
margin-left: 10rem;
font-family : Montserrat ;
color : #315344;

`
const Mybtn = styled.button`
border : 1px solid #F56131;
background : transparent;
font-family : Montserrat ;
color : #F56131;
font-weight: bold;
cursor: pointer;
padding : 5px;
width : 30vh;

&:hover{
    letter-spacing : 2px;
} 

`
function Child({FullName , bio , profession , children , handleName }) {

    const handleAlert = (e) => {

        handleName(FullName)
    }

    return (

        <Mycard>

            <Circle></Circle>
            <Intro>Hello, <br /> This is my Portfolio <br /> I would like to present <br /> My work and I hope you like it! </Intro>
           <Myimg> {children} </Myimg>

        <Info>
           <Line />
           <h3> Personal Details </h3>
           <p> <strong>Name : </strong> {FullName}.</p>
           <Deco></Deco>
           <Deco2></Deco2>
           <p><strong>Profession : </strong> {profession}.</p>
           <p><strong>Bio : </strong> {bio}.</p>

            <Mybtn type="submit" onClick={handleAlert}>Show</Mybtn> 
        </Info>
        </Mycard>

    )
}




export default Child;



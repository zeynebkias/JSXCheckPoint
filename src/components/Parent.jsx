import React from 'react'
import styled from 'styled-components';

import Child from './Child';


import User from '../imgs/User.jpg'



const Myimg = styled.img`
height : 8rem;
margin-top : 1.5rem;

`

const Mydiv = styled.div`
font-family : Montserrat ;
display : flex;
justify-content : space-around;
align-items : center;
margin-top :2rem;
`


function UserName(name) {
    alert(name)
}

function Parent(props) {
    return (
        <Mydiv>
            <div>
            <Child FullName='Zeyneb' bio='FullStack JS' profession='Devlopper' handleName={UserName}><Myimg src={User} alt="" /> </Child>
            <Child FullName='Amina' bio='FullStack JS' profession='Devlopper'  handleName={UserName}><Myimg src={User} alt="" /> </Child>
            </div>
            <div>
            <Child FullName='Loubna' bio='FullStack JS' profession='Devlopper' handleName={UserName}><Myimg src={User} alt="" /> </Child>
            <Child FullName='khalid' bio='FullStack JS' profession='Devlopper'  handleName={UserName}><Myimg src={User} alt="" /> </Child>
            </div>
        </Mydiv>
    )
}

export default Parent

import React, { useState } from 'react'
import styled from "styled-components"

const Navbar = () => {
  const [menuOpen, setmenuOpen] = useState(false)
  return (

    <Navwrapper>
      
        <Name><span className='startname'>Anshu</span> <span className='endname'>Verma</span></Name>
        <Mobilemenu onClick={() => setmenuOpen(!menuOpen)}>☰</Mobilemenu>
      
      <Navlinks open={menuOpen}>
        <li><a href='#Home'>Home</a></li>
        <li><a href='#About'>About</a></li>
        <li><a href='#Projects'>Projects</a></li>
        <li><a href='#Contact'>Contact</a></li>
      </Navlinks>

    </Navwrapper>

  )
}

export default Navbar

const Navwrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 20px;
  flex-wrap: wrap;

  @media (max-width: 768px){
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const Name = styled.p`
    color: white;
    font-size: 26px;
    font-weight: 600;

    .endname{
        color: #1e90ff;
    }

  @media (max-width: 768px) {
    font-size: 22px;
    margin-bottom: 10px;
  }
`
const Navlinks = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  color: white;

  li{
    cursor: pointer;
    font-weight: 500;

    &:hover{
       color: #1e90ff;
    }

  a {
    color: white;
    text-decoration: none;

      &:hover {
        color: white;
      }
  }
}
${({ open }) => `
@media (max-width:768px) {
  flex-direction: column;
  width: 100%;
  background-color: #1e90ff;
  text-align: center;
  padding: 15px 0;
  display:  ${open ? 'flex' : 'none'};

  li{
    &:hover{
       color: white;
    }
}
  a {
    color: white;
    text-decoration: none;

      &:hover {
        color: #1e90ff;
      }
  }
`}
`;

const Mobilemenu = styled.div`
  display: none;
  font-size: 28px;
  color: white;
  cursor: pointer;

@media (max-width:768px) {
  display: block;
}
`

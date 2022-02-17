import React from 'react'
import styled from 'styled-components'
import BgImg from '../assets/bg-image.png'
import {IoMdArrowDropright} from 'react-icons/io'

/* Styled Components*/
const Section = styled.section`
    background-image: url(${BgImg});
    height: 785px;
    display: block;
    background-repeat: no-repeat;
    background-size: contain;
`
const Content = styled.div`
    width: 100%;
    height: 100px;
`
const Left = styled.div`
    padding-left: 220px;
    padding-top: 143px;
`
const Title = styled.p`
    font-size: 55px;
    color: #04050a;
    font-weight: 400;
`
const Description = styled.p`
    width: 472px;
    font-size: 20px;
    color: #9ea0ac;
    line-height: 30px;
    margin-top: 58px;
`
const Button = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 18px;
    margin-top: 58px;
    width: 371px;
    height: 71px;
    line-height: 71px;
    font-size: 22px;
    text-align: center;
    color: #fff;
    cursor: pointer;
    background: linear-gradient(90deg, #0546d6, #3f89fc);
    text-decoration: none;
    box-shadow: 0 15px 14px rgb(0 42 177 / 12%);
`

const Hero = () => {
  return (
    <Section>
        <Content>
            <Left>
                <Title>
                    Get 2 Free Stocks<br /> valued up to $1850
                </Title>
                <Description>
                0 Commissions and no deposit minimums.<br />
                Everyone gets smart tools for smart investing.
                </Description>
                <Button href='' target='_blank'>
                    <span>Claim you free stocks now</span>
                    <IoMdArrowDropright size='50px' />
                </Button>
            </Left>
        </Content>
    </Section>
  )
}

export default Hero
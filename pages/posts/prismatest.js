import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import fetch from 'isomorphic-unfetch';
import ErrorMessage from '../../components/errorMessage';
import FooterSns from '../../components/footerSns';
import { PrismaClient } from '@prisma/client'
import React, { useState } from 'react';
const PrismaTest = () => {

    // prismaのテスト
    const prisma = new PrismaClient()
    const test = async() => {
        console.log('POST');
    }
    
    return (
    <>
    <Head>
        <title>ログインページ</title>
        <meta name='description' content='Login Page' author='Y.S' />
        <link rel='icon' href='/images/favicon.ico' />
    </Head>
        <Button variant='outline-primary'style={{width:150}} onClick={() => test()}>API</Button><br></br>
    </>
    )
}

export default PrismaTest;

// CSS in Js
const styles = {
    container: {
        minHeight: '90vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      },
      center: {
        alignItems: 'center'
      },
      left: {
        alignItems: 'left'
      },
      footer: {
        width: '100%',
        height: '10vh',
        borderTop: '1px solid #eaeaea',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      },
      square: {
        width: '150px',
        height: '150px',
        borderRadius: '50%',
        background: 'red',
      },
      distortedCircle: {
        width:500, 
        height:500,
        borderRadius:'50% 50% 50% 70%/50% 50% 70% 60%', 
        background:'#add8e6', 
        position:'absolute',
        zIndex:'-1'
      },
      
};

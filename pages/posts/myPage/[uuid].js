import Head from 'next/head'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { RiTwitterFill, RiHome7Line, RiBellLine, RiMailLine, RiBookmark3Line, RiFileList2Line, RiSettings4Line, RiSearchLine } from "react-icons/ri";
import ModalWindow from '../../../components/modalWindow';
import React, { useState, useEffect } from 'react';
import FooterSns from '../../../components/footerSns';
import HeaderSns from '../../../components/headerSns';

const myPage = () => {
    
    // const [state, setOmikujiResult] = useState(
    //     {
    //       name: 'push', 
    //       comment: 'ここに運勢を表示します', 
    //       probability: '', 
    //       buttonColor: 'grey'
    //     }
    //   );

    // コンポーネントのマウント時に1回だけ実行する
    // useEffect(() => {
    //     if(!sessionStorage.getItem('userID')) { // セッションストレージ存在チェック
            
    //     }
    // }, []);
   
    const [show, setShow] = useState(false);

    // if (sessionFlg) {

    // } else {

    // }
    return (
    <>
    <Head>
        <title>マイページ</title>
        <meta name="description" content="MyPage" author="Y.S" />
        <link rel="icon" href="/images/favicon.ico" />
    </Head>
    <HeaderSns/>
    
    <div style={styles.container_parent}>
        <div style={styles.container_child_left}>
            <ul>
                <li type='none' style={{marginLeft:'60px'}}>
                    <a href="/">
                        <RiTwitterFill size="20%" style={styles.margin_list}/>
                    </a>
                </li>
                <li type='none' style={{marginLeft:'80px'}}>
                    <RiHome7Line size="10%" style={styles.margin_list}/>
                    <a href="/" className="fs-4" style={styles.link_none}>ホーム</a><br></br>
                </li>
                <li type='none' style={{marginLeft:'80px'}}>
                    <RiBellLine size="10%" style={styles.margin_list}/>
                    <a href="/" className="fs-4" style={styles.link_none}>通知</a><br></br>
                </li>
                <li type='none' style={{marginLeft:'80px'}}>
                    <RiMailLine size="10%" style={styles.margin_list}/>
                    <a href="/" className="fs-4" style={styles.link_none}>メール</a><br></br>
                </li>
                <li type='none' style={{marginLeft:'80px'}}>
                    <RiBookmark3Line size="10%" style={styles.margin_list}/>
                    <a href="/" className="fs-4" style={styles.link_none}>お気に入り</a><br></br>
                </li>
                <li type='none' style={{marginLeft:'80px'}}>
                    <RiFileList2Line size="10%" style={styles.margin_list}/>
                    <a href="/" className="fs-4" style={styles.link_none}>リスト</a><br></br>
                </li>
                <li type='none' style={{marginLeft:'80px'}}>
                    <RiSettings4Line size="10%" style={styles.margin_list}/>
                    <a href="/" className="fs-4" style={styles.link_none}>設定</a><br></br>
                </li>
            </ul>
            <div style={{marginLeft:'90px'}} >
                <Button variant="outline-primary" style={{width:150}} onClick={() => setShow(true)}>ツイート</Button><br></br>
                <ModalWindow show={show} setShow={setShow}/>
            </div>
            
            
        </div>

        <div style={styles.container_child_center}>
        </div>
        <div style={styles.container_child_right}>
            <InputGroup className="mb-3" style={{width:300}}>
                <InputGroup.Text><RiSearchLine/></InputGroup.Text>
                <FormControl 
                    placeholder="検索"
                    aria-label="Search Tweet"
                    aria-describedby="basic-addon1"
                    style={{width:150}}>
                </FormControl>
            </InputGroup>
        </div>
    </div>
    <FooterSns />
    </>
    )
}

export default myPage;

// CSS in Js
const styles = {
    container_parent: {
        minHeight: '90vh',
        //minWidth: '100vh',
        display: 'flex',
        flexDiretion: 'row',
    },
    container_child_left: {
        flexDirection: 'column',
        alignItems: 'center',
        background: 'white',
        width:'25%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container_child_center: {
        flexDirection: 'column',
        alignItems: 'center',
        background: 'white',
        width:'50%',
        borderLeft: 'solid 2px grey',
        borderRight: 'solid 2px grey',
    },
    container_child_right: {
        flexDirection: 'column',
        alignItems: 'center',
        background: 'white',
        width:'25%',
    },
    left: {
        alignItems: 'left'
    },
    center: {
        alignItems: 'center'
    },
    margin_list: {
        margin:'5px 15px 5px 5px'
    },
    link_none: {
        textDecoration: 'none',
        color: '#000000',
    },
};

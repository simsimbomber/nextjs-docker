import Head from 'next/head'
import Image from 'next/image'

const FooterSns = () => {

    return (
    <>
    <Head>
        <title>フッター</title>
        <meta name='description' content='footer' author='Y.S' />
    </Head>
    <div style={styles.footer}>
        <footer href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app' target='_blank' rel='noopener noreferrer'>
            Powered by{' '}
            <span className={styles.logo}>
                <Image src='/images/vercel.svg' alt='Vercel Logo' width={72} height={16} />
            </span>
        </footer>
    </div>
    </>
    )
}

export default FooterSns;

// CSS in Js
const styles = {
    footer: {
        width: '100%',
        height: '10vh',
        borderTop: '1px solid #eaeaea',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
};

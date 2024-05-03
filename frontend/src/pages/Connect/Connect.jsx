import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer';
import ConnectToMe from '../../components/ConnectToMe/ConnectToMe';
import useChangePageInfo from '../../hooks/useChangePageInfo';

export default function Connect() {

    useChangePageInfo('ارتباط با من - دِو یوزر', 'ارتباط با من برای هماهنگی بیشتر درباره پروژه و سوالات دیگر...')

    return (
        <>
            <Header />

            <div style={{ minHeight: '70vh' }}>

                <ConnectToMe />

            </div>

            <Footer />
        </>
    )
}

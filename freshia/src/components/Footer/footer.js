import React, { Component } from 'react'
import FooterSubscribe from './footersubscribe'
import FooterInner from './footerinner'
import FooterMiddle from './footermiddle'
import FooterBottom from './footerbottom'
import FreshiaBg from '../../images/footer-bg.jpg'

class footer extends Component {
    render() {
        return (
            <>
                <footer style={{ backgroundImage: `url(${FreshiaBg})` }}>
                    <FooterSubscribe />
                    <FooterInner />
                    <FooterMiddle />
                    <FooterBottom />
                </footer>
            </>
        )
    }
}

export default footer

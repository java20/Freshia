import React, { Component } from 'react'
import FooterSubscribe from './footersubscribe'
import FooterInner from './footerinner'
import FooterMiddle from './footermiddle'
import FooterBottom from './footerbottom'

class footer extends Component {
    render() {
        return (
            <>
                <footer style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/images/footer-bg.jpg'})` }}>
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

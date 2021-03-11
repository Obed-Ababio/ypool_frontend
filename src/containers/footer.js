import React from 'react'
import Footer from '../components/footer'
import Icon from '../components/icons'

export function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
                <Footer.Row>
                    <Footer.Column>
                        <Footer.Title>About Us</Footer.Title>
                        <Footer.Link href="#">Team</Footer.Link>
                        <Footer.Link href="#">Join Us</Footer.Link>
                        <Footer.Link href="#">GitHub</Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title>Support</Footer.Title>
                        <Footer.Link href="#">FAQ</Footer.Link>
                        <Footer.Link href="#">Feedback</Footer.Link>
                    </Footer.Column>
                    {<Footer.Column>
                        <Footer.Title>Social</Footer.Title>
                        <Footer.Link href="#"><Icon className="fab fa-facebook-f" />Facebook</Footer.Link>
                        <Footer.Link href="#"><Icon className="fab fa-instagram" />Instagram</Footer.Link>
                        {/* <Footer.Link href="#"><Icon className="fab fa-youtube" />Youtube</Footer.Link> */}
                        <Footer.Link href="#"><Icon className="fab fa-twitter" />Twitter</Footer.Link>
                    </Footer.Column>}
                </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}
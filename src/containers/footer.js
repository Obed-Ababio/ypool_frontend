import React from 'react'
import Footer from '../components/footer'
import Icon from '../components/icons'

const currentYear = new Date().getFullYear();

export function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
                <Footer.Row>
                    <Footer.Column>
                        <Footer.Title>Feedback</Footer.Title>
                        <Footer.Link href="#">Report Issue</Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title>About Us</Footer.Title>
                        <Footer.Link href="#">Team</Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title>Support</Footer.Title>
                        <Footer.Link href="#">FAQ</Footer.Link>
                        <Footer.Link href="#">Feedback</Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title>Join Us</Footer.Title>
                        <Footer.Link href="#">Contact YPool</Footer.Link>
                    </Footer.Column>
                    
                    {/* 
                    <Footer.Column>
                        <Footer.Title>Social</Footer.Title>
                        <Footer.Link href="#"><Icon className="fab fa-facebook-f" />Facebook</Footer.Link>
                        <Footer.Link href="#"><Icon className="fab fa-instagram" />Instagram</Footer.Link>
                        <Footer.Link href="#"><Icon className="fab fa-youtube" />Youtube</Footer.Link> 
                        <Footer.Link href="#"><Icon className="fab fa-twitter" />Twitter</Footer.Link>
                    </Footer.Column> */}
                </Footer.Row>
                <p1 style={{ color: "white", textAlign: "center" }}>Copyright © {currentYear}</p1>
            </Footer.Wrapper>
            
        </Footer>
    )
}



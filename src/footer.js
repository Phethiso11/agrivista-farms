import React from 'react';
import insta from './Group 83.jpg';
import drib from './Group 84.jpg';
import fac from './Group 85.jpg';
import be from './Group 86.jpg';
function Footer() {
    return (
        <div style={styles.footerContainer}>
            <div style={styles.section}>
                <h2 style={styles.title}>AgriVista Farms</h2>
                <p style={styles.description}>Li Europan lingues es membres del sam familie. Lor separat existentie</p>
                <div style={styles.iconsContainer}>
                    <img src={insta} alt="icon1" style={styles.icon} />
                    <img src={drib} alt="icon2" style={styles.icon} />
                    <img src={fac} alt="icon3" style={styles.icon} />
                    <img src={be} alt="icon4" style={styles.icon} />
                </div>
            </div>
            <div style={styles.section}>
                <h2 style={styles.title}>Pages</h2>
                <ul style={styles.list}>
                    <li style={styles.listItem}>Home</li>
                    <li style={styles.listItem}>About</li>
                    <li style={styles.listItem}>Product</li>
                    <li style={styles.listItem}>Blog</li>
                </ul>
            </div>
            <div style={styles.section}>
                <h2 style={styles.title}>About</h2>
                <ul style={styles.list}>
                    <li style={styles.listItem}>Testimonials</li>
                    <li style={styles.listItem}>Our Service</li>
                    <li style={styles.listItem}>Contact Us</li>
                    <li style={styles.listItem}>Benefit</li>
                </ul>
            </div>
        </div>
    );
}

const styles = {
    footerContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: '#204b47',
        padding: '40px',
        color: '#ffffff',
    },
    section: {
        flex: 1,
        padding: '0 20px',
    },
    title: {
        fontSize: '20px',
        fontWeight: 'bold',
        marginBottom: '20px',
    },
    description: {
        fontSize: '16px',
        color: '#b5c3c2',
        marginBottom: '20px',
    },
    iconsContainer: {
        display: 'flex',
        gap: '10px',
    },
    icon: {
        width: '30px',
        height: '30px',
    },
    list: {
        listStyleType: 'none',
        padding: 0,
    },
    listItem: {
        fontSize: '16px',
        color: '#b5c3c2',
        marginBottom: '10px',
    },
};

export default Footer;

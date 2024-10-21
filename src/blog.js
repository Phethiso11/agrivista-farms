import React from 'react';
import green from './green.jpg';
import power from './power.jpg';
import cult from './cult.jpg';

const App = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Our Blog</h1>
            <p style={styles.subheading}>
                Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular.
            </p>
            <br />
            <br />
            <br />
            <div style={styles.blogContainer}>
                <div style={styles.blogCard}>
                    <img
                        src={green} // Replace with actual image URL
                        alt="Innovations for a Greener Future"
                        style={styles.image}
                    />
                    <h3 style={styles.cardTitle}>Innovations for a Greener Future</h3>
                    <p style={styles.cardDescription}>
                        Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica.
                    </p>
                    <a href="/" style={styles.readMore}>Read More</a>
                </div>

                <div style={styles.blogCard}>
                    <img
                        src={power} // Replace with actual image URL
                        alt="The Power of Agricultural Analytics"
                        style={styles.image}
                    />
                    <h3 style={styles.cardTitle}>The Power of Agricultural Analytics</h3>
                    <p style={styles.cardDescription}>
                        Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica.
                    </p>
                    <a href="/" style={styles.readMore}>Read More</a>
                </div>

                <div style={styles.blogCard}>
                    <img
                        src={cult} // Replace with actual image URL
                        alt="Cultivating Sustainable and Resilient Farms"
                        style={styles.image}
                    />
                    <h3 style={styles.cardTitle}>Cultivating Sustainable and Resilient Farms</h3>
                    <p style={styles.cardDescription}>
                        Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica.
                    </p>
                    <a href="/" style={styles.readMore}>Read More</a>
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        textAlign: 'center',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
    },
    heading: {
        fontSize: '36px',
        color: '#2e6052',
        marginBottom: '10px',
    },
    subheading: {
        fontSize: '16px',
        color: '#777',
        marginBottom: '30px',
        maxWidth: '600px',
        margin: '0 auto',
    },
    blogContainer: {
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        flexWrap: 'wrap',
    },
    blogCard: {
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        maxWidth: '300px',
        textAlign: 'left',
        padding: '10px',
    },
    image: {
        width: '100%',
        borderRadius: '8px 8px 0 0',
    },
    cardTitle: {
        fontSize: '18px',
        color: '#2e6052',
        margin: '10px 0',
    },
    cardDescription: {
        fontSize: '14px',
        color: '#777',
        marginBottom: '10px',
    },
    readMore: {
        color: '#2e6052',
        textDecoration: 'none',
        fontWeight: 'bold',
    },
};

export default App;

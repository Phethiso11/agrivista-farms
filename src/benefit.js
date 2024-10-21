import React from 'react';
import ben from './Group 146.jpg';
import learn from './Learn More.jpg';

const App = () => {
    return (
        <div style={styles.container}>
            <div style={styles.leftContainer}>
                <h1 style={styles.title}>The Benefits of Choosing Our Expertise</h1>
                <p style={styles.text}>
                    Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie,
                    musica, sport etc, litot Europa usa li sam vocabular.
                </p>
                <button style={styles.button}>
                    <img src={learn} alt='Learn More' />
                </button>
            </div>
            <div style={styles.rightContainer}>
                <img src={ben} alt='' style={styles.image} />
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '50px',
        fontFamily: 'Arial, sans-serif',
        flexWrap: 'wrap', // Allows wrapping for smaller screens
    },
    leftContainer: {
        flex: 1,
        paddingRight: '50px',
        minWidth: '300px', // Ensures a minimum width
    },
    title: {
        fontSize: '48px',
        fontWeight: 'bold',
        marginBottom: '20px',
        color: '#14433B',
    },
    text: {
        fontSize: '18px',
        lineHeight: '1.6',
        color: '#777777',
        marginBottom: '30px',
    },
    button: {
        backgroundColor: 'transparent',
        border: 'none',
        color: '#14433B',
        cursor: 'pointer',
        fontSize: '18px',
        fontWeight: 'bold',
    },
    rightContainer: {
        flex: 1,
        padding: '50px',
        borderRadius: '10px',
        minWidth: '300px', // Ensures a minimum width
    },
    image: {
        maxWidth: '100%', // Ensures image is responsive
        height: 'auto',   // Maintains aspect ratio
    },
};

// Media queries for responsiveness
const mediaQueries = `
    @media (max-width: 768px) {
        .container {
            flex-direction: column; // Stacks items on smaller screens
            padding: 20px; // Adjusts padding
        }
        .leftContainer, .rightContainer {
            padding: 20px; // Adjusts padding for left and right containers
            min-width: 100%; // Full width on smaller screens
        }
        .title {
            font-size: 32px; // Adjusts title size
        }
        .text {
            font-size: 16px; // Adjusts text size
        }
    }
`;

export default App;

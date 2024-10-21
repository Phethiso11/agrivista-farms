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
                <button style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    color: '#14433B',
                    cursor: 'pointer',
                    fontSize: '18px',
                    fontWeight: 'bold',
                }}><img src={learn} alt=''></img></button>
            </div>
            <div style={styles.rightContainer}>
                <img src={ben} alt=''></img>
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
    },
    leftContainer: {
        flex: 1,
        paddingRight: '50px',
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
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: '#14433B',
        color: '#ffffff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
    rightContainer: {
        flex: 1,
        padding: '50px',
        borderRadius: '10px',
    },
    item: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '40px',
    },
    icon: {
        fontSize: '40px',
        marginRight: '20px',
    },
    number: {
        fontSize: '36px',
        fontWeight: 'bold',
    },
    description: {
        fontSize: '18px',
    },
};

export default App;

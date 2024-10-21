import React from 'react';

const Testimonials = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Testimonials</h1>
            <p style={styles.description}>
                Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular.
            </p>
            <div style={styles.card}>
                <img
                    src="https://s3-alpha-sig.figma.com/img/eab9/67e2/46f834691e4bd80ec39ddeb67ea21df4?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eXZNBiMFlFtiech2cFSJeqFQTXUwrC~s7uib95wB4fwwTsBFjbnwAdzuck0GBmrK2IuAjY7M29NlqqKYGwxiTIj9V2n5eZ8j0VNWznxj3ZKFXiNMNfy0JYM7~3DJ7P6NCo0T~RVYxPgVaj3QnHrrvVo6xIfgbXbz4tkYlnEfDp8UGCO4JHAHL18CxT5GVqwaX3Aex5dB8SZL6D2ZVeTxbByYGUvHPFIN6Pmfzd1vXrgp85F6eRXoLk9cv6n7tNDVEGbTeoCq2B1AGqrV2b0gdZRNcf1DCz3ve1ZRVt8skYbnGTcUnBXzf1uTX1QdUHeSQdESq9RdS1b7lpP7-GdUnA__" // Replace with the actual image URL
                    alt="Madeline Williamson"
                    style={styles.image}
                />
                <div style={styles.textContainer}>
                    <div style={styles.stars}>
                        {Array(5).fill('⭐️').map((star, index) => (
                            <span key={index}>{star}</span>
                        ))}
                    </div>
                    <h2 style={styles.name}>Madeline Williamson</h2>
                    <p style={styles.title}>Forward Creative Manager</p>
                    <p style={styles.testimonialText}>
                        Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular.
                    </p>
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
        marginTop: '50px',
    },
    heading: {
        fontSize: '3rem',
        color: '#295e47',
        marginBottom: '10px',
    },
    description: {
        fontSize: '1.2rem',
        color: '#555',
        maxWidth: '700px',
        margin: '0 auto 50px',
    },
    card: {
        backgroundColor: '#295e47',
        color: '#fff',
        padding: '40px',
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: '700px',
        margin: '0 auto',
        position: 'relative',
    },
    image: {
        borderRadius: '10px',
        width: '150px',
        height: '150px',
        objectFit: 'cover',
        marginRight: '30px',
    },
    textContainer: {
        textAlign: 'left',
    },
    stars: {
        display: 'flex',
        marginBottom: '10px',
        color: '#f9c03f',
    },
    name: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        marginBottom: '5px',
    },
    title: {
        fontSize: '1rem',
        fontStyle: 'italic',
        marginBottom: '15px',
    },
    testimonialText: {
        fontSize: '1rem',
        color: '#ddd',
    },
};

export default Testimonials;

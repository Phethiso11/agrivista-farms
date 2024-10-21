import React from "react";

const App = () => {
  const containerStyle = {
    backgroundImage: "url('https://s3-alpha-sig.figma.com/img/62bf/b399/70435103a310c915a2efd2f9df46067a?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VuRi9ZU7CHX33Q-2T8NHOeQ6M3jWYPib2pL4bilV8horvs5mVeYNhnDU45JROH7dEHkbmtg75flZOj3cU3C6RrTlPI5muCLldrZISxTZb9jqlWCv2RJIjRkebnJibamQ8T90Uah0JldGDtwaty-PHBIOiBZGkqdbilNDBh2~xR8XzDB3NUdSZAtw2zGJPJZXGB4JOkcN51MmmM9GelVtPGVJdK6KNzqfUCMxiubItaWZTZW1U6J4yU3rFn6fpknGSOP88r3csGUi2CE4bcUiTnT~7JYXZo6OW9~SZsm~TqvgCnzldIql-2obzp0oq~3ytCCvnPTIIXC2oJ5HyHzZMQ__')", // Update with the correct image path
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "629px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    color: "white",
    textAlign: "center",
    fontFamily: "Arial, sans-serif"
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 0
  };

  const contentStyle = {
    zIndex: 1,
    maxWidth: "80%",
    textAlign: "center"
  };

  const buttonContainerStyle = {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    marginTop: "20px"
  };

  const buttonStyle = {
    padding: "10px 20px",
    fontSize: "16px",
    borderRadius: "5px",
    cursor: "pointer",
    border: "none",
    fontWeight: "bold"
  };

  const learnMoreButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#00695C",
    color: "white"
  };

  const contactUsButtonStyle = {
    ...buttonStyle,
    backgroundColor: "transparent",
    color: "white",
    border: "2px solid white"
  };

  return (
    <div style={containerStyle}>
      <div style={overlayStyle}></div>
      <div style={contentStyle}>
        <h1>Sustainable Farming Meets Technology:<br />Building a Greener Future</h1>
        <div style={buttonContainerStyle}>
          <button style={learnMoreButtonStyle}>Learn More</button>
          <button style={contactUsButtonStyle}>Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default App;

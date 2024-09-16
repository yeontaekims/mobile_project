import React, { useState } from "react";

export default function AlertModal({ message, onClose }) {
    if (!message) return null;

    return (
        <div style={modalStyles}>
            <div style={modalContentStyles}>
                <p>{message}</p>
                <button onClick={onClose}>닫기</button>
            </div>
        </div>
    );
}

const modalStyles = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 500,
};

const modalContentStyles = {
    backgroundColor: "white",
    color: "#000",
    padding: "20px",
    borderRadius: "5px",
    textAlign: "center",
};

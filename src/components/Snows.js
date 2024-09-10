import React, { useEffect, useRef } from "react";

const SnowAnimation = () => {
    const snowRefs = useRef([]);

    useEffect(() => {
        snowRefs.current.forEach((snow) => {
            const size = Math.random() * 5 + 1; // 눈송이 크기 랜덤
            const position = Math.random() * 100; // 가로 위치 랜덤
            const delay = Math.random() * 10; // 애니메이션 시작 딜레이
            const duration = Math.random() * 10 + 15; // 애니메이션 지속 시간 (5초~10초)
            snow.style.width = `${size / 2}px`;
            snow.style.height = `${size / 2}px`;
            snow.style.left = `${position}vw`;
            snow.style.animationDelay = `${delay}s`;
            snow.style.animationDuration = `${duration}s`;
        });
    }, []);

    return (
        <div className="snow-container">
            {Array.from({ length: 300 }).map((_, i) => (
                <div
                    key={i}
                    ref={(el) => (snowRefs.current[i] = el)}
                    className="snow"
                />
            ))}
        </div>
    );
};

export default SnowAnimation;

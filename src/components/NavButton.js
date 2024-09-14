import React from "react";

export default function NavButton() {
    const destinationLat = "36.3469"; // 목적지 위도
    const destinationLng = "127.3936"; // 목적지 경도

    const handleNaverClick = () => {
        const naverUrl = `nmap://route?lat=${destinationLat}&lng=${destinationLng}`;
        window.location.href = naverUrl;
    };

    const handleKakaoClick = () => {
        const kakaoUrl = `kakaomap://route?lat=${destinationLat}&lng=${destinationLng}`;
        window.location.href = kakaoUrl;
    };

    const handleTmapClick = () => {
        const tmapUrl = `tmap://route?goalname=Destination&goalx=${destinationLng}&goaly=${destinationLat}`;
        window.location.href = tmapUrl;
    };

    return (
        <div>
            <button onClick={handleNaverClick}>
                네이버 지도에서 경로 찾기
            </button>
            <button onClick={handleKakaoClick}>
                카카오 지도에서 경로 찾기
            </button>
            <button onClick={handleTmapClick}>티맵에서 경로 찾기</button>
        </div>
    );
}

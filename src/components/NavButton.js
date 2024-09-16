import React from "react";

export default function NavButton() {
    const destinationLat = "36.3469"; // 목적지 위도
    const destinationLng = "127.3936"; // 목적지 경도

    return (
        <div>
            <a
                href={`nmap://route?lat=${destinationLat}&lng=${destinationLng}`}
            >
                네이버 지도에서 경로 찾기
            </a>
            <a
                href={`kakaomap://route?lat=${destinationLat}&lng=${destinationLng}`}
            >
                카카오 지도에서 경로 찾기
            </a>
            <a
                href={`tmap://route?goalname=Destination&goalx=${destinationLng}&goaly=${destinationLat}`}
            >
                티맵에서 경로 찾기
            </a>
        </div>
    );
}

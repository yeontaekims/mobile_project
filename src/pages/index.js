import { useState } from "react";

import Image from "next/image";
import localFont from "next/font/local";

import Image_1 from "../images/image_1.jpg";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
export default function Home() {
    const [callImageUp, setCallImageUp] = useState(false);
    return (
        <div className="max-w-[450px] mx-auto pb-80pxr">
            <div className="pt-48pxr pb-30pxr flex flex-col items-center">
                <span className="text-30pxr">
                    2024
                    <span>/</span>
                    11
                    <span>/</span>
                    03
                </span>
                <span>SUNDAY</span>
            </div>
            <div className="mb-[13.34%]">
                <Image
                    className="dark:invert w-full img_cover"
                    src={Image_1}
                    alt=""
                    width={1859}
                    height={2789}
                    priority
                />
            </div>
            <div className="text-center p-[7.34%]">
                <div className=" space-y-10pxr ">
                    <div className="text-13pxr tracking-widest">INVITATION</div>
                    <div className="text-18pxr pb-30pxr">
                        소중한 분들을 초대합니다
                    </div>
                </div>
                <div className="space-y-[7.12%] leading-7 text-15pxr">
                    <p>
                        앞으로의 여정에서 같이 나아갈 한사람과
                        <br />
                        평생을 약속하기로 하였습니다.
                    </p>
                    <p>
                        우연으로 시작한 만남이 운명이 되었고
                        <br />
                        서로의 가장 친한 벗이자 반려가 되어
                        <br />
                        믿음으로 함께 하고자 합니다.
                    </p>
                    <p>
                        이 출발점에 함께 하시어
                        <br /> 자리를 빛내어 주시면 <br />
                        더없는 기쁨이 되겠습니다.
                    </p>
                </div>
            </div>
            <div className="mb-[13.34%]">
                <div className="relative overflow-hidden px-[7.34%]">
                    <div
                        className={`absolute top-0 left-0 right-0 bottom-0 flex justify-center px-[7.34%] items-center ${
                            callImageUp ? "" : "invisible"
                        }`}
                        // onClick={() => {
                        //     setCallImageUp(!callImageUp);
                        // }}
                    >
                        <div className="w-full px-[7.34%] space-y-20pxr">
                            <div>신랑측</div>
                            <div className="w-full flex justify-between gap-x-10pxr ">
                                <span className="flex-1">신랑</span>
                                <span className="flex-1 text-center">
                                    길성재
                                </span>
                                <span className="flex gap-x-12pxr items-center justify-end flex-1">
                                    <PhoneIcon width={16} height={16} />
                                    <EnvelopeIcon width={18} height={18} />
                                </span>
                            </div>
                            <div className="w-full flex justify-between gap-x-10pxr">
                                <span className="flex-1">신랑 아버지</span>
                                <span className="flex-1 text-center">
                                    길성재
                                </span>
                                <span className="flex gap-x-12pxr items-center  justify-end flex-1">
                                    <PhoneIcon width={16} height={16} />
                                    <EnvelopeIcon width={18} height={18} />
                                </span>
                            </div>
                            <div className="w-full flex justify-between gap-x-10pxr">
                                <span className="flex-1">신랑 어머니</span>
                                <span className="flex-1 text-center">
                                    길성재
                                </span>
                                <span className="flex gap-x-12pxr items-center  justify-end flex-1">
                                    <PhoneIcon width={16} height={16} />
                                    <EnvelopeIcon width={18} height={18} />
                                </span>
                            </div>
                        </div>
                    </div>
                    <Image
                        className={`w-full  aspect-[3/2] object-cover rounded-xl duration-500 ${
                            callImageUp ? "-translate-y-full" : ""
                        }`}
                        src={Image_1}
                        alt=""
                        width={1859}
                        height={2789}
                        priority
                    />
                </div>
                <div className="flex justify-center  pt-[7.34%]">
                    <button
                        className="flex items-center justify-center gap-x-6pxr w-[180px] border border-[#e1e1e1] rounded-10pxr py-8pxr"
                        onClick={() => {
                            setCallImageUp(!callImageUp);
                        }}
                    >
                        <PhoneIcon width={16} height={16} />
                        <span>연락하기</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

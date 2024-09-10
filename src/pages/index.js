import { useState } from "react";
import Image from "next/image";
import localFont from "next/font/local";
import ModalBack from "@/components/ModalBack";
import SnowAnimation from "@/components/Snows";
import Image_1 from "../images/image_1.jpg";
import tw, { styled } from "twin.macro";

import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

const Wrapper = styled.div`
    ${tw`h-[100vh] overflow-scroll`}
    .contents_title {
        ${tw`text-16pxr xs:text-18pxr`}
    }
    .contents_text {
        ${tw`text-12pxr ss:text-14pxr xs:text-16pxr`}
    }
    .en_title {
        ${tw`text-12pxr xs:text-13pxr`}
    }
`;

export default function Home() {
    const [callImageUp, setCallImageUp] = useState(false);
    const [modalState, setModalState] = useState(null);

    return (
        <Wrapper>
            <SnowAnimation />

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
                        className="dark:invert w-full img_cover rounded-full"
                        src={Image_1}
                        alt=""
                        width={1859}
                        height={2789}
                        priority
                    />
                </div>
                <div className="text-center p-[7.34%]">
                    <div className=" space-y-10pxr ">
                        <div className="en_title tracking-widest">
                            INVITATION
                        </div>
                        <div className="contents_title pb-30pxr">
                            소중한 분들을 초대합니다
                        </div>
                    </div>
                    <div className="space-y-[7.12%] leading-7 contents_text">
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
                            가을이 깊어지는 그 날
                            <br /> 자리를 빛내어 주시면 <br />
                            더없는 기쁨이 되겠습니다.
                        </p>
                    </div>
                </div>
                <div className="mb-[13.34%]">
                    <div className="px-[7.34%] relative overflow-hidden">
                        <Image
                            className={`w-full  aspect-[3/2] object-cover rounded-xl duration-500`}
                            src={Image_1}
                            alt=""
                            width={1859}
                            height={2789}
                            priority
                        />
                        <div className="absolute bottom-40pxr   w-full ">
                            <svg
                                className="waves"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                viewBox="0 24 150 28"
                                preserveAspectRatio="none"
                                shapeRendering="auto"
                            >
                                <defs>
                                    <path
                                        id="gentle-wave"
                                        d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                                    />
                                </defs>
                                <g className="parallax">
                                    <use
                                        className="u-1"
                                        xlinkHref="#gentle-wave"
                                        x={48}
                                        y={0}
                                        fill="rgba(250,250,250,0.7)"
                                    />
                                    <use
                                        className="u-2"
                                        xlinkHref="#gentle-wave"
                                        x={48}
                                        y={3}
                                        fill="rgba(250,250,250,0.5)"
                                    />
                                    <use
                                        className="u-3"
                                        xlinkHref="#gentle-wave"
                                        x={48}
                                        y={5}
                                        fill="rgba(250,250,250,0.3)"
                                    />
                                    <use
                                        className="u-4"
                                        xlinkHref="#gentle-wave"
                                        x={48}
                                        y={7}
                                        fill="rgba(250,250,250,0.2)"
                                    />
                                </g>
                            </svg>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-center contents_text mt-[4.44%]">
                        <p>
                            <span className="font-semibold">
                                {" "}
                                길성재 &middot; 길성재{" "}
                            </span>
                            의 장남{" "}
                            <span className="font-semibold">길성재</span>
                        </p>
                        <p>
                            <span className="font-semibold">
                                {" "}
                                길성재 &middot; 길성재
                            </span>{" "}
                            의 장녀{" "}
                            <span className="font-semibold">정수진</span>
                        </p>
                    </div>

                    <div className="flex justify-center  pt-[7.34%]">
                        <button
                            className="flex items-center justify-center gap-x-6pxr w-[120px] ss:w-[140px] xs:w-[180px] border border-[#e1e1e1] rounded-10pxr    py-4pxr xs:py-8pxr contents_text"
                            onClick={() => {
                                setModalState("phone");
                            }}
                        >
                            <PhoneIcon
                                className="w-12pxr xs:w-16pxr h-12pxr xs:h-16pxr"
                                width={16}
                                height={16}
                            />
                            <span>연락하기</span>
                        </button>
                    </div>
                </div>
            </div>
            {/* 연락하기 모달 */}
            <ModalBack
                action={modalState === "phone"}
                closeHandle={setModalState}
            >
                <div
                    className={`flex flex-col justify-start  items-center h-full max-w-[450px] mx-auto`}
                >
                    <div className="mb-[11.12%] flex flex-col justify-start items-center">
                        <p className="contents_text">CONACT</p>
                        <p className="contents_title">연락하기</p>
                    </div>
                    <div className="w-[90%] space-y-[20%] contents_text">
                        <div className=" px-[7.34%] space-y-20pxr ">
                            <div className="pb-10pxr border-b border-[#1a1a1a] border-dotted">
                                신랑측
                            </div>
                            <div className="w-full flex justify-between gap-x-10pxr ">
                                <span className="flex-1">신랑</span>
                                <span className="flex-1 text-center">
                                    길성재
                                </span>
                                <span className="flex gap-x-12pxr items-center justify-end flex-1">
                                    <a href="tel:010-4872-8824">
                                        <PhoneIcon
                                            className="w-12pxr xs:w-16pxr h-12pxr xs:h-16pxr"
                                            width={16}
                                            height={16}
                                        />
                                    </a>
                                    <a href="sms:010-4872-8824">
                                        <EnvelopeIcon
                                            className="w-14pxr xs:w-18pxr h-14pxr xs:h-18pxr"
                                            width={18}
                                            height={18}
                                        />
                                    </a>
                                </span>
                            </div>
                            <div className="w-full flex justify-between gap-x-10pxr">
                                <span className="flex-1">신랑 아버지</span>
                                <span className="flex-1 text-center">
                                    길성재
                                </span>
                                <span className="flex gap-x-12pxr items-center justify-end flex-1">
                                    <a href="tel:010-4872-8824">
                                        <PhoneIcon
                                            className="w-12pxr xs:w-16pxr h-12pxr xs:h-16pxr"
                                            width={16}
                                            height={16}
                                        />
                                    </a>
                                    <a href="sms:010-4872-8824">
                                        <EnvelopeIcon
                                            className="w-14pxr xs:w-18pxr h-14pxr xs:h-18pxr"
                                            width={18}
                                            height={18}
                                        />
                                    </a>
                                </span>
                            </div>
                            <div className="w-full flex justify-between gap-x-10pxr">
                                <span className="flex-1">신랑 어머니</span>
                                <span className="flex-1 text-center">
                                    길성재
                                </span>
                                <span className="flex gap-x-12pxr items-center justify-end flex-1">
                                    <a href="tel:010-4872-8824">
                                        <PhoneIcon
                                            className="w-12pxr xs:w-16pxr h-12pxr xs:h-16pxr"
                                            width={16}
                                            height={16}
                                        />
                                    </a>
                                    <a href="sms:010-4872-8824">
                                        <EnvelopeIcon
                                            className="w-14pxr xs:w-18pxr h-14pxr xs:h-18pxr"
                                            width={18}
                                            height={18}
                                        />
                                    </a>
                                </span>
                            </div>
                        </div>
                        <div className=" px-[7.34%] space-y-20pxr ">
                            <div className="pb-10pxr border-b border-[#1a1a1a] border-dotted">
                                신부측
                            </div>
                            <div className="w-full flex justify-between gap-x-10pxr ">
                                <span className="flex-1">신부</span>
                                <span className="flex-1 text-center">
                                    정수진
                                </span>
                                <span className="flex gap-x-12pxr items-center justify-end flex-1">
                                    <a href="tel:010-4872-8824">
                                        <PhoneIcon
                                            className="w-12pxr xs:w-16pxr h-12pxr xs:h-16pxr"
                                            width={16}
                                            height={16}
                                        />
                                    </a>
                                    <a href="sms:010-4872-8824">
                                        <EnvelopeIcon
                                            className="w-14pxr xs:w-18pxr h-14pxr xs:h-18pxr"
                                            width={18}
                                            height={18}
                                        />
                                    </a>
                                </span>
                            </div>
                            <div className="w-full flex justify-between gap-x-10pxr">
                                <span className="flex-1">신부 아버지</span>
                                <span className="flex-1 text-center">
                                    정수진
                                </span>
                                <span className="flex gap-x-12pxr items-center justify-end flex-1">
                                    <a href="tel:010-4872-8824">
                                        <PhoneIcon
                                            className="w-12pxr xs:w-16pxr h-12pxr xs:h-16pxr"
                                            width={16}
                                            height={16}
                                        />
                                    </a>
                                    <a href="sms:010-4872-8824">
                                        <EnvelopeIcon
                                            className="w-14pxr xs:w-18pxr h-14pxr xs:h-18pxr"
                                            width={18}
                                            height={18}
                                        />
                                    </a>
                                </span>
                            </div>
                            <div className="w-full flex justify-between gap-x-10pxr">
                                <span className="flex-1">신부 어머니</span>
                                <span className="flex-1 text-center">
                                    정수진
                                </span>
                                <span className="flex gap-x-12pxr items-center justify-end flex-1">
                                    <a href="tel:010-4872-8824">
                                        <PhoneIcon
                                            className="w-12pxr xs:w-16pxr h-12pxr xs:h-16pxr"
                                            width={16}
                                            height={16}
                                        />
                                    </a>
                                    <a href="sms:010-4872-8824">
                                        <EnvelopeIcon
                                            className="w-14pxr xs:w-18pxr h-14pxr xs:h-18pxr"
                                            width={18}
                                            height={18}
                                        />
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </ModalBack>
        </Wrapper>
    );
}

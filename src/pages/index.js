import { useState, useEffect } from "react";
import Image from "next/image";
import localFont from "next/font/local";
import ModalBack from "@/components/ModalBack";
import SnowAnimation from "@/components/Snows";
import Contact from "@/components/Contact";
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
    .question_title {
        ${tw`text-16pxr xs:text-17pxr `}
    }
    .question_text {
        ${tw`text-12pxr xs:text-14pxr`}
    }
    .en_title {
        ${tw`text-12pxr xs:text-13pxr`}
    }
`;
const MAN_CONTACT_DATA = {
    type: "man",
    data: [
        {
            type: "groom",
            name: "길성재",
            number: "010-4872-8824",
            account: "",
            account_number: "",
        },
        {
            type: "father",
            name: "길성재",
            number: "010-4872-8824",
            account: "",
            account_number: "",
        },
        {
            type: "mather",
            name: "길성재",
            number: "010-4872-8824",
            account: "",
            account_number: "",
        },
    ],
};
const WOMAN_CONTACT_DATA = {
    type: "woman",
    data: [
        {
            type: "bride",
            name: "길성재",
            number: "010-4872-8824",
            account: "",
            account_number: "",
        },
        {
            type: "father",
            name: "길성재",
            number: "010-4872-8824",
            account: "",
            account_number: "",
        },
        {
            type: "mather",
            name: "길성재",
            number: "010-4872-8824",
            account: "",
            account_number: "",
        },
    ],
};
export default function Home() {
    const [modalState, setModalState] = useState(null);
    const [interviewMore, setInterviewMore] = useState(false);

    return (
        <Wrapper>
            <SnowAnimation />

            <div className=" max-w-[450px] mx-auto pb-80pxr relative z-[2]">
                <div className="mb-[21.34%] px-[6.67%]">
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

                    <div>
                        <Image
                            className="dark:invert w-full img_cover rounded-t-full"
                            src={Image_1}
                            alt=""
                            width={1859}
                            height={2789}
                            layout="responsive"
                        />
                    </div>
                    <div className="flex flex-col items-center justify-center ">
                        <span className="mb-[4.45%] contents-title">
                            길성재 &middot; 정수진
                        </span>
                        <p className="text-center contents-text">
                            2024년 11월 3일 일요일 오전 11시 30분
                            <br />
                            웨딩시티 신도림 7F, 아스타홀
                        </p>
                    </div>
                </div>
                {/* 연락하기 섹션 */}
                <div>
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
                        <div className="px-[7.34%] overflow-hidden">
                            <Image
                                className={`w-full aspect-[3/2] object-cover rounded-xl duration-500`}
                                src={Image_1}
                                alt=""
                                layout="responsive"
                                width={1859}
                                height={2789}
                            />
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
                {/* 인터뷰 섹션 */}
                <div>
                    <div className="text-center p-[7.34%]">
                        <div className=" space-y-10pxr ">
                            <div className="en_title tracking-widest">
                                INTERVIEW
                            </div>
                            <div className="contents_title pb-30pxr">
                                우리 두 사람의 이야기
                            </div>
                        </div>
                        <div className="leading-7 contents_text">
                            <p>
                                결혼을 앞두고 저희 두 사람의
                                <br />
                                인터뷰를 준비했습니다.
                            </p>
                        </div>
                    </div>
                    <div className="mb-[13.34%]">
                        <div className="px-[7.34%] overflow-hidden">
                            <Image
                                className={`w-full aspect-[3/2] object-cover rounded-xl duration-500`}
                                src={Image_1}
                                alt=""
                                width={1859}
                                height={2789}
                                layout="responsive"
                            />
                        </div>

                        <div className="flex justify-center  pt-[7.34%]">
                            <button
                                className="flex items-center justify-center gap-x-6pxr w-[180px] ss:w-[200px] xs:w-[240px] border border-[#e1e1e1] rounded-10pxr    py-4pxr xs:py-8pxr contents_text"
                                onClick={() => {
                                    setModalState("interview");
                                }}
                            >
                                <EnvelopeIcon
                                    className="w-14pxr xs:w-18pxr h-14pxr xs:h-18pxr"
                                    width={16}
                                    height={16}
                                />
                                <span>신랑 & 신부의 인터뷰 보기</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* 연락하기 모달 */}
            <ModalBack
                action={modalState === "phone"}
                closeHandle={setModalState}
            >
                <div
                    className={`flex flex-col justify-start  items-center max-w-[450px] mx-auto`}
                >
                    <div className="mb-[11.12%] flex flex-col justify-start items-center">
                        <p className="contents_text">CONACT</p>
                        <p className="contents_title">연락하기</p>
                    </div>
                    <div className="w-[90%] space-y-[20%] contents_text">
                        <Contact info={MAN_CONTACT_DATA} />
                        <Contact info={WOMAN_CONTACT_DATA} />
                    </div>
                </div>
            </ModalBack>
            <ModalBack
                action={modalState === "interview"}
                closeHandle={setModalState}
            >
                <div
                    className={`flex flex-col justify-start self-stretch items-center max-w-[450px] mx-auto mb-[7.34%] ${
                        !interviewMore ? "overflow-hidden" : ""
                    }`}
                >
                    <div className="w-full pb-[11.12%] flex flex-col justify-start items-center">
                        <p className="contents_text">INTERVIEW</p>
                        <p className="contents_title">우리들의 인터뷰</p>
                    </div>
                    <div className=" mx-[4.45%] ">
                        <div className="py-[4.45%] space-y-[1.78%] border-t border-[#f1f1f1] border-dotted">
                            <p className="question_title">
                                Q1. 배우자의 첫인상은 어땠나요 ?
                            </p>
                            <p className="question_text px-[1.78%]">
                                🤵🏻 신랑 김진호
                                <br />
                                <br />
                                드디어 장가갑니다! 😊 먼저 인생에서 가장 큰
                                결심을 할 수 있게 해준 예비 신부에게 너무
                                고맙습니다.
                                <br />
                                <br />
                                가족이라는 단어를 함께 한다는 것은 정말 설레고
                                아름다운 일이지만 그만큼 책임감을 더 갖고
                                살아야겠다고 다짐했습니다.
                                <br />
                                <br />
                                <br />
                                👰🏻&zwj;♀️ 신부 이나은
                                <br />
                                <br />
                                오래된 연인에서 이제는 서로의 부부가 되기로 약속
                                했습니다!
                                <br />
                                <br />
                                아직은 남자친구라는 말이 더 익숙하지만 그동안 제
                                옆을 든든하게 지켜주면서 큰 행복을 준,
                            </p>
                        </div>
                        <div className="py-[4.45%] space-y-[1.78%] border-t border-[#f1f1f1] border-dotted">
                            <p className="question_title">
                                Q1. 배우자의 첫인상은 어땠나요 ?
                            </p>
                            <p className="question_text px-[1.78%]">
                                🤵🏻 신랑 김진호
                                <br />
                                <br />
                                드디어 장가갑니다! 😊 먼저 인생에서 가장 큰
                                결심을 할 수 있게 해준 예비 신부에게 너무
                                고맙습니다.
                                <br />
                                <br />
                                가족이라는 단어를 함께 한다는 것은 정말 설레고
                                아름다운 일이지만 그만큼 책임감을 더 갖고
                                살아야겠다고 다짐했습니다.
                                <br />
                                <br />
                                <br />
                                👰🏻&zwj;♀️ 신부 이나은
                                <br />
                                <br />
                                오래된 연인에서 이제는 서로의 부부가 되기로 약속
                                했습니다!
                                <br />
                                <br />
                                아직은 남자친구라는 말이 더 익숙하지만 그동안 제
                                옆을 든든하게 지켜주면서 큰 행복을 준,
                            </p>
                        </div>
                        <div className="py-[4.45%] space-y-[1.78%] border-t border-[#f1f1f1] border-dotted">
                            <p className="question_title">
                                Q1. 배우자의 첫인상은 어땠나요 ?
                            </p>
                            <p className="question_text px-[1.78%]">
                                🤵🏻 신랑 김진호
                                <br />
                                <br />
                                드디어 장가갑니다! 😊 먼저 인생에서 가장 큰
                                결심을 할 수 있게 해준 예비 신부에게 너무
                                고맙습니다.
                                <br />
                                <br />
                                가족이라는 단어를 함께 한다는 것은 정말 설레고
                                아름다운 일이지만 그만큼 책임감을 더 갖고
                                살아야겠다고 다짐했습니다.
                                <br />
                                <br />
                                <br />
                                👰🏻&zwj;♀️ 신부 이나은
                                <br />
                                <br />
                                오래된 연인에서 이제는 서로의 부부가 되기로 약속
                                했습니다!
                                <br />
                                <br />
                                아직은 남자친구라는 말이 더 익숙하지만 그동안 제
                                옆을 든든하게 지켜주면서 큰 행복을 준,
                            </p>
                        </div>
                    </div>
                </div>
                {!interviewMore && (
                    <div className="flex justify-center  pb-[7.34%]">
                        <button
                            className="flex items-center justify-center gap-x-6pxr w-[180px] ss:w-[200px] xs:w-[240px] border border-[#e1e1e1] rounded-10pxr    py-4pxr xs:py-8pxr contents_text"
                            onClick={() => {
                                setInterviewMore(true);
                            }}
                        >
                            <span>더보기</span>
                        </button>
                    </div>
                )}
            </ModalBack>
        </Wrapper>
    );
}

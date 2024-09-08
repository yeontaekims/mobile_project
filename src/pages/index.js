import Image from "next/image";
import localFont from "next/font/local";

export default function Home() {
  return (
    <div className="max-w-[760px] mx-auto">
      <div className="py-20pxr flex flex-col items-center">
        <span>2024/11/03</span>
        <span>SATURDAY</span>
      </div>
      <div>
        <Image
          className="dark:invert w-full"
          src="https://images.theirmood.com/resources/46097/card/ncGgF35EJm/mWqdN6w1wk.jpeg?f=webp&w=660"
          alt="Next.js logo"
          width={1859}
          height={2789}
          priority
        />
      </div>
    </div>
  );
}

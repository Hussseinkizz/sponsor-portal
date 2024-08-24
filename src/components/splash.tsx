import { FaHandHoldingHeart } from "react-icons/fa";

interface Props {}

export const Splash = (props: Props) => {
  return (
    <section className="flex h-screen w-full flex-col items-center justify-center gap-4 bg-slate-50 text-amber-500">
      {/* <img
        src="/src/assets/cropped-logo-1.png"
        alt="omuto logo"
        className="animate-infinite animate-duration-[3000ms] animate-delay-1000 animate-ease-linear size-48 animate-pulse"
      /> */}
      <FaHandHoldingHeart className="animate-infinite animate-duration-[3000ms] animate-delay-1000 animate-ease-linear size-12 animate-pulse" />
    </section>
  );
};

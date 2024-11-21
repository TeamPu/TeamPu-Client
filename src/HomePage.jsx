import InforSection from "./InforSection";
import LoginSection from "./LoginSection";
import ReservationStatusSection from "./ReservationStatusSection";

export default function HomePage() {
  return (
    <section className="box-border flex h-[calc(100vh-220px)] w-full gap-5 overflow-hidden p-[20px]">
      <ReservationStatusSection />
      <div className="flex flex-[2] flex-col gap-5">
        <LoginSection />
        <InforSection />
      </div>
    </section>
  );
}

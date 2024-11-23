import HomeCalendar from "../components/HomeCalendar";

export default function HomePage() {
  return (
    <section className="section">
      <div className="card">
        <p className="title">
          <span className="text-primary">11월</span> 야간 잔류 신청 현황
        </p>
        <HomeCalendar showDoubleView={false} />
      </div>
    </section>
  );
}

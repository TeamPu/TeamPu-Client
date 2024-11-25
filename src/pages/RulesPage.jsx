import TeamProjectRoom from "../assets/TeamProjectRoom.png";

export default function RulesPage() {
  return (
    <div className="section">
      <div className="card cardSize flex flex-col">
        <p className="title">팀프로젝트실 이용수칙</p>
        <img
          className="my-5 h-64 rounded-lg object-cover"
          src={TeamProjectRoom}
          alt="Team Project Room"
        />
        <div className="description">
          <ul>
            <li>깨끗한 환경 유지를 위해 취식은 금지되어 있습니다.</li>
            <li>이용 시간은 밤 10시까지입니다.</li>
            <li>
              공정한 이용을 위해 장시간 자리를 비우거나 맡아두는 행위는 삼가
              주십시오.
            </li>
            <li>공용 자산인 컴퓨터는 소중히 사용해 주시기 바랍니다.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

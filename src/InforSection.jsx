import TeamRoomImg from "./assets/TeamProjectRoom.png";

export default function InforSection() {
  return (
    <div className="card h-full flex-[2]">
      <p className="title">
        정보
        <span className="description">팀프로젝트실은 이런 곳이에요!</span>
      </p>
      <img
        src={TeamRoomImg}
        className="mt-5 h-[200px] w-full rounded-[8px] object-cover"
      ></img>
    </div>
  );
}

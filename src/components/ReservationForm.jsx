import FormInput from "./FormInput";
import moment from "moment";
import GroupForm from "./GroupForm";

export default function ReservationForm({ date }) {
  // 나중에 로그인 정보 받아오기, placeholder & disabled

  return (
    <div className="flex h-full flex-col gap-y-2.5">
      <FormInput
        key="name-id"
        label="이름 · 학번"
        type="text"
        id="name-id"
        name="name-id"
        disabled={true}
        placeholder="서왕덕 · 202411678"
      />
      <FormInput
        key="phone-email"
        label="전화번호 · 이메일"
        type="text"
        id="phone-email"
        name="phone-email"
        disabled={true}
        placeholder="01077772838 · kingduck@kyonggi.ac.kr"
      />
      <FormInput
        key="date"
        label="날짜"
        type="text"
        id="date"
        name="date"
        disabled={true}
        placeholder={moment(date).format("YYYY. MM. DD")}
      />
      <GroupForm />
    </div>
  );
}

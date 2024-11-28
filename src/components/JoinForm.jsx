import FormInput from "./FormInput";
// import { Link } from "react-router-dom";

export default function JoinForm() {
  return (
    <div className="flex flex-col gap-y-2.5">
      <FormInput
        key="name"
        noLabel={true}
        type="text"
        id="name"
        name="name"
        placeholder="이름"
      />
      <FormInput
        key="studentId"
        noLabel={true}
        type="text"
        id="studentId"
        name="studentId"
        placeholder="학번"
      />
      <FormInput
        key="phone"
        noLabel={true}
        type="tel"
        id="phone"
        name="phone"
        placeholder="전화번호"
      />
      <FormInput
        key="email"
        noLabel={true}
        type="email"
        id="email"
        name="email"
        placeholder="이메일"
      />
      <div className="flex w-full justify-center">
        <button className="grid w-[40%] place-items-center rounded-[8px] bg-primary-dark py-2 text-white transition duration-200 ease-in-out hover:bg-white hover:text-primary">
          가입하기
        </button>
      </div>
    </div>
  );
}

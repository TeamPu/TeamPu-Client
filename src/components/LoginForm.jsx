import { useMemberLogin } from "../hooks";
import { Link } from "react-router-dom";
import FormInput from "./FormInput";

export default function LoginForm() {
  const { handleLoginChange, handleLoginSubmit, loginData } = useMemberLogin();

  return (
    <>
      <div className="flex gap-x-2.5">
        <div className="flex w-64 flex-col gap-y-2.5">
          <FormInput
            key="id"
            noLabel={true}
            type="id"
            id="id"
            name="loginId"
            placeholder="아이디"
            value={loginData["loginId"]}
            onChange={handleLoginChange}
          />
          <FormInput
            key="password"
            noLabel={true}
            type="password"
            id="password"
            name="password"
            placeholder="비밀번호"
            value={loginData["password"]}
            onChange={handleLoginChange}
          />
        </div>
        <button
          className="button rounded-[8px] p-3"
          onClick={handleLoginSubmit}
        >
          로그인
        </button>
      </div>
      <div className="flex justify-start pt-2.5 text-secondary-dark underline">
        <Link to="/join" className="mr-2.5">
          회원가입
        </Link>
        <span>비밀번호를 잃어버렸어요!</span>
      </div>
    </>
  );
}

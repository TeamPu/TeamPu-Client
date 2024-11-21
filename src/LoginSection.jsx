export default function LoginSection() {
  return (
    <div className="card h-full flex-[1]">
      <p className="title">
        로그인
        <span className="description">로그인 후 야간 잔류를 신청하세요!</span>
      </p>
      <div className="mt-5 flex w-full gap-1">
        <form className="flex flex-[5] flex-col gap-1">
          <input type="text" placeholder="아이디" className="textfield" />
          <input type="password" placeholder="비밀번호" className="textfield" />
        </form>
        <button className="button flex-1">로그인</button>
      </div>
    </div>
  );
}

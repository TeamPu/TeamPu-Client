export default function MyPageForm() {
  return (
    <div className="mt-5 flex flex-col gap-y-2.5">
      <div className="flex flex-col gap-y-2.5">
        <label htmlFor="name">이름</label>
        <input type="text" id="name" name="name" className="shared-border" />
      </div>
    </div>
  );
}

import FormInput from "./FormInput";
import { useMemberJoin } from "../hooks";

export default function JoinForm() {
  const {
    initialState,
    placeholders,
    handleChange,
    handleSubmit,
    formData,
    loading,
  } = useMemberJoin();

  return (
    <div className="flex flex-col gap-y-2.5">
      {Object.keys(initialState).map((key, index) => (
        <FormInput
          key={key}
          noLabel={true}
          type={key === "email" ? "email" : "text"}
          id={key}
          name={key}
          placeholder={placeholders[index]}
          value={formData[key]}
          onChange={handleChange}
        />
      ))}
      <div className="flex w-full justify-center">
        <button
          disabled={loading}
          onClick={handleSubmit}
          className="grid w-[40%] place-items-center rounded-[8px] bg-primary-dark py-2 text-white transition duration-200 ease-in-out hover:bg-white hover:text-primary"
        >
          {loading ? "가입 중..." : "가입하기"}
        </button>
      </div>
    </div>
  );
}

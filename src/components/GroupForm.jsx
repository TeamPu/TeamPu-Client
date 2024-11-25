import { useState } from "react";
import FormInput from "./FormInput";

export default function GroupForm() {
  const [cnt, setCnt] = useState(1);
  return (
    <div className="flex h-full flex-col gap-y-2.5">
      <p className="label">인원 · 명단</p>
      <div className="flex gap-x-1">
        <button
          onClick={() => setCnt(cnt - 1)}
          className="shared-border px-4"
          disabled={cnt === 1}
        >
          -
        </button>
        <input
          placeholder={cnt}
          disabled={true}
          className="shared-border input !w-fit"
        />
        <button
          onClick={() => setCnt(cnt + 1)}
          className="shared-border px-4"
          disabled={cnt === 4}
        >
          +
        </button>
      </div>
      <div className="h-full overflow-scroll">
        <div className="flex flex-col gap-y-2.5">
          {Array.from({ length: cnt }, (_, i) => (
            <PersonForm key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

function PersonForm() {
  return (
    <div className="flex gap-x-1">
      <FormInput placeholder="이름" type="text" noLabel={true} />
      <FormInput placeholder="전화번호" type="text" noLabel={true} />
    </div>
  );
}

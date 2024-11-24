export default function MyPageForm() {
  const fields = [
    { label: "이름", type: "text", id: "name", name: "name" },
    { label: "학번", type: "text", id: "student-id", name: "studentId" },
    { label: "전화번호", type: "tel", id: "phone", name: "phone" },
    { label: "이메일", type: "email", id: "email", name: "email" },
  ];

  return (
    <div className="mt-5 flex flex-col gap-y-2.5">
      {fields.map((field) => (
        <FormInput
          key={field.id}
          label={field.label}
          type={field.type}
          id={field.id}
          name={field.name}
        />
      ))}
    </div>
  );
}

function FormInput({ label, type, id, name }) {
  return (
    <div className="flex flex-col gap-y-2.5">
      <label htmlFor={id} className="label">
        {label}
      </label>
      <input type={type} id={id} name={name} className="shared-border input" />
    </div>
  );
}

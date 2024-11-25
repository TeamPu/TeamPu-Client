export default function FormInput({ label, type, id, name }) {
  return (
    <div className="flex flex-col gap-y-2.5">
      <label htmlFor={id} className="label">
        {label}
      </label>
      <input type={type} id={id} name={name} className="shared-border input" />
    </div>
  );
}

export default function FormInput({
  label,
  type,
  id,
  name,
  disabled = false,
  placeholder = "",
  noLabel = false,
}) {
  return (
    <div className="flex flex-col gap-y-2.5">
      <label htmlFor={id} className={`label ${noLabel ? "hidden" : ""}`}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        className="shared-border input"
        disabled={disabled}
        placeholder={placeholder}
      />
    </div>
  );
}

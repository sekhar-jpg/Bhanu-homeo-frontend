const Textarea = ({ placeholder, value, onChange }) => (
  <textarea
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className="border p-2 rounded-md w-full h-32"
  />
);

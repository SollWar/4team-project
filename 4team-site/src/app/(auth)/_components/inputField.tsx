type InputFieldProps = {
  label: string
  id: string
  name: string
  placeholder: string
  required: boolean
  type: string
  icon: string
  recover?: boolean
}

const InputField = ({
  label,
  id,
  name,
  placeholder,
  required,
  type,
  icon,
  recover = false,
}: InputFieldProps) => {
  return (
    <>
      <div className="flex items-center justify-between pl-1">
        <label className="block text-xs font-medium text-(--muted) uppercase tracking-wider">
          {label}
        </label>
        {recover ? (
          <a
            className="text-xs text-(--accent-2) hover:text-white transition-colors"
            href="#"
          >
            Забыли пароль?
          </a>
        ) : (
          ''
        )}
      </div>
      <div className="relative group">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <div
            className="w-5 h-5 bg-(--muted) group-focus-within:bg-(--accent-2) transition-colors"
            style={{
              maskImage: `url(${icon})`,
              maskRepeat: 'no-repeat',
              maskSize: 'contain',
              WebkitMaskImage: `url(${icon})`,
              WebkitMaskRepeat: 'no-repeat',
            }}
          />
        </div>
        <input
          className="block w-full pl-10 pr-3 py-2.5 bg-(--input-bg) border border-(--border) rounded-lg text-sm text-white placeholder-gray-600 focus:ring-1 focus:ring-(--accent-2) focus:border-(--accent-2) focus:bg-[rgba(255,255,255,0.05)] transition-all outline-none"
          id={id}
          name={name}
          placeholder={placeholder}
          required={required}
          type={type}
        />
      </div>
    </>
  )
}

export default InputField

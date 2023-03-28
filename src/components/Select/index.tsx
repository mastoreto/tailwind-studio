interface SelectProps {
    options: string[]
}

const Select = ({options}:SelectProps) => {
  return (
    <select
        className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline"
    >
        {options.map((option, index) => (
            <option key={index}>{option}</option>
        ))}
    </select>
  )
}

export default Select;
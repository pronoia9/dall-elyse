const FormField = ({ labelName, type, name, placeholder, value, handleChange, isSurpriseMe, handleSurpriseMe }) => {
  return (
    <div>
      <div className='flex items-center gap-2 mb-2'>
        <label htmlFor={name} className='block text-sm font-medium text-[#d5d9e0]'>
          {labelName}
        </label>
        {isSurpriseMe && (
          <button
            type='button'
            onClick={handleSurpriseMe}
            className='font-semibold text-xs bg-[#4a6d88] py-1 px-2 rounded-[5px] text-[#d5d9e0]'>
            Surprise Me
          </button>
        )}
      </div>
      <input
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className='bg-[#0b0b14] border border-[#001e38] text-[#d5d9e0] text-sm rounded-lg focus:ring-[#4a6d88] focus:border-[#4a6d88] outline-none block w-full p-3'
      />
    </div>
  );
};

export default FormField;

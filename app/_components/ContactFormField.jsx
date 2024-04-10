export default function ContactFormField({ label, placeholder }) {
    return (
      <div className="flex flex-col mt-5 text-base leading-6 text-white max-md:max-w-full">
        <label className="max-md:max-w-full">{label}</label>
        <input
          type="text"
          placeholder={placeholder}
          className="m-1 py-1 px-2 text-base text-white bg-transparent border-b border-white max-md:max-w-full focus:outline-none"
        />
      </div>
    );
  }
  
export default function ErrorMessage({ handleCloseButton }) {
  return (
    <div className="relative mx-auto mt-5 w-fit rounded bg-white max-sm:mx-4">
      <div className="flex justify-center p-3 pt-6">
        <h4 className="font-semibold text-red-500">
          Invalid IP address. Please enter a valid IP address. (For example:
          203.0.113.14)
        </h4>
      </div>
      <span
        onClick={handleCloseButton}
        className="absolute top-1 right-0 h-5 w-5 cursor-pointer font-semibold text-black"
      >
        X
      </span>
    </div>
  );
}

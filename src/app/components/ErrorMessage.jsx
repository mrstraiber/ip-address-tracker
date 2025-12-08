export default function ErrorMessage() {
  return (
    <div>
      <h4 className="m-auto mt-5 flex w-fit justify-center rounded-xl bg-white p-2 font-semibold text-red-400">
        Invalid IP address. Please enter a valid IP address. (For example:
        203.0.113.14)
      </h4>
    </div>
  );
}

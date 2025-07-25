import successIcon from "/icon-success.svg";

export default function Success({
  email,
  onDismiss,
}: {
  email: string;
  onDismiss: () => void;
}) {
  return (
    <main className="w-full h-screen bg-white p-6 md:bg-blue-700 md:flex md:justify-center">
      <div className="flex flex-col justify-between h-full md:bg-white md:h-auto md:justify-center md:self-center md:rounded-2xl md:p-12 md:gap-6 md:max-w-lg">
        <div className="flex flex-col gap-6 mt-32 items-start md:mt-0">
          <img src={successIcon} alt="Success" />
          <h1 className="text-4xl font-bold md:text-5xl">Thanks for subscribing!</h1>
          <p className="text-md">
            A confirmation email has been sent to{" "}
            <span className="font-bold">{email}</span>. Please open it and click
            the button inside to confirm your subscription.
          </p>
        </div>
        <button
          onClick={onDismiss}
          className="bg-blue-800 text-white px-8 py-4 rounded-md w-full mb-4 md:mt-4 hover:bg-gradient-to-r from-pink-500 to-orange-500"
        >
          Dismiss message
        </button>
      </div>
    </main>
  );
}

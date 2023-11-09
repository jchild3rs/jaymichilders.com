export default function Custom404() {
  return (
    <div className="text-center flex flex-col h-screen items-center justify-center">
      <h1 className="mt-8 text-white light-mode:bg-gray-100 light-mode:text-gray-900 font-semibold text-2xl mb-4">
        Page Not Found
      </h1>
      <p>
        <a href="/" className="underline" title="Take me home">
          Take me home
        </a>
      </p>
    </div>
  );
}

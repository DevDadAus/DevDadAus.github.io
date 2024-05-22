export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center h-96">
        <div className="flex flex-col items-start w-2/5 h-2/3 space-y-2">
          <div className="font-mono text-green-300 text-sm">Hi, My name is</div>
          <div className="font-serif text-gray-200 text-5xl">Austin Keisling.</div>
          <div className="font-serif text-gray-400 text-5xl">I build things for the web.</div>
          <div className="font-sans text-gray-500 text-base w-2/3">
            I&apos;m a software engineer based out of Surf City, NC specializing in building exceptional web applications, DevOps, and everything in between.
          </div>
        </div>
      </div>
    </>
  );
}

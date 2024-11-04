import Logo from "@/components/logo";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <Logo width={180} height={90} />
        <div className="max-w-md text-center">
          <p>
          Sorry, but the UpShift Web Application is not available in your country. We apologize for the inconvenience and thank you for your understanding.
          </p>
        </div>
      </main>
      <footer className="row-start-4 flex gap-8 flex-wrap items-center justify-center">
        <a
          className="flex flex-col items-center gap-2 hover:underline hover:underline-offset-4 transition duration-150"
          href="https://upshift.finance"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Home
        </a>
        <a
          className="flex flex-col items-center gap-2 hover:underline hover:underline-offset-4 transition duration-150"
          href="https://docs.upshift.finance"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          <p>Docs</p>
        </a>
      </footer>
    </div>
  );
}

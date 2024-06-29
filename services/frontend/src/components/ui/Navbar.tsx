import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="bg-zinc-800 text-white py-6 pl-6 flex items-center gap-4">
      <Link href="/" className="flex items-center justify-center gap-2">
        <Image
          src="/logo.png"
          alt="logo"
          width={20}
          height={20}
          className="pb-1"
        />
        <p className="text-xl">Spotymp3.app</p>
      </Link>
      <ul className="ml-auto mr-10">
        <Link href="/">
          <li>Downloader</li>
        </Link>
      </ul>
    </header>
  );
};

export default Navbar;

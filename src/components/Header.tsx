import Link from "next/link";

export default function Header() {
    return (
      <header>
          <nav className="px-4 py-4 text-left text-sm font-semibold text-gray-600">
          <Link href="/">
              홈으로
          </Link>
          <Link href={"/dashboard"}>
              게시판
          </Link>
          </nav>
      </header>
    );
}
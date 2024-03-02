import Link from "next/link";
export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center bg-gradient-to-t  from-blue-hard to-blue-light text-white h-[600px]">
      <div className="flex items-center gap-10 drop-shadow-lg">
        <picture className="w-60">
          <a href="/">
            <img src="/img/LOGO FINAL.png" />
          </a>
        </picture>
        <div>
          <h1 className="text-3xl font-bold drop-shadow-lg">404</h1>
          <span className="text-xl font-semibold drop-shadow-lg">
            Essa página parece não existir!
          </span>
        </div>
      </div>
 
    </div>
  );
}

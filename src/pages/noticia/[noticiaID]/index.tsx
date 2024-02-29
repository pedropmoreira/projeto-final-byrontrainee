import CardNot from "@/components/CardNot";
import noticiasData from "@/datateams/noticiasData";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const { noticiaID } = router.query;

  console.log(noticiaID);

  if (!noticiaID) {
    return <div>Carregando...</div>;
  }

  return (
    <main className="flex justify-center bg-gradient-to-b from-blue-light to to-blue-hard p-10">
      <div className="flex flex-col-reverse lg:flex-row max-w-7xl gap-10">
        <aside id="ultNoticias" className="flex justify-center h-fit lg:w-1/3">
          <div className="flex flex-col gap-7 p-7 items-center bg-blue-hardest rounded-xl shadow-lg">
            <h2 className=" text-white font-extrabold text-2xl">
              NOTICIAS MAIS RECENTES
            </h2>
            <span className="bg-white p-[1px] rounded-full w-full"></span>
            <div>
              <CardNot></CardNot>
            </div>
          </div>
        </aside>

        <section className="flex flex-col items-center lg:w-2/3">
          <div className=" md:p-12 p-6 bg-blue-hard rounded-lg w-full z-10 shadow-lg">
            <img
              className="w-full shadow-lg"
              src={noticiasData.noticias[Number(noticiaID) - 1].notImageUrl}
              alt={`Imagem da noticia ${
                noticiasData.noticias[Number(noticiaID) - 1].notTitle
              }`}
            />
          </div>
          <div className="flex flex-col gap-8 bg-white p-12 rounded-lg shadow-lg">
            <h2 className=" text-4xl font-extrabold">
              {noticiasData.noticias[Number(noticiaID) - 1].notTitle}
            </h2>

            <p className=" text-2xl">
              {noticiasData.noticias[Number(noticiaID) - 1].notInfo}
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

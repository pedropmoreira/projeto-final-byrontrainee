import CardLg from "@/components/CardLg";
import CardSm from "@/components/CardSm";

export default function Page() {
  return (
    <>
      <div className=" flex flex-col gap-8 bg-gradient-to-b from-blue-light to to-blue-hard p-10">
        {/* ÚLTIMAS NOTÍCIAS */}
        <section className="flex items-center justify-center">
          <div className="flex flex-col justify-center bg-blue-hard rounded-xl shadow-md">
            <div className=" bg-blue-hardest px-12 py-8 rounded-t-xl">
              <h2 className=" font-bold text-5xl text-white">
                Últimas notícias
              </h2>
            </div>

            <div className="flex gap-4 p-12">
              <CardSm></CardSm>
              <CardSm></CardSm>
              <CardSm></CardSm>
            </div>
          </div>
        </section>
        {/* /ÚLTIMAS NOTÍCIAS */}

        {/* NOTÍCIAS */}
        <section className="flex items-center justify-center">
          <div className="flex flex-col items-center justify-center w-full gap-4">
            <CardLg></CardLg>
            <CardLg></CardLg>
          </div>
        </section>
        {/* /NOTÍCIAS */}
      </div>
    </>
  );
}

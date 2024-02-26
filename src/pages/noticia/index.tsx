import CardNot from "@/components/CardNot";

export default function Page() {
  return (
    <main className="flex justify-center bg-gradient-to-b from-blue-light to to-blue-hard p-10">
      <div className="flex max-w-[1920px] gap-20">
        <section className="flex justify-center items-center w-1/3">
          <div className="flex flex-col gap-7 p-7 items-center bg-blue-hardest rounded-xl shadow-lg">
            <h2 className=" text-white font-extrabold text-2xl">
              NOTICIAS MAIS RECENTES
            </h2>
            <span className="bg-white p-[1px] rounded-full w-full"></span>
            <div className="flex flex-col gap-7">
              <CardNot></CardNot>
              <CardNot></CardNot>
              <CardNot></CardNot>
              <CardNot></CardNot>
              <CardNot></CardNot>
              <CardNot></CardNot>
              <CardNot></CardNot>
            </div>
          </div>
        </section>

        <section className="flex flex-col items-center w-2/3">
          <div className=" p-12 bg-blue-hard rounded-lg w-full z-10 shadow-lg">
            <img className="w-full" src="/img/noticia.png" alt="" />
          </div>
          <div className="flex flex-col gap-8 bg-white p-12 rounded-lg shadow-lg">
            <h2 className=" text-4xl font-extrabold">
              LeBron James revela em qual time da NBA deseja encerrar a
              carreira: 'Está chegando'
            </h2>

            <p className=" text-2xl">
              LeBron James admitiu que vê uma aposentadoria do basquete cada vez
              mais próxima. A lenda da NBA abordou o assunto durante coletiva de
              imprensa antes de sua 20ª participação no NBA All-Star Game,
              realizado no último domingo (18). Embora James, de 39 anos, afirme
              não ter um plano definido sobre como será a fase final de sua
              carreira, o astro disse que tem uma preferência: vestir a camisa
              do Los Angeles Lakers em sua despedida. “Eu sou um laker e estou
              feliz e muito feliz sendo um laker nos últimos seis anos e espero
              que continue assim”, disse James. "Mas não tenho a resposta sobre
              quanto tempo vai demorar ou qual uniforme usarei (na
              aposentadoria). Espero que seja a dos Lakers. É uma grande
              organização, com tantos grandes nomes. Mas veremos”. “Não sei como
              isso vai acabar, mas está chegando”, disse James. "Está chegando,
              com certeza”. James chegou ao All-Star no domingo, e não no sábado
              (17), devido a um tratamento no tornozelo esquerdo.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

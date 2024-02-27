"use client"
import LogoComponent from "@/components/LogoComponent";
import { useEffect , useState} from "react";
import axios from "axios";
import teamsdata from "@/datateams/teamsdata";


export default function Home() {

  return (

    
      

    <main className="bg-gradient-to-t  from-blue-hard to-blue-light flex flex-col items-center">
      {/* SECTION DO CARROSSEL*/}
      <section>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam deserunt
        iste pariatur voluptate ab saepe ipsa debitis, cumque officia
        reprehenderit soluta perferendis eos sapiente modi fugit sed doloremque
        quasi veritatis. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Facilis odit sint ab aperiam maxime non animi deleniti impedit
        praesentium vel consequatur corrupti iure, doloremque exercitationem
        laborum earum explicabo quae magni natus. Tenetur laborum tempore minus.
        Impedit similique fuga minus in quia aliquid ipsum natus fugiat. Eaque
        atque fugiat ab doloribus, reiciendis voluptatum eum at nam ipsum harum
        impedit? Eveniet recusandae voluptatem obcaecati soluta est quibusdam
        distinctio perferendis ducimus alias quasi consequuntur natus molestias
        dignissimos dicta repellendus, quaerat maiores! Dignissimos facere
        quidem nesciunt harum incidunt, autem veniam accusamus magni! Molestias
        facere qui sed odio vero aperiam, quia dolorem illum ratione possimus
        repudiandae corporis perspiciatis, animi accusantium, recusandae aliquid
        asperiores doloribus ut consequuntur saepe perferendis maiores earum.
        Officia sint quaerat incidunt magni distinctio eaque natus, accusamus
        quidem. Omnis quis hic vero debitis tempore in. Tempore nulla debitis
        odio quos, aut error, distinctio magnam cupiditate omnis, adipisci
        eaque. Vel, harum? Beatae illo qui cumque enim exercitationem. Aliquid
        neque maxime iure, repudiandae minus, provident eligendi, quasi esse
        nulla ut corrupti est modi. Officiis quae eveniet ullam dolore error
        saepe illum. Quaerat consectetur nobis repudiandae recusandae asperiores
        dolores voluptas veritatis, nam ratione doloribus quas rerum, autem
        laboriosam dolorem dolor molestiae, porro cupiditate itaque? A, neque.
      </section>

      {/* section times*/}

      <section>
        <div className="bg-blue-hard text-white rounded-lg max-w-screen-2xl flex  shadow-lg border-0">
          {/* div times*/}

          <div className="flex h-full  ">
          <div className="bg-black-hard flex rounded-lg text-base font-semibold p-4  ">
            {/* conferencia leste*/}

            <div className="flex flex-col items-center max-w-48 m-4 ">
              <span>Conferência Leste</span>
              <div className="flex flex-wrap justify-center">
              <LogoComponent conferencia="Conferência Leste" />
              </div>
            </div>

            <picture>
              <img src="/img/line.png" className="h-80"></img>
            </picture>

            {/* conferencia oeste*/}
            <div className="flex flex-col items-center max-w-44 m-4">
              <span>Conferência Oeste</span>
              <div className="flex flex-wrap justify-center">
              <LogoComponent conferencia="Conferência Oeste" />
              </div>
            </div>
          </div>

          {/* div infos*/}

          <div className="flex m-4">
            {/* div logo*/}
            <div className="flex flex-col items-center justify-around h-full w-72 ">
              <picture>
                <img
                  src="/img/team logos/leste/logo-celtics.png"
                  className="w-56"
                ></img>
              </picture>
              <picture>
                <img src="/img/line-2.png" className="w-60"></img>
              </picture>

              <div className="flex flex-col items-center">
                <h2 className="text-3xl font-bold">Chicago Bulls</h2>
                <span className="text-xl">Conferência Leste</span>
              </div>
            </div>
            {/* div info*/}
            <div className="flex flex-col w-80 justify-around ">
              <p>
                O Chicago Bulls é um time de basquete profissional americano
                sediado em Chicago, Illinois. Os Bulls competem na National
                Basketball Association (NBA) como um membro da Divisão Central
                da Conferência Leste da liga.[3] A equipe foi fundada em 16 de
                janeiro de 1966 e jogou seu primeiro jogo durante a temporada de
                1966/67.[4] 
              </p>
              <p>Títulos de Conferência:	6 (1991, 1992, 1993, 1996, 1997 e 1998)</p>
              <p>Títulos de Conferência:	6 (1991, 1992, 1993, 1996, 1997 e 1998)</p>
              
            </div>
          </div>
          </div>
        </div>
      </section>
    </main>
  );
}

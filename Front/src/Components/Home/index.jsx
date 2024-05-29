import React, { useEffect } from "react";
import "./index.css";
import Navbar from "../Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <div className="page-container-home">
        {/* Descrizione */}
        <div className="container-description-home">
          <div className="description-title-home"></div>
          <span className="description-subtitle-home">
            La libreria dei tuoi sogni
          </span>
          <span className="description-text-home">
            Benvenuto in BookWorld, la libreria dei sogni . Qui troverete un
            rifugio per mente e cuore, dove avventure, conoscenza e emozioni
            prendono vita. Esplorate il vasto assortimento di libri che vi
            condurranno in mondi fantastici, vi arricchiranno con saggezza e vi
            avvolgeranno con storie avvincenti. Concedetevi il lusso di
            esplorare, scoprire e sognare, perché ogni pagina è un viaggio verso
            nuovi orizzonti.
          </span>
        </div>
        {/* Immagine */}
        <div className="image-container-home"></div>
        <table className="table-home">
          <tr>
            <td className="width-cell"></td>
            <td className="width-cell"></td>
            <td className="width-cell"></td>
          </tr>
          <tr className="row-home">
            <td className="write" colSpan={2}>
              <div className="container-write">
                {" "}
                Un ambiente accogliente e colorato dedicato ai più piccoli.
                Immagina scaffali pieni di libri illustrati, coniglietti e
                leprotti saltellanti tra le pagine, e sedie a misura di bambino
                circondate da morbide coperte colorate. Un luogo magico dove i
                giovani lettori possono esplorare mondi fantastici e
                avventurosi, alimentando la loro immaginazione e il loro amore
                per la lettura.
              </div>
            </td>
            <td className="image">
              <div className="container-image">
                {/* <img
                  className="image-home"
                  src="./src/imgs/biblioteca1.jpg"
                  alt="Image not found"
                  width={400}
                  height={300}
                /> */}
                <div className="image-home-prove" />
              </div>
            </td>
          </tr>
          <tr className="row-home">
            <td className="image">
              <div className="container-image">
                <div className="container-image">
                  <img
                    className="image-home"
                    src="./src/imgs/biblioteca2.jpg"
                    alt="Image not found"
                    width={400}
                    height={300}
                  />
                </div>
              </div>
            </td>
            <td className="write" colSpan={2}>
              <div className="container-write">
                Un ambiente dinamico e stimolante progettato appositamente per i
                giovani lettori. Qui troverai scaffali pieni di libri che
                parlano direttamente ai cuori e alle menti degli adolescenti e
                dei giovani adulti. Immagina pareti adornate con poster di eroi
                letterari contemporanei, sedie comode per rilassarsi e leggere,
                e una vibrazione energetica che invita alla scoperta e alla
                discussione. È il luogo perfetto dove i giovani possono trovare
                ispirazione, esplorare nuove idee e connettersi con storie che
                rispecchiano le loro esperienze e passioni.
              </div>
            </td>
          </tr>
          <tr className="row-home">
            <td className="write" colSpan={2}>
              <div className="container-write">
                {" "}
                Un'atmosfera tranquilla e raffinata accoglie i lettori adulti in
                questo spazio dedicato. Immagina scaffali elegantemente
                disposti, illuminati da una luce soffusa, che ospitano una vasta
                gamma di libri per adulti, dalle opere letterarie classiche ai
                bestseller contemporanei. Sedie comode invitano alla riflessione
                e alla contemplazione, mentre tavoli ben posizionati offrono uno
                spazio ideale per immergersi nelle pagine di un buon libro o per
                partecipare a discussioni letterarie animate. È un ambiente
                pensato per gli amanti della lettura adulti, dove possono
                trovare tranquillità e ispirazione mentre esplorano mondi
                letterari intriganti e stimolanti.
              </div>
            </td>
            <td className="image">
              <div className="container-image">
                <div className="container-image">
                  <img
                    className="image-home"
                    src="./src/imgs/biblioteca3.jpg"
                    alt="Image not found"
                    width={400}
                    height={300}
                  />
                </div>
              </div>
            </td>
          </tr>
          <tr className="row-home">
            <td className="image">
              <div className="container-image">
                <div className="container-image">
                  <img
                    className="image-home"
                    src="./src/imgs/biblioteca4.jpg"
                    alt="Image not found"
                    width={400}
                    height={300}
                  />
                </div>
              </div>
            </td>
            <td className="write" colSpan={2}>
              <div className="container-write">
                Entra nell'oscurità di questo spazio dedicato all'horror.
                Scaffali inquietanti sono carichi di libri che sfidano i confini
                della paura e dell'ignoto. Immagina una luce fioca che danza tra
                le copertine, mentre occhi misteriosi ti fissano dalle ombre.
                Sedie avvolgenti ti invitano a immergerti in storie di terrore e
                suspense, mentre il brivido lungo la schiena diventa un compagno
                costante. È un luogo dove gli amanti dell'horror possono trovare
                la loro dose di adrenaline e suspense, pronti ad essere
                trasportati in mondi oscuri e sinistri attraverso le pagine dei
                libri.
              </div>
            </td>
          </tr>
          <tr className="row-home">
            <td className="write" colSpan={2}>
              <div className="container-write">
                Entra in un'atmosfera avvolta nel mistero in questo angolo della
                libreria. Scaffali ordinati ospitano una vasta selezione di
                libri che promettono di svelare enigmi e segreti intriganti.
                Immagina una luce fioca che illumina copertine misteriose,
                mentre l'aria è carica di suspense e anticipazione. Sedie
                accoglienti invitano i visitatori a immergersi in trame
                intricate e a seguire indizi nascosti nelle pagine dei romanzi
                polizieschi e dei thriller psicologici. È un luogo dove i
                lettori possono mettere alla prova le proprie abilità deduttive
                e lasciarsi trasportare in avventure avvincenti, avvolti dal
                fascino del mistero e dell'ignoto.
              </div>
            </td>
            <td className="image">
              <div className="container-image">
                <div className="container-image">
                  <img
                    className="image-home"
                    src="./src/imgs/biblioteca5.jpg"
                    alt="Image not found"
                    width={400}
                    height={300}
                  />
                </div>
              </div>
            </td>
          </tr>
          <tr className="row-home">
            <td className="image">
              <div className="container-image">
                <div className="container-image">
                  <img
                    className="image-home"
                    src="./src/imgs/biblioteca6.jpg"
                    alt="Image not found"
                    width={400}
                    height={300}
                  />
                </div>
              </div>
            </td>
            <td className="write" colSpan={2}>
              <div className="container-write">
                Entra in un mondo di romanticismo e passione in questo angolo
                accogliente della libreria. Scaffali adornati di rose e cuori
                ospitano una vasta collezione di libri che celebrano l'amore in
                tutte le sue sfumature. Immagina una luce soffusa che accarezza
                copertine che promettono storie di incontri romantici, passioni
                travolgenti e finali felici. Sedie morbide invitano i visitatori
                a immergersi in relazioni appassionate e a sognare ad occhi
                aperti mentre seguono le vicende dei protagonisti innamorati. È
                un luogo dove i cuori sognanti possono trovare rifugio e
                ispirazione tra le pagine dei romanzi rosa, sperando di vivere,
                anche solo per un momento, la dolcezza e l'emozione di un grande
                amore.
              </div>
            </td>
          </tr>
        </table>

        <div className="final-page-home">
          <span className="title-final-page-home">Contatti</span>
          <div className="container-final-page-home">
            <div className="element-final-page-home">
              <span>Thomas</span>
              {/* <span className="text-final-page-home">
                Per qualsiasi domanda o richiesta non esitare a contattarmi!!
              </span> */}
              <div className="lista-img">
                <a
                  target="_blank"
                  href="https://www.instagram.com/thomas_jojordano?igsh=ZGUzMzM3NWJiOQ=="
                >
                  <div className="instagram-logo"></div>
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/thomas-giordano-12a400283/"
                >
                  <div className="linkedin-logo"></div>
                </a>
                <a target="_blank" href="https://github.com/Guilwar">
                  <div className="github-logo"></div>
                </a>
                <a target="_blank" href="https://t.me/Guilmon05">
                  <div className="telegram-logo"></div>
                </a>
              </div>
            </div>
            {/* <div>Francesco</div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

"use client";
import { HandThumbDownIcon, HandThumbUpIcon, HeartIcon, StarIcon } from "@heroicons/react/24/solid";
import axios from 'axios';
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from 'react';
import MyTable from './MyTable';

export default function RootLayout({children}) {
  let URL = "http://localhost:8086"
  let iconsNumber = {
    starts: 1,
    hearts: 2,
    handUp: 1,
    handDown: 1
  }

  let [disponible, setDisponible] = useState(true)
  useEffect(() => {
    const driverId = "IDENTIFIANT PASSE EN GET"
    axios.get(URL+"/isDisponible?driverId="+driverId)
    .then(response => {
      dispo = response.disponible === "true"
      setDisponible(dispo)
    })
    .catch(error => console.error(error))
  }, []);

  return (
    <div className="py-[30px] lg:py-[60px] bg-[var(--bg-2)] px-3">
      <div className="container max-w-[1600px]">
        <div className="grid grid-cols-12 gap-4 lg:gap-6">
          <div className="col-span-12 xl:col-span-4">
            <div className="bg-white rounded-2xl p-3 sm:p-4 lg:py-8 lg:px-6 mb-6">
              <div className="w-32 h-32 border ovenflow-hidden border-[var(--primary)] rounded-full bg-white p-4 grid place-content-center relative mx-auto mb-10">
                <Image
                  width={130}
                  height={130}
                  src="/img/chauffeur.png"
                  alt="image"
                  className="rounded-full w-full h-full"
                />
              </div>
              <h4 className="text-center text-2xl font-semibold mb-4">
                M. Christian
              </h4>
              <ul className="flex items-center justify-center flex-wrap mb-7">
                <li>
                  <p className="mb-0">
                    Contact: <span className="text-primary">6******** | Melen Yaounde</span>
                  </p>
                </li>
              </ul>
              <ul className="flex items-center justify-center flex-wrap mb-7">
                <li>
                  <p className="mb-0">
                    Mail: <span className="text-primary">***@gmail.com</span>
                  </p>
                </li>
                <div className='flex min-w-full justify-evenly my-3'>
                  <div className='flex items-center'>
                    <StarIcon className="w-5 h-5 text-[var(--tertiary)]" /> <span className='ml-2'>{iconsNumber.starts}</span>
                  </div>
                  <div className='flex items-center'>
                    <HeartIcon className="w-5 h-5 text-red-500" /> <span className='ml-2'>{iconsNumber.hearts}</span>
                  </div>
                  <div className='flex items-center'>
                    <HandThumbUpIcon className="w-5 h-5 text-blue-500" /> <span className='ml-2'>{iconsNumber.handUp}</span>
                  </div>
                  <div className='flex items-center'>
                    <HandThumbDownIcon className="w-5 h-5 text-gray-900" /> <span className='ml-2'>{iconsNumber.handDown}</span>
                  </div>
                </div>
                <li className="flex gap-4">
                  {disponible?
                    <div className='flex gap-4'>
                      <Link href="#"
                        className="inline-flex items-center gap-2 p-2 rounded-full bg-[#2D3A96] text-white :bg-primary-400 hover:text-white font-medium mt-2">
                        <span className="inline-block"> Contacter </span>
                      </Link>
                      <div href="#"
                        className="inline-flex items-center gap-2 p-2 rounded-full bg-[#2AC144] text-white :bg-primary-400 hover:text-white font-medium mt-2">
                        <span className="inline-block"> Disponible </span>
                      </div>
                    </div>
                    :
                    <div href="#"
                      className="inline-flex items-center gap-2 p-2 rounded-full bg-[#F84800] text-white :bg-primary-400 hover:text-white font-medium mt-2">
                      <span className="inline-block"> inDisponible </span>
                    </div>
                  }
                  
                </li>
              </ul>
              
              <div className="border border-dashed my-7"></div>
              <ul className="flex flex-col gap-4 mb-10 max-text-30 mx-auto">
              <li>
                  <div className="items-center gap-2 overflow-x-auto">
                    <MyTable className="min-w-[500px]"/>
                  </div>
                </li>
                <div className="border border-dashed my-2"></div>
                <li>
                  <div className="items-center gap-2">
                    {/* <CalendarDaysIcon className="w-5 h-5 text-primary" /> */}
                    <div className="block text-1xl font-semibold clr-neutral-600 mb-4">
                      Formation
                    </div>
                    <div className="mb-0"> 1990 Permis B à AUTO-ECOLE KASAP</div>
                  </div>
                </li>
                <div className="border border-dashed my-2"></div>
                <li>
                  <div className="items-center gap-2">
                    {/* <ChatBubbleLeftEllipsisIcon className="w-5 h-5 text-[var(--secondary)]" />
                    <p className="mb-0"> Response rate - 100% </p> */}
                    <div className="block text-1xl font-semibold clr-neutral-600 mb-4">
                      Expérience professionelle
                    </div>
                    <div className="mb-0">* De mars 2018 à juin 2020: conducteur indépendant</div>
                  </div>
                </li>
              </ul>

              <div className="border border-dashed my-2"></div>
              <ul className="flex flex-col gap-4">
                <li className="flex items-center justify-between flex-wrap">
                  <p className="mb-0">Convivialité</p>
                  <p className="mb-0 font-medium">Excellent</p>
                </li>
                <li className="flex items-center justify-between flex-wrap">
                  <p className="mb-0">Politesse</p>
                  <p className="mb-0 font-medium">Moyen</p>
                </li>
                <li className="flex items-center justify-between flex-wrap">
                  <p className="mb-0">Patience</p>
                  <p className="mb-0 font-medium">Excellent</p>
                </li>
              </ul>
              <div className="border border-dashed my-6"></div>
              <span className="block text-2xl font-semibold clr-neutral-600 mb-4">
                Details
              </span>
              <div className="mb-0">
                <p>Je suis Christan, un chauffeur professionnel expérimenté qui s'engage à offrir un service de transport de qualité supérieure. Avec de nombreuses années d'expérience dans ce domaine, j'ai acquis des compétences de conduite avancées et une connaissance approfondie des routes de la région.</p><br />
                <p>Je suis reconnu pour mon excellent sens de l'orientation et ma capacité à naviguer avec aisance dans la circulation, en optimisant les itinéraires pour offrir à mes passagers des trajets rapides et sans encombre. Mes passagers apprécient ma conduite sûre et prudente, qui leur permet de voyager en toute tranquillité d'esprit.</p><br />
                <p>Au-delà de mes compétences de conduite, je me démarque par mon service attentionné et ma personnalité chaleureuse. J'accueille chaleureusement mes clients, je veille à leurs besoins et je m'engage à faire de chaque trajet une expérience agréable. Mes passagers me décrivent souvent comme un conducteur fiable, courtois et soucieux du bien-être de tous.</p><br />
                <p>Que ce soit pour un déplacement professionnel, un rendez-vous important ou un transport de loisir, je suis le choix idéal pour offrir un service de transport de qualité, en toute sécurité et dans une ambiance agréable.</p>
              </div>
            
            </div>
          </div>
          <div className="col-span-12 xl:col-span-8">
            <div className="grid grid-cols-12 gap-4 align-items-start">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

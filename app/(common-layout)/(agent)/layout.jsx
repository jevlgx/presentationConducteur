"use client";
import axios from 'axios';
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from 'react';
import { HeartIcon, StarIcon, HandThumbUpIcon, HandThumbDownIcon } from "@heroicons/react/24/solid";

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
      <div className="container">
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
              <p className="mb-0">
                Contact: <span className="text-primary">6******** | Melen Yaounde</span>
              </p>
              <ul className="flex items-center justify-center flex-wrap mb-7">
                <li>
                  <p className="mb-0">
                    Mail: <span className="text-primary">***@gmail.com</span>
                  </p>
                </li>
                <div div className='flex min-w-full justify-evenly my-3'>
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
                        className="inline-flex items-center gap-2 p-2 rounded-full bg-primary text-white :bg-primary-400 hover:text-white font-medium mt-2">
                        <span className="inline-block"> Contacter </span>
                      </Link>
                      <div href="#"
                        className="inline-flex items-center gap-2 p-2 rounded-full bg-[green] text-white :bg-primary-400 hover:text-white font-medium mt-2">
                        <span className="inline-block"> Disponible </span>
                      </div>
                    </div>
                    :
                    <div href="#"
                      className="inline-flex items-center gap-2 p-2 rounded-full bg-[red] text-white :bg-primary-400 hover:text-white font-medium mt-2">
                      <span className="inline-block"> inDisponible </span>
                    </div>
                  }
                  
                </li>
              </ul>
              
              <div className="border border-dashed my-7"></div>
              <ul className="flex flex-col gap-4 mb-10 max-text-30 mx-auto">
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
              <p className="mb-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non vitae perspiciatis necessitatibus rem, fugiat dolores obcaecati ipsam nostrum sint ea veniam commodi et, excepturi sunt quidem, possimus sequi eum dicta.
              </p>
            
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

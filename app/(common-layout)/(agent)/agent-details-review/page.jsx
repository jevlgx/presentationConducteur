"use client"
import { HandThumbDownIcon, HandThumbUpIcon, HeartIcon, StarIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { comments } from '../layout';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function page(){
  // TODO: ACTUALISER LES ADRESSES DES SERVEURS AINSI QUE LES PATHS LORS DE L'INTEGRATION
  let REVIEW_SERVICE_URL = "http://localhost:8080"
  let DRIVER_COMMENTS_PATH = "/get-driver-comments"

  const [comments, setcomments] = useState([
    {
      name: "William",
      job: "DevOps",
      date: "23.10.2024",
      hour: "18h15",
      icon: "star",
      comment: "Excellent chauffeur ! Christian était très professionnel et ponctuel. J'ai passé un trajet très agréable avec lui. Je le recommande vivement !"
    },
    {
      name: "Lushai",
      job: "Business Analyst",
      date: "23.10.2024",
      hour: "18h15",
      icon: "heart",
      comment: "Christian était un chauffeur sympathique et courtois. Il a pris le temps de discuter pendant le trajet et m'a fait me sentir à l'aise. Je le choisirai à nouveau pour mes prochains déplacements."
    },
    {
      name: "Josée",
      job: "Entrepreneure",
      date: "23.10.2024",
      hour: "18h15",
      icon: "hand_up",
      comment: "Je recommande fortement Christian en tant que chauffeur. Il était très professionnel et attentionné. Le trajet s'est déroulé sans problème et j'ai beaucoup apprécié sa compagnie."
    },
    {
      name: "Cedrick",
      job: "Ingénieur logiciel",
      date: "23.10.2024",
      hour: "18h15",
      icon: "hand_down",
      comment: "Il était en retard "
    },
    {
      name: "Foueguim",
      job: "Webmaster",
      date: "23.10.2024",
      hour: "18h15",
      icon: "heart",
      comment: "Christian était un excellent chauffeur. Il était amical, serviable et a rendu le trajet très agréable. Je le recommande à tous ceux qui recherchent un chauffeur fiable."
    }
  ]);
  useEffect(() => {
    const driverId = "IDENTIFIANT PASSE EN GET"
    axios.get(REVIEW_SERVICE_URL+DRIVER_COMMENTS_PATH+"?driverId="+driverId)
    .then(response => {
      setcomments(response.data)
    })
    .catch(error => console.error(error))

  }, []);
  
  return (
    <div className="col-span-12">
      <div className="p-3 bg-white rounded-2xl mb-8">
        <div className="bg-white rounded-2xl">
          {
            comments.map((comment, index)=>{
              return(
                <div key={index} className="bg-[var(--bg-1)] rounded-2xl p-3 sm:p-4 lg:p-6 mb-2">
                  <div className="flex items-center flex-wrap justify-between gap-4 ">
                    <div className="flex gap-5 items-center">
                      <div className="flex-grow">
                        <h5 className="mb-1 font-semibold"> {comment.name} | {comment.job}</h5>
                      </div>
                      <div>
                        {
                          function(){
                            if(comment.icon == "star") return(<StarIcon className="w-5 h-5 text-[var(--tertiary)]" />)
                            if(comment.icon == "heart") return(<HeartIcon className="w-5 h-5 text-red-500" />)
                            if(comment.icon == "hand_up") return(<HandThumbUpIcon className="w-5 h-5 text-blue-500" />)
                            if(comment.icon == "hand_down") return(<HandThumbDownIcon className="w-5 h-5 text-gray-900" />)
                          }()
                        }
                      </div>
                    </div>
                    
                    <div className="text-sm-end">
                      <p className="mb-1"> {comment.date} à {comment.hour}</p>
                    </div>
                  </div>
                  <div className="border border-dashed my-2"></div>
                  <p className="mb-0 clr-neutral-500">
                    {comment.comment}
                  </p>
                </div>
              )
            })
          }
          
          
          <Link
            href="#"
            className="featured-tab link font-semibold clr-primary-400 inline-block py-3 px-6 bg-[var(--primary-light)] hover:bg-[#2D3A96] hover:text-white rounded-full active">
            Ajouter un commentaire
          </Link>
        </div>
      </div>

    </div>
  );
};

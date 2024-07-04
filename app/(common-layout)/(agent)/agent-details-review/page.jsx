import { HandThumbDownIcon, HandThumbUpIcon, HeartIcon, StarIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const page = (comments) => {
  
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

export default page;

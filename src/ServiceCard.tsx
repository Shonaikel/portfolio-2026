import { useState } from "react";
import { motion } from "framer-motion";
import { Service } from "../data/servicesData";

interface Props {
    service: Service;
}

const ServiceCard = ({ service }: Props) => {
    const [Flipped, setFlipped] = useState(false);

    return (
        <motion.article
        className="[perspective:1000px] cursor-pointer"
        whileHover={{ scale: 1.05 }}
        onClick={() => setFlipped(!flipped)}
        >
        <div
        className={`relative h-64 w-full transition-transform duration-500 [transform-style:preserve-3d] ${
        flipped ? "rotate-y-180" : ""
        }`}
        >
        {/* FRONT */}
        <div className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl bg-white p-6 text-center shadow-lg [backface-visibility:hidden]">
        <img src={service.image} alt={service.title} className="mb-4 w-14" />
        <h3 className="text-lg font-semibold">{service.title}</h3>
        <p className="mt-2 text-sm text-gray-500">{service.description}</p>
        </div>
        
        
        {/* BACK */}
        <div className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl bg-indigo-600 p-6 text-center text-white shadow-lg [transform:rotateY(180deg)] [backface-visibility:hidden]">
        <h3 className="text-lg font-semibold">{service.backTitle}</h3>
        <p className="mt-2 text-sm opacity-90">{service.moreInfo}</p>
        </div>
        </div>
        </motion.article>
        );
        };
        
        
        export default ServiceCard;
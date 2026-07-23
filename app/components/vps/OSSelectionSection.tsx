"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Monitor, Download } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { useLanguage } from '../../contexts/LanguageContext';

const HEADER_CONFIG = {
  badge: {
    icon: Monitor,
    text: "Operating Systems"
  },
  title: "Choose your OS",
  description: "Select from a wide range of popular operating systems. All images are pre-configured and ready to deploy instantly on your VPS."
};
const OPERATING_SYSTEMS = [
  {
    id: "ubuntu",
    name: "Ubuntu",
    logo: "/os/ubuntu.png",
  },
  {
    id: "windows",
    name: "Windows",
    logo: "/os/windows.png",
  },
  {
    id: "fedora",
    name: "Fedora",
    logo: "/os/fedora.png",
  },
  {
    id: "debian",
    name: "Debian",
    logo: "/os/debian.png",
  },
  {
    id: "kali",
    name: "Kali Linux",
    logo: "/os/kali.png",
  },
  {
    id: "custom",
    name: "Custom ISO",
    logo: "/os/download.png",
  }
];
export default function OSSelectionSection() {
  const { t } = useLanguage();
  const [selectedOS, setSelectedOS] = useState("ubuntu");

  return (
    <div className="bg-gray-50 dark:bg-[#0a0b0f] relative py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col justify-end items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 card-primary px-4 py-2 rounded-tl-2xl rounded-br-2xl mb-4">
            <span className="icon-primary text-sm">{t('osSelection.badge')}</span>
          </div>

          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 orbitron-font">
            {t('osSelection.title').split(' ').slice(0, -1).join(' ')} <span className="icon-primary">
              {t('osSelection.title').split(' ').slice(-1)[0]}
            </span>
          </h2>

          <p className="text-sm text-gray-600 dark:text-gray-300 max-w-2xl">
            {t('osSelection.description')}
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-wrap justify-center gap-8">
            {OPERATING_SYSTEMS.map((os, index) => (
              <motion.div
                key={os.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                onClick={() => setSelectedOS(os.id)}
                  className={`group cursor-pointer p-6 rounded-md border transition-all duration-300 ${
                    selectedOS === os.id
                    ? "border-transparent hover:border-secondary hover:border-blue-300 dark:hover:border-blue-400 hover:hover-gradient"
                    : "border-transparent hover:border-secondary hover:border-blue-300 dark:hover:border-blue-400 hover:hover-gradient"
                  }`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="relative w-20 h-20 flex items-center justify-center">
                    {os.id === "custom" ? (
                      <Download className="w-12 h-12 icon-primary" />
                    ) : (
                      <Image
                        src={os.logo}
                        alt={`${os.name} logo`}
                        width={80}
                        height={80}
                        className="object-contain"
                      />
                    )}
                  </div>
                  <h3 className="font-medium text-gray-900 dark:text-white text-sm mt-4">
                    {os.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

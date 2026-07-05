"use client"

import { motion } from "framer-motion"
import { MessageCircle, Users, ArrowRight } from "lucide-react"
import { FaDiscord } from "react-icons/fa6";
import { AiOutlineDiscord } from "react-icons/ai";
import { useLanguage } from '../contexts/LanguageContext';

export default function DiscordBanner() {
    const { t } = useLanguage();

    return (
        <div className=" py-18 px-4 sm:px-6 lg:px-8 relative">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 max-w-7xl mx-auto"
            >
                <div className="relative backdrop-blur-sm bg-green-500 dark:bg-green-700/80 overflow-hidden rounded-md border border-gray-600/20 dark:border-gray-400/10 p-8 md:p-12">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-4 left-4">
                            <FaDiscord className="w-16 h-16 text-gray-900 dark:text-white" />
                        </div>
                        <div className="absolute top-8 right-8">
                            <FaDiscord className="w-12 h-12 text-gray-900 dark:text-white" />
                        </div>
                        <div className="absolute bottom-4 left-1/4">
                            <FaDiscord className="w-8 h-8 text-gray-900 dark:text-white" />
                        </div>
                        <div className="absolute bottom-8 right-1/4">
                            <FaDiscord className="w-10 h-10 text-gray-900 dark:text-white" />
                        </div>
                    </div>

                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="text-center md:text-left">
                            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                                <a
                                    href="https://discord.gg/syHFbR5yBQ"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center md:justify-start gap-3 "
                                >
                                    <h2 className="text-3xl md:text-4xl font-bold text-white orbitron-font">
                                        {t('discordBanner.title').split(' ').slice(0, -1).join(' ')} <span className="text-blue-200 dark:text-blue-400">{t('discordBanner.title').split(' ').slice(-1)[0]}</span>
                                    </h2>
                                </a>

                            </div>
                            <p className="text-xl text-white mb-2">
                                {t('discordBanner.subtitle')}
                            </p>
                            <p className=" text-white">
                                {t('discordBanner.description')}
                            </p>

                        </div>

                        <div className="flex-shrink-0">
                            <a
                                href="https://discord.gg/syHFbR5yBQ"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block transition-all duration-300 hover:scale-105"
                            >
                                <img
                                    src="/joinus.png"
                                    alt="Join Discord"
                                    className="w-auto h-12 md:h-16 "
                                />
                            </a>
                        </div>

                    </div>
                </div>
            </motion.div>
        </div>
    )
}

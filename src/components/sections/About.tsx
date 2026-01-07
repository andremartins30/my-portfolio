"use client";

import { motion } from "framer-motion";
import {
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiNodedotjs,
    SiTailwindcss,
    SiSupabase,
    SiPostgresql,
    SiGit,
    SiDocker,
    SiN8N,
    SiPython,
    SiJavascript
} from "react-icons/si";

const skills = [
    { name: "React", icon: SiReact, color: "text-cyan-500" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-gray-900 dark:text-white" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500" },
    { name: "Node.js", icon: SiNodedotjs, color: "text-green-600" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
    { name: "Supabase", icon: SiSupabase, color: "text-green-500" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-500" },
    { name: "Git", icon: SiGit, color: "text-orange-600" },
    { name: "Docker", icon: SiDocker, color: "text-blue-600" },
    { name: "Python", icon: SiPython, color: "text-blue-500" },
    { name: "n8n", icon: SiN8N, color: "text-purple-600" },
];

export default function About() {
    return (
        <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900/50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Sobre Mim
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
                </motion.div>

                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                                Desenvolvedor Full Stack Apaixonado por Tecnologia
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                                Desenvolvedor Full Stack com mais de 5 anos de experiência em sistemas ERP, CRM, WMS e automação de processos, atuando em projetos de média e grande escala. Forte atuação em customizações e integrações no ERP TOTVS Protheus, utilizando ADVPL, TLPP, APIs REST e PO-UI.
                            </p>
                            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                                Experiência sólida em desenvolvimento web e mobile com Angular, React, React Native, Node.js e PHP, além de modelagem de bancos de dados relacionais, construção de APIs escaláveis e automações com Python, Selenium e n8n. Atuação recente com web scraping, bancos vetoriais e RAG com IA generativa.
                            </p>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                Perfil orientado a performance, escalabilidade e entrega de valor ao negócio, com facilidade para atuar entre backend, frontend e integrações. Sempre em busca de aprendizado contínuo e novas tecnologias para aprimorar soluções digitais.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl"
                        >
                            <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-gray-200">
                                Destaques
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                                            Experiência Profissional
                                        </h4>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                                            +5 anos desenvolvendo aplicações web e mobile
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                                            Projetos Completos
                                        </h4>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                                            15+ projetos entregues com sucesso
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-2 h-2 bg-pink-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                                            Aprendizado Contínuo
                                        </h4>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                                            Sempre explorando novas tecnologias
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                                            Código Limpo
                                        </h4>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                                            Foco em qualidade e manutenibilidade
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Skills Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">
                            Tecnologias & Ferramentas
                        </h3>
                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={skill.name}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.1 }}
                                    className="flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all cursor-pointer"
                                >
                                    <skill.icon className={`w-12 h-12 ${skill.color} mb-2`} />
                                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300 text-center">
                                        {skill.name}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

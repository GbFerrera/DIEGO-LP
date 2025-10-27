"use client";

import Image from "next/image";
import { ArrowRight, Target, TrendingUp, Users, Award, Briefcase, Heart, ChevronLeft, ChevronRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useCallback, useState } from "react";
import useEmblaCarousel from 'embla-carousel-react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'start',
    slidesToScroll: 1
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 via-zinc-100 to-zinc-200">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src="/Logo D.C Gestão.png"
              alt="Diego Coelho Gestão"
              width={120}
              height={40}
              className="h-8 sm:h-10 w-auto"
              unoptimized
            />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-zinc-300 hover:text-white transition-colors text-sm font-medium"
            >
              Serviços
            </button>
            <button 
              onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-zinc-300 hover:text-white transition-colors text-sm font-medium"
            >
              Depoimentos
            </button>
            <Button 
              size="sm" 
              className="bg-white text-black hover:bg-zinc-200 rounded-full"
              onClick={() => window.open('https://wa.me//5562996385641', '_blank')}
            >
              Contato
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white hover:text-amber-400 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-black/95 backdrop-blur-md border-t border-zinc-800"
          >
            <div className="px-4 py-4 space-y-4">
              <button 
                onClick={() => {
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left text-zinc-300 hover:text-white transition-colors text-base font-medium py-2"
              >
                Serviços
              </button>
              <button 
                onClick={() => {
                  document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' });
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left text-zinc-300 hover:text-white transition-colors text-base font-medium py-2"
              >
                Depoimentos
              </button>
              <Button 
                className="w-full bg-white text-black hover:bg-zinc-200 rounded-full"
                onClick={() => {
                  window.open('https://wa.me//5562996385641', '_blank');
                  setMobileMenuOpen(false);
                }}
              >
                Contato
              </Button>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/1.jpg"
            alt="Diego Coelho Background"
            fill
            className="object-cover object-center sm:object-left blur-[2px] sm:blur-none"
            priority
            unoptimized
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
            <div className="max-w-3xl">
              
              {/* Main Heading */}
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-100 to-amber-300 leading-tight mb-6 sm:mb-8 tracking-tight"
              >
                Diego Coelho
              </motion.h1>
              
              {/* Quote */}
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-base sm:text-lg md:text-xl text-white leading-relaxed italic font-light mb-5 sm:mb-6 max-w-[75%] sm:max-w-[60%]"
              >
                "As guerras não são vencidas por pessoas que não se movem, mas sim, pelas que se desenvolvem constantemente, transformando suas batalhas em uma trilha de resultados."
              </motion.p>

              {/* CTA Button */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex justify-start"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-black hover:from-amber-500 hover:via-amber-600 hover:to-amber-700 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-full group shadow-2xl hover:shadow-amber-500/25 transition-all duration-300 font-semibold w-full sm:w-auto"
                    onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Conheça Nossos Serviços
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Video Section */}
      <section className="relative py-20 bg-gradient-to-br from-black via-zinc-950 to-zinc-900 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Conheça a História<br />
              <span className="text-zinc-400">de Diego Coelho</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-8">
              Assista ao vídeo e descubra a jornada de transformação
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative group"
          >
            {/* Glowing border effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/20 via-yellow-400/10 to-amber-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-700"></div>
            
            {/* Video container */}
            <div className="relative bg-zinc-900 rounded-2xl overflow-hidden shadow-2xl border border-zinc-800 group-hover:border-amber-500/50 transition-all duration-500">
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/gDwy0gI-gK0?si=SMAcBGuVXBdF9cGn&rel=0&modestbranding=1"
                  title="Diego Coelho - História de Transformação"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              
              {/* Video overlay info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 sm:p-6">
                <div>
                  <p className="text-white font-bold text-base sm:text-lg">História de Transformação</p>
                  <p className="text-zinc-300 text-xs sm:text-sm">Diego Coelho - Gestão de Negócios</p>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 border-r-4 border-t-4 border-amber-500/30 rounded-tr-3xl"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 border-l-4 border-b-4 border-amber-500/30 rounded-bl-3xl"></div>
          </motion.div>

          {/* Call to action */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-zinc-400 mb-6">
              Gostou do que viu? Entre em contato e transforme seu negócio também!
            </p>
            <Button 
              size="lg" 
              className="bg-amber-500 hover:bg-amber-600 text-white text-lg px-12 py-6 rounded-full group shadow-xl hover:shadow-2xl transition-all duration-300"
              onClick={() => window.open('https://wa.me//5562996385641', '_blank')}
            >
              Quero Transformar Meu Negócio
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* About Diego Section */}
      <section className="relative py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-white via-zinc-50 to-zinc-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center mb-16 sm:mb-24 lg:mb-32">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white text-sm font-medium rounded-full">
                <Heart className="w-4 h-4" />
                MINHA HISTÓRIA
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-black leading-tight">
                Por que Diego Coelho<br />
                <span className="text-zinc-600">trabalha com gestão?</span>
              </h2>
              
              <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-zinc-700 leading-relaxed">
                <p>
                  Você já teve vontade de trabalhar com o que você realmente gosta? Já teve aquela vontade de dar tudo de si para se tornar uma pessoa próspera, com vários negócios e fontes de rendas diferentes, ser procurado por outras pessoas e essas ficarem gratas para sempre?
                </p>
                <p>
                  Esse foi o sentimento alimentado por Diego Coelho, uma mente criativa e sonhadora desde sua infância.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute -inset-6 bg-gradient-to-r from-black/10 to-black/5 rounded-3xl blur-3xl group-hover:blur-[60px] transition-all duration-700"></div>
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/3.jpg"
                  alt="Diego Coelho - História"
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              </div>
            </motion.div>
          </div>

          {/* Origins Story */}
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative group order-2 lg:order-1"
            >
              <div className="absolute -inset-6 bg-gradient-to-r from-black/10 to-black/5 rounded-3xl blur-3xl group-hover:blur-[60px] transition-all duration-700"></div>
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/4.jpg"
                  alt="Diego Coelho - Origens"
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8 order-1 lg:order-2"
            >
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white text-sm font-medium rounded-full">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                ORIGENS HUMILDES
              </div>
              
              <h3 className="text-4xl lg:text-5xl font-bold text-black leading-tight">
                Uma Infância que<br />
                <span className="text-zinc-600">Moldou o Caráter</span>
              </h3>
              
              <div className="space-y-6 text-lg text-zinc-700 leading-relaxed">
                <p>
                  Diego teve uma infância simples. Criado pela sua mãe e com grande ajuda de sua família materna, até seus 5 anos morava em uma chácara de 3 alqueires no interior de Goiás onde passava a semana sob os cuidados dos seus avós enquanto sua mãe trabalhava na cidade, por pouco mais de R$400,00.
                </p>
                <p>
                  Ele presenciou o que a escassez de dinheiro pode causar na vida das pessoas, mas também aprendeu que o pouco bem administrado fazia muito. Seus avós, tios e sua mãe, sempre foram muito cuidadosos com o dinheiro, e em 18 anos Diego presenciou a transformação da sua família.
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Transformation Journey */}
      <section className="relative py-32 bg-gradient-to-br from-black via-zinc-950 to-zinc-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm text-white text-sm font-medium rounded-full border border-white/20 mb-6">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              JORNADA DE TRANSFORMAÇÃO
            </div>
            <h2 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Do Interior para<br />
              <span className="text-zinc-400">a Capital Federal</span>
            </h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed">
              A decisão que mudou tudo e iniciou um processo de descoberta e crescimento pessoal
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-6 text-lg text-zinc-300 leading-relaxed">
                <p>
                  Esteve também por parte da sua adolescência ajudando seu tio, que já tinha um pequeno negócio quando Diego estava na adolescência. Aos 17 anos, após sua mãe descobrir que ele estava arriscando demais a vida, treinando montarias em touros, tomou a decisão de se tornar militar, e partiu para a capital federal.
                </p>
                <p>
                  Começava aí um processo de transformação pessoal e principalmente de descoberta, de como funcionava de verdade todo o mercado e como ele poderia encontrar seu propósito de vida, algo que na época vivendo no interior não era prospectado.
                </p>
                <p className="text-xl font-semibold text-white">
                  "E se as guerras são vencidas por quem se move, Diego vem se movendo e desenvolvendo constantemente, estudando profundamente sobre gestão e finanças e assim repassando todo o seu conhecimento."
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6 pt-8">
                {[
                  { icon: Award, title: "Formação Militar", desc: "Disciplina e liderança" },
                  { icon: Briefcase, title: "Experiência Prática", desc: "Desde a adolescência" },
                  { icon: TrendingUp, title: "Crescimento Contínuo", desc: "Sempre em movimento" },
                  { icon: Users, title: "Impacto Social", desc: "Transformando vidas" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300"
                  >
                    <item.icon className="text-white mb-3" size={32} />
                    <h4 className="text-white font-bold mb-2">{item.title}</h4>
                    <p className="text-zinc-400 text-sm">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute -inset-6 bg-gradient-to-r from-white/20 to-white/5 rounded-3xl blur-3xl group-hover:blur-[60px] transition-all duration-700"></div>
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/Imagem do WhatsApp de 2025-10-24 à(s) 10.51.35_c5760651.jpg"
                  alt="Diego Coelho - Transformação"
                  fill
                  className="object-cover object-[30%_top] transition-transform duration-700 group-hover:scale-105"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="space-y-2">
                    <p className="text-white text-2xl font-bold">Diego Coelho</p>
                    <p className="text-zinc-300">Uma jornada de transformação contínua</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-32 bg-gradient-to-br from-zinc-50 via-white to-zinc-100 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:80px_80px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white text-sm font-medium rounded-full mb-6">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              SERVIÇOS PREMIUM
            </div>
            <h2 className="text-5xl lg:text-7xl font-bold text-black mb-6 leading-tight">
              Transformação<br />
              <span className="text-zinc-600">Empresarial</span>
            </h2>
            <p className="text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed">
              Soluções estratégicas personalizadas para elevar seu negócio ao próximo nível
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: Target,
                title: "Consultoria Estratégica",
                description: "Análise profunda do seu negócio com estratégias personalizadas para crescimento sustentável",
                features: ["Diagnóstico completo", "Plano de ação", "Acompanhamento mensal"]
              },
              {
                icon: TrendingUp,
                title: "Gestão Financeira",
                description: "Otimização de recursos e estruturação financeira para maximizar resultados",
                features: ["Controle de fluxo de caixa", "Análise de investimentos", "Planejamento fiscal"]
              },
              {
                icon: Users,
                title: "Desenvolvimento de Equipes",
                description: "Capacitação e alinhamento de equipes para alta performance organizacional",
                features: ["Treinamentos especializados", "Cultura organizacional", "Liderança eficaz"]
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-black to-zinc-800 rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                <div className="relative bg-white rounded-3xl p-10 border border-zinc-200 group-hover:border-black transition-all duration-500 shadow-lg group-hover:shadow-2xl">
                  <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-4">{service.title}</h3>
                  <p className="text-zinc-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm text-zinc-700">
                        <div className="w-2 h-2 bg-black rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Button size="lg" className="bg-black text-white hover:bg-zinc-800 text-lg px-12 py-8 rounded-full group shadow-xl hover:shadow-2xl transition-all duration-300" onClick={() => window.open('https://wa.me//5562996385641', '_blank')}>
              Agendar Consultoria Gratuita
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <section className="relative py-32 bg-gradient-to-br from-black via-zinc-950 to-zinc-900 overflow-hidden">
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm text-white text-sm font-medium rounded-full border border-white/20">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                RESULTADOS COMPROVADOS
              </div>
              
              <h2 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Números que<br />
                <span className="text-zinc-400">Falam por Si</span>
              </h2>
              
              <p className="text-xl text-zinc-300 leading-relaxed">
                Mais de uma década transformando negócios e criando histórias de sucesso em diversos segmentos do mercado.
              </p>

              <div className="grid grid-cols-2 gap-8 pt-8">
                {[
                  { number: "500+", label: "Empresas Atendidas" },
                  { number: "95%", label: "Taxa de Sucesso" },
                  { number: "R$ 50M+", label: "Faturamento Gerado" },
                  { number: "12", label: "Anos de Experiência" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300"
                  >
                    <p className="text-4xl font-bold text-white mb-2">{stat.number}</p>
                    <p className="text-sm text-zinc-400">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute -inset-6 bg-gradient-to-r from-white/20 to-white/5 rounded-3xl blur-3xl group-hover:blur-[60px] transition-all duration-700"></div>
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/2.jpg"
                  alt="Diego Coelho - Resultados"
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="space-y-2">
                    <p className="text-white text-2xl font-bold">Diego Coelho</p>
                    <p className="text-zinc-300">Especialista em Gestão Empresarial</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="relative py-20 bg-gradient-to-br from-zinc-50 via-white to-zinc-100 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-black/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-black/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white text-sm font-medium rounded-full mb-6">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              DEPOIMENTOS
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-black mb-6 leading-tight">
              Histórias de<br />
              <span className="text-zinc-600">Sucesso</span>
            </h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed">
              Veja como transformamos negócios através da gestão estratégica
            </p>
          </motion.div>

          {/* Carousel Container */}
          <div className="relative">
            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mb-8">
              <button
                onClick={scrollPrev}
                className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:bg-zinc-800 transition-colors shadow-lg hover:shadow-xl"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={scrollNext}
                className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:bg-zinc-800 transition-colors shadow-lg hover:shadow-xl"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Carousel */}
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {[
                  {
                    name: "Maria Silva",
                    role: "CEO, TechStart",
                    content: "Diego transformou completamente nossa gestão financeira. Em 6 meses aumentamos nossa receita em 300% e organizamos todos os processos.",
                    rating: 5,
                    result: "300% aumento na receita"
                  },
                  {
                    name: "João Santos",
                    role: "Diretor, Construtora Santos",
                    content: "A consultoria do Diego foi fundamental para estruturarmos nossa empresa. Hoje temos controle total sobre nossos projetos e equipes.",
                    rating: 5,
                    result: "Controle total dos processos"
                  },
                  {
                    name: "Ana Costa",
                    role: "Fundadora, EcoVerde",
                    content: "Graças ao trabalho do Diego, conseguimos escalar nosso negócio de forma sustentável e profissional.",
                    rating: 5,
                    result: "Crescimento sustentável"
                  },
                  {
                    name: "Carlos Mendes",
                    role: "Proprietário, Rede de Restaurantes",
                    content: "Diego nos ajudou a transformar nossa visão em realidade. Com sua metodologia, conseguimos expandir de 1 para 5 unidades em apenas 18 meses.",
                    rating: 5,
                    result: "5x expansão do negócio"
                  }
                ].map((testimonial, index) => (
                  <div key={index} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 px-4">
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="group relative h-full"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-black to-zinc-800 rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                      <div className="relative bg-white rounded-3xl p-4 sm:p-6 border border-zinc-200 group-hover:border-black transition-all duration-500 shadow-lg group-hover:shadow-2xl h-full flex flex-col">
                        {/* Stars */}
                        <div className="flex gap-1 mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <div key={i} className="w-4 h-4 bg-black rounded-full"></div>
                          ))}
                        </div>
                        
                        <p className="text-zinc-700 mb-4 leading-relaxed italic text-sm grow">
                          "{testimonial.content}"
                        </p>
                        
                        <div className="mb-4 p-3 bg-zinc-50 rounded-xl border-l-4 border-black">
                          <p className="text-black font-bold text-xs">RESULTADO:</p>
                          <p className="text-zinc-700 font-semibold text-sm">{testimonial.result}</p>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-sm">
                              {testimonial.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <div>
                            <p className="font-bold text-black text-sm">{testimonial.name}</p>
                            <p className="text-xs text-zinc-600">{testimonial.role}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-32 bg-gradient-to-br from-black via-zinc-950 to-zinc-900 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm text-white text-sm font-medium rounded-full border border-white/20">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                VAMOS CONVERSAR
              </div>
              
              <h2 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Pronto para<br />
                <span className="text-zinc-400">Transformar</span><br />
                seu Negócio?
              </h2>
              
              <p className="text-xl text-zinc-300 leading-relaxed">
                Agende uma consultoria gratuita e descubra como podemos elevar sua empresa ao próximo nível.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <Users className="text-black" size={24} />
                  </div>
                  <div>
                    <p className="text-white font-bold">Consultoria Personalizada</p>
                    <p className="text-zinc-400 text-sm">Análise completa do seu negócio</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <Target className="text-black" size={24} />
                  </div>
                  <div>
                    <p className="text-white font-bold">Estratégias Eficazes</p>
                    <p className="text-zinc-400 text-sm">Planos de ação personalizados</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <TrendingUp className="text-black" size={24} />
                  </div>
                  <div>
                    <p className="text-white font-bold">Resultados Garantidos</p>
                    <p className="text-zinc-400 text-sm">Acompanhamento até o sucesso</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-white text-black hover:bg-zinc-200 text-lg px-12 py-8 rounded-full group shadow-xl hover:shadow-2xl transition-all duration-300" onClick={() => window.open('https://wa.me//5562996385641', '_blank')}>
                  Agendar Consultoria Gratuita
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute -inset-8 bg-gradient-to-br from-white/20 to-white/5 rounded-3xl blur-3xl group-hover:blur-[60px] transition-all duration-700"></div>
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>
                <Image
                  src="/6.jpg"
                  alt="Diego Coelho - Contato"
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  unoptimized
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                  <div className="space-y-2">
                    <p className="text-white text-2xl font-bold">Diego Coelho</p>
                    <p className="text-zinc-300">Especialista em Gestão de Negócios</p>
                    <div className="flex gap-2 pt-4">
                      <div className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
                        <span className="text-white text-sm">WhatsApp</span>
                      </div>
                      <div className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
                        <span className="text-white text-sm">LinkedIn</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 border-r-4 border-t-4 border-white/20 rounded-tr-3xl"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 border-l-4 border-b-4 border-white/20 rounded-bl-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="py-12 bg-black border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col items-center gap-6">
            <Image
              src="/Logo D.C Gestão.png"
              alt="Diego Coelho Gestão"
              width={150}
              height={50}
              className="h-12 w-auto"
              unoptimized
            />
            <p className="text-zinc-400 text-center">
              © 2024 Diego Coelho - Gestão de Negócios. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

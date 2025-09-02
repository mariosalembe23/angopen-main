import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowUpRight,
  ChevronRight,
  Flag,
  LibraryBig,
  MoveRight,
  Search,
  Sun,
  Telescope,
  Zap,
} from "lucide-react";
import { MarqueeDemo } from "@/components/AppComponent/MarqueeCompany";
import React from "react";

const navbarItems = [
  {
    label: "Início",
    href: "/",
    external: false,
  },
  {
    label: "Sobre nós",
    href: "/about",
    external: false,
  },
  {
    label: "Actividades",
    href: "/projects",
    external: true,
  },
  {
    label: "Comunidade",
    href: "/community",
    external: true,
  },
  {
    label: "Chat",
    href: "/chat",
    external: true,
  },
];

const AboutCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => {
  return (
    <div className="h-80 border overflow-hidden p-5 flex relative items-start flex-col justify-between border-zinc-900/50 rounded-2xl bg-[#0c0c0c4d] ">
      <span className="absolute bottom-2 -right-12">
        <svg
          className="size-48  text-zinc-900/30 stroke-zinc-900/50"
          viewBox="0 0 121 107"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M58.2538 3.12761L28.161 57.025C27.4167 58.3581 28.3804 60 29.9073 60H90.0927C91.6196 60 92.5833 58.3581 91.839 57.025L61.7463 3.12761C60.9832 1.76093 59.0168 1.76093 58.2538 3.12761Z"
            fill="currentColor"
          />
          <path
            d="M60.4574 66.1414L42.6338 103.641C42.003 104.969 42.9708 106.5 44.4402 106.5H117.033C118.573 106.5 119.535 104.832 118.764 103.499L97.0776 65.9987C96.7201 65.3807 96.0602 65 95.3462 65H62.2638C61.4918 65 60.7888 65.4443 60.4574 66.1414Z"
            fill="currentColor"
            stroke="currentColor"
          />
          <path
            d="M22.9255 66.0145L1.69058 103.515C0.935601 104.848 1.89874 106.5 3.43093 106.5H34.2572C35.0183 106.5 35.7134 106.068 36.0504 105.386L54.5745 67.8858C55.2311 66.5566 54.2639 65 52.7813 65H24.6659C23.9454 65 23.2805 65.3875 22.9255 66.0145Z"
            fill="currentColor"
          />
        </svg>
      </span>
      <header className="flex relative items-center justify-between w-full">
        <span>
          <svg
            className="size-6"
            viewBox="0 0 121 107"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M58.2538 3.12761L28.161 57.025C27.4167 58.3581 28.3804 60 29.9073 60H90.0927C91.6196 60 92.5833 58.3581 91.839 57.025L61.7463 3.12761C60.9832 1.76093 59.0168 1.76093 58.2538 3.12761Z"
              fill="#D2551F"
            />
            <path
              d="M60.4574 66.1414L42.6338 103.641C42.003 104.969 42.9708 106.5 44.4402 106.5H117.033C118.573 106.5 119.535 104.832 118.764 103.499L97.0776 65.9987C96.7201 65.3807 96.0602 65 95.3462 65H62.2638C61.4918 65 60.7888 65.4443 60.4574 66.1414Z"
              fill="#fff"
              stroke="#1A1A1A"
            />
            <path
              d="M22.9255 66.0145L1.69058 103.515C0.935601 104.848 1.89874 106.5 3.43093 106.5H34.2572C35.0183 106.5 35.7134 106.068 36.0504 105.386L54.5745 67.8858C55.2311 66.5566 54.2639 65 52.7813 65H24.6659C23.9454 65 23.2805 65.3875 22.9255 66.0145Z"
              fill="#D2551F"
            />
          </svg>
        </span>
      </header>
      <footer className="relative">
        <span className="text-white font-[450] flex text-lg items-center gap-2">
          {icon}
          {title}
        </span>
        <p className="text-zinc-400 font-[450] mt-1 text-[14px]">
          {description}
        </p>
      </footer>
    </div>
  );
};

export default function Home() {
  return (
    <div>
      <header className="sticky flex items-center justify-around top-0 z-50 w-full border-b border-zinc-900 py-3  backdrop-blur-md bg-[#0a0a0a]/80">
        <div className="flex items-center gap-4">
          <div>
            <Link
              href={"/"}
              className="flex text-white clash text-xl items-center gap-2"
            >
              <svg
                className="size-6"
                viewBox="0 0 121 107"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M58.2538 3.12761L28.161 57.025C27.4167 58.3581 28.3804 60 29.9073 60H90.0927C91.6196 60 92.5833 58.3581 91.839 57.025L61.7463 3.12761C60.9832 1.76093 59.0168 1.76093 58.2538 3.12761Z"
                  fill="#D2551F"
                />
                <path
                  d="M60.4574 66.1414L42.6338 103.641C42.003 104.969 42.9708 106.5 44.4402 106.5H117.033C118.573 106.5 119.535 104.832 118.764 103.499L97.0776 65.9987C96.7201 65.3807 96.0602 65 95.3462 65H62.2638C61.4918 65 60.7888 65.4443 60.4574 66.1414Z"
                  fill="#fff"
                  stroke="#1A1A1A"
                />
                <path
                  d="M22.9255 66.0145L1.69058 103.515C0.935601 104.848 1.89874 106.5 3.43093 106.5H34.2572C35.0183 106.5 35.7134 106.068 36.0504 105.386L54.5745 67.8858C55.2311 66.5566 54.2639 65 52.7813 65H24.6659C23.9454 65 23.2805 65.3875 22.9255 66.0145Z"
                  fill="#D2551F"
                />
              </svg>
              Angopen
            </Link>
          </div>
          <div className="flex items-center px-1 border-l border-zinc-900 gap-3">
            {navbarItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <Button
                  variant="link"
                  className="transition-all flex items-start gap-1 text-white text-base font-[400]"
                >
                  {item.label}
                  {item.external && (
                    <ArrowUpRight className="inline-block opacity-40 size-3" />
                  )}
                </Button>
              </Link>
            ))}
            <button className="text-white rotate-90 opacity-70 hover:opacity-100 transition-all ms-3">
              <Search className="size-5 " />
            </button>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="bg-transparent transition-all hover:border-zinc-800 text-white hover:opacity-80  px-4 py-2.5 text-[15px] font-[450] rounded-md leading-none border-zinc-900">
            Iniciar Sessão
          </button>
          <button className="bg-transparent transition-all hover:bg-zinc-900/40 text-white border px-4 py-2.5 text-[15px] font-[450] rounded-md leading-none border-zinc-900">
            Cadastre-se
            <ChevronRight className="inline-block ml-1 size-4" />
          </button>
          <button className="text-white opacity-70 hover:opacity-100 transition-all ms-3">
            <Sun className="size-5 " />
          </button>
        </div>
      </header>

      <main className="pt-28">
        <header className="max-w-4xl font-sans text-center w-full mx-auto">
          <div className="mb-6 flex justify-center">
            <button className="bg-[#a83f1257] border border-[#D2551F] text-white px-2 py-1.5 rounded-full flex items-start leading-none text-[15px]">
              Visitar actividades recentes
              <ArrowUpRight className="inline-block ml-[0.1rem] size-3" />
            </button>
          </div>

          <h1 className="text-white text-6xl font-extrabold">
            Conectando Talentos a Grandes Oportunidades
          </h1>
          <div className="max-w-2xl mx-auto">
            <p className="text-zinc-400 pt-4">
              Descubra e compartilhe as{" "}
              <span className="text-white">
                melhores oportunidades de negócios em TI
              </span>{" "}
              no Angopen. Trazemos para você uma plataforma onde{" "}
              <span className="text-white">talentos e empresas</span> se
              encontram para criar o futuro da tecnologia juntos.
            </p>
            <div className="flex w-[70%] items-center mx-auto  justify-center gap-2  mt-6">
              <button className="bg-transparent w-full justify-between flex transition-all hover:bg-zinc-900/40 text-white border px-4 py-3 text-[15px] font-[450] rounded-md leading-none border-zinc-900">
                Pesquisa rápida
                <Search className="inline-block text-zinc-600 ml-2 size-4" />
              </button>
              <button className="bg-white w-full justify-between flex transition-all hover:bg-zinc-900/40 text-black border px-4 py-3 text-[15px] font-[450] rounded-md leading-none border-zinc-900">
                Começar agora
                <MoveRight className="inline-block text-zinc-600 ml-2 size-4" />
              </button>
            </div>
          </div>
        </header>
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center px-4">
          <p className="text-zinc-200 text-xl pt-16 text-center w-full">
            Parceiros
          </p>
          <MarqueeDemo />
        </div>

        <section className="mt-20">
          <header className="text-center">
            <h2 className="text-white leading-none text-5xl font-bold ">
              Unindo mais que laços
            </h2>
            <p className="text-zinc-400 mt-4 text-lg leading-none">Sobre nós</p>
          </header>
          <div className="max-w-7xl pb-10 mt-16 grid grid-cols-4 gap-2 w-full mx-auto">
            <AboutCard
              icon={<LibraryBig className="size-4 text-white" />}
              title="Valores"
              description="No Angopen, acreditamos na transparência, inovação e colaboração. Nosso compromisso é criar um ambiente onde talentos e empresas possam crescer juntos, impulsionando o futuro da tecnologia."
            />
            <AboutCard
              icon={<Flag className="size-4 text-white" />}
              title="Missão"
              description="Nossa missão é conectar talentos excepcionais a oportunidades de negócios em TI, facilitando parcerias que impulsionam a inovação e o crescimento no setor tecnológico."
            />
            <AboutCard
              icon={<Telescope className="size-4 text-white" />}
              title="Visão"
              description="Ser a plataforma líder em oportunidades de negócios em TI, reconhecida por conectar talentos e empresas de forma eficaz, promovendo um ecossistema tecnológico vibrante e inovador."
            />
            <AboutCard
              icon={<Zap className="size-4 text-white" />}
              title="O que fazemos"
              description="No Angopen, oferecemos uma plataforma dinâmica onde talentos e empresas podem se conectar, explorar oportunidades de negócios em TI e colaborar para impulsionar o profissionalismo e a inovação no setor."
            />
          </div>
        </section>
      </main>
    </div>
  );
}

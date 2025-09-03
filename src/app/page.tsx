import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  ChevronRight,
  Flag,
  LibraryBig,
  Menu,
  MessagesSquare,
  MoveRight,
  Presentation,
  Search,
  SquareUserRound,
  Sun,
  Telescope,
  WalletCards,
  Zap,
} from "lucide-react";
import { MarqueeDemo } from "@/components/AppComponent/MarqueeCompany";
import React from "react";
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";

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

const footerItems = [
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
  {
    label: "Cookies",
    href: "/cookies",
    external: false,
  },
];

const AboutCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => {
  return (
    <div className="pot:h-80 h-56 border overflow-hidden p-5 flex relative items-start flex-col justify-between border-zinc-900/50 rounded-2xl bg-[#0c0c0c4d] ">
      <span className="absolute bottom-2 -right-24">
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
        <p className="text-zinc-400 font-[450] mt-1 text-[15px]">
          {description}
        </p>
      </footer>
    </div>
  );
};

const ActivityCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  color?: string;
}> = ({
  icon,
  title,
  description,
  color = "border-zinc-900/50 bg-[#0c0c0c4d]",
}) => {
  return (
    <div
      className={`border overflow-hidden p-5 flex relative items-start flex-col justify-between rounded-2xl ${color}`}
    >
      <header>
        <h3 className="flex text-lg items-center  font-medium text-white">
          {icon}
          {title}
        </h3>
        <p className="pt-2 text-[15px] text-white">{description}</p>
      </header>
    </div>
  );
};

export default function Home() {
  return (
    <div>
      <header className="sticky flex items-center justify-between pot:px-0 px-5 pot:justify-around top-0 z-50 w-full border-b border-zinc-900 py-3  backdrop-blur-md bg-[#0a0a0a]/80">
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
          <div className="pot:flex hidden items-center px-1 border-l border-zinc-900 gap-3">
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
        <div className="pot:flex hidden items-center gap-2">
          <button className="bg-transparent transition-all hover:border-zinc-800 text-white hover:opacity-80  px-4 py-2.5 text-[15px] rounded-md leading-none border-zinc-900">
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
        <div className="flex pot:hidden items-center justify-center">
          <button className="text-white opacity-80 hover:opacity-100 transition-all ms-3">
            <Menu className="size-6 " />
          </button>
        </div>
      </header>

      <main className="pt-28">
        <header className="max-w-4xl px-5 font-sans text-center w-full mx-auto">
          <div className="mb-6 flex justify-center">
            <button className="bg-[#a83f1257] border border-[#D2551F] text-white px-2 py-1.5 rounded-full flex items-start leading-none text-[15px]">
              Visitar actividades recentes
              <ArrowUpRight className="inline-block ml-[0.1rem] size-3" />
            </button>
          </div>

          <h1 className="text-white pot:text-6xl ret:text-5xl text-3xl lal:text-7xl font-extrabold">
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
            <div className="flex w-full ret:flex-row flex-col ret:w-[70%] items-center mx-auto  justify-center gap-2  mt-6">
              <button className="bg-transparent w-full justify-between flex transition-all hover:bg-zinc-900/40 text-white border px-4 py-3 text-[15px] font-[450] rounded-md leading-none border-zinc-900">
                Pesquisa rápida
                <Search className="inline-block text-zinc-600 ml-2 size-4" />
              </button>
              <button className="bg-white h w-full justify-between flex transition-all hover:bg-white/40 text-black border px-4 py-3 text-[15px] font-[450] rounded-md leading-none border-zinc-900">
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

        <section className="mt-28 px-5">
          <header className="text-center">
            <h2 className="text-white leading-none pot:text-4xl text-3xl lal:text-5xl font-medium pot:font-semibold ">
              Unindo mais que laços
            </h2>
            <p className="text-zinc-400 mt-2 text-lg leading-none uppercase">
              Sobre nós
            </p>
          </header>
          <div className="max-w-7xl pb-10 mt-16 grid ret:grid-cols-2 grid-cols-1 pot:grid-cols-4 gap-2 w-full mx-auto">
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

        <section className="mt-40 px-5">
          <header className="text-center">
            <h2 className="text-white leading-none pot:text-4xl text-3xl lal:text-5xl font-medium pot:font-semibold ">
              Preenchendo lacunas...
            </h2>
            <p className="text-zinc-400 mt-2 uppercase  text-lg leading-none">
              Projectos
            </p>
          </header>
          <div className="max-w-7xl pb-10  mt-32 items-center grid grid-cols-1 pot:grid-cols-7 pot:gap-6 gap-y-6 w-full mx-auto">
            <div className="grid grid-cols-1 col-span-2 gap-2 relative z-20">
              <ActivityCard
                icon={
                  <BriefcaseBusiness className="size-5  text-white inline-block mr-2" />
                }
                title="Oportunidades de emprego"
                description="Oferecemos a oportunidade de encontrar empregos em TI de forma rápida e eficiente em grandes empresas que são parceiras do Angopen."
              />
              <ActivityCard
                icon={
                  <Presentation className="size-5  text-white inline-block mr-2" />
                }
                title="Acesso a qualquer evento"
                description="Estaremos sempre a par dos eventos mais recentes no setor de TI, como conferências, workshops e meetups, hackathons, etc, garantindo que você nunca perca uma oportunidade de networking ou aprendizado."
              />
              <ActivityCard
                icon={
                  <WalletCards className="size-5  text-white inline-block mr-2" />
                }
                title="Freelancing"
                color="border-[#D2551F]/50 bg-[#D2551F]"
                description="Encontre e solucione trabalhos freelance em TI, e ganhe uma
                    renda extra resolvendo projectos pessoais ou empresariais."
              />
            </div>
            <div className="flex col-span-3 items-center justify-center">
              <NeonGradientCard className=" bg-transparent flex  items-center justify-center text-center">
                <span className="flex items-center justify-center">
                  <svg
                    className="pot:size-48 size-36"
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
                      stroke="#ffff"
                    />
                    <path
                      d="M22.9255 66.0145L1.69058 103.515C0.935601 104.848 1.89874 106.5 3.43093 106.5H34.2572C35.0183 106.5 35.7134 106.068 36.0504 105.386L54.5745 67.8858C55.2311 66.5566 54.2639 65 52.7813 65H24.6659C23.9454 65 23.2805 65.3875 22.9255 66.0145Z"
                      fill="#D2551F"
                    />
                  </svg>
                </span>
              </NeonGradientCard>
            </div>
            <div className="grid grid-cols-1 col-span-2 gap-2 relative z-20">
              <ActivityCard
                icon={
                  <SquareUserRound className="size-5  text-white inline-block mr-2" />
                }
                title=" Profissionais Concentrados"
                color="border-[#D2551F]/50 bg-[#D2551F]"
                description="A nossa plataforma reúne uma comunidade diversificada de
                    profissionais de TI, facilitando a busca por talentos com
                    habilidades específicas para atender às necessidades do seu
                    negócio."
              />
              <ActivityCard
                icon={
                  <Award className="size-5  text-white inline-block mr-2" />
                }
                title="Satrt ups & Ideias"
                description="Aqui, podes encontrar apoio e recursos para transformar suas
                    ideias em realidade, conectando-se com investidores,
                    mentores e outros empreendedores no setor de TI."
              />
              <ActivityCard
                icon={
                  <MessagesSquare className="size-5  text-white inline-block mr-2" />
                }
                title="Comunidade Ativa"
                description="Junte-se a uma comunidade vibrante de profissionais de TI,
                    onde você pode compartilhar conhecimentos, discutir
                    tendências do setor e colaborar em projetos inovadores."
              />
            </div>
          </div>
        </section>

        <section className="pot:mt-64 mt-44">
          <header className="text-center">
            <h2 className="text-white leading-none pot:text-4xl text-3xl lal:text-5xl font-medium ">
              Conectando-nos sempre
            </h2>
            <p className="text-zinc-400 mt-2 uppercase  text-lg leading-none">
              Comunidade
            </p>
          </header>
          <div className="max-w-2xl w-full mt-12 mx-auto grid px-5 ret:grid-cols-2 gap-2">
            <div className="h-96 border overflow-hidden p-5 flex relative items-start flex-col justify-between border-zinc-900/50 rounded-2xl bg-[#0c0c0c4d]">
              <header>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="bi bi-discord size-7 text-[#fff]"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612" />
                </svg>
              </header>
              <footer>
                <h4 className="text-white text-lg font-medium">Discord</h4>
                <p className="text-zinc-400 text-[15px]">
                  Junte-se ao nosso servidor Discord para se conectar com outros
                  profissionais de TI, participar de discussões e ficar por
                  dentro das últimas novidades do setor.
                </p>
                <Button className="mt-5 w-full py-5 bg-[#5865f2] hover:bg-[#4752c4] text-white font-[500]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="bi bi-discord size-4 text-[#fff]"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612" />
                  </svg>
                  Entrar no Discord
                </Button>
              </footer>
            </div>
            <div className="h-96 border overflow-hidden p-5 flex relative items-start flex-col justify-between border-zinc-900/50 rounded-2xl bg-[#0c0c0c4d]">
              <header>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-whatsapp text-white size-7"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                </svg>
              </header>
              <footer>
                <h4 className="text-white text-lg font-medium">WhatsApp</h4>
                <p className="text-zinc-400 text-[15px]">
                  Junte-se ao nosso grupo do WhatsApp para se conectar com
                  outros profissionais de TI, participar de discussões e ficar
                  por dentro das últimas novidades do setor.
                </p>
                <Button className="mt-5 w-full py-5 bg-green-600 hover:bg-green-800 text-white font-[500]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-whatsapp text-white size-4"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                  </svg>
                  Entrar no WhatsApp
                </Button>
              </footer>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex gap-y-5 pot:flex-row flex-col px-5 items-center justify-around w-full border-t mt-32 border-zinc-900 py-3  backdrop-blur-md bg-[#0a0a0a]/80">
        <div className="flex pot:flex-row flex-col items-center gap-4">
          <div className="pot:pt-0 pt-5">
            <Link
              href={"/"}
              className="flex text-white clash text-xl items-center gap-2"
            >
              <svg
                className="pot:size-6 size-8"
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
            </Link>
          </div>
          <div className="flex flex-wrap justify-center items-center px-1 pot:border-l border-zinc-900 gap-3">
            {footerItems.map((item) => (
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
          </div>
        </div>
        <div className="flex pot:flex-row flex-col items-center gap-6">
          <div className="flex items-center justify-center gap-6">
            <Link href={"/"} className="text-white text-lg">
              <i className="bi bi-instagram"></i>
            </Link>
            <Link href={"/"} className="text-white text-lg">
              <i className="bi bi-linkedin"></i>
            </Link>
            <Link href={"/"} className="text-white text-lg">
              <i className="bi bi-facebook"></i>
            </Link>
          </div>
          <div className="px-1 flex items-center justify-center pot:border-l border-zinc-900">
            <Button
              variant="link"
              className="transition-all text-[15px] flex items-start gap-1 text-white text-base font-[400]"
            >
              Política de Privacidade
              <ArrowUpRight className="inline-block opacity-40 size-3" />
            </Button>
            <Button
              variant="link"
              className="transition-all flex text-[15px] items-start gap-1 text-white text-base font-[400]"
            >
              Termos de Serviço
              <ArrowUpRight className="inline-block opacity-40 size-3" />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}

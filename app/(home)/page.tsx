import { format } from "date-fns";
import Header from "../_components/header";
import { ptBR } from "date-fns/locale";
import Search from "./_components/search";
import BookingItem from "../_components/booking-item";
import { db } from "../_lib/prisma";
import BarberhopItem from "./_components/barbershop-item";

export default async function Home() {
  const barbershop = await db.barbershop.findMany({});

  return (
    <>
      <Header />

      <div className="px-5 pt-5">
        <h2 className="text-xl font-bold">Olá, Barba!</h2>
        <p className="capitalize text-sm">
          {format(new Date(), "EEE',' dd 'de' MMMM", { locale: ptBR })}
        </p>
      </div>

      <div className="px-5 mt-6">
        <Search />
      </div>

      <div className="px-5 mt-6">
        <h2 className="text-xs uppercase text-gray-400 font-bold mb-3">
          Agendamentos
        </h2>
        <BookingItem />
      </div>

      <div className=" mt-6">
        <h2 className="text-xs px-5 uppercase text-gray-400 font-bold mb-3">
          Recomendados
        </h2>

        <div className="flex px-5 gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {barbershop.map((barbershop) => (
            <BarberhopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
    </>
  );
}

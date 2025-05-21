import NextLink from "next/link";
import { MapPinXIcon } from "lucide-react";
import { cn } from "@magnidev/frontend-utils";

export default function NotFound() {
  return (
    <div
      className={cn(
        "flex justify-center items-center flex-col gap-y-6 absolute inset-0 rounded-none z-[9999999]"
      )}
    >
      <div className="w-full max-w-[400px] flex flex-col gap-y-8">
        <div className="w-full flex items-center gap-6 flex-wrap">
          <MapPinXIcon className="size-20 text-neutral-500" />

          <p className="text-center text-4xl font-bold tracking-widest">
            No encontrado
          </p>
        </div>

        <div className="w-full">
          <p className="text-lg text-neutral-500">Posibles soluciones:</p>
          <div className="list-disc list-inside mt-2">
            <li>Verifica que la URL sea correcta</li>
          </div>
        </div>

        <NextLink href={"/"}>Volver a inicio</NextLink>
      </div>
    </div>
  );
}

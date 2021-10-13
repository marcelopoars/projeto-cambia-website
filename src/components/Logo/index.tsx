import Image from "next/image";

export function Logo() {
  return (
      <Image
        width={184}
        height={45}
        src="/images/logo-projeto-cambia.svg"
        alt="Logo Projeto Cambia"
      />
  );
}

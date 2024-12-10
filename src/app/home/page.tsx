import Image from "next/image";

export default function home() {
  return (
    <div>
      ruta home
      <figure>
        <Image
          src="/images/description.jpeg"
          alt="imagen"
          width={300}
          height={300}
          quality={100}
          />
        </figure>
    </div>
  );
}

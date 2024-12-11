"use client";
import { useState } from "react";
import Image from "next/image";

const Home = () => {
  const [isbuttonshow, setisbuttonshow] = useState<boolean>(false);
  return (
    <div>
      ruta home
      <button onClick={() => setisbuttonshow(true)}>Clic here</button>
      <figure>
        {isbuttonshow && (
          <Image
            src="/images/description.jpeg"
            alt="imagen"
            width={300}
            height={300}
            quality={100}
          />
        )}
      </figure>
    </div>
  );
};
export default Home;

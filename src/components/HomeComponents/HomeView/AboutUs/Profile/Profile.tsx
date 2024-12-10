import Image from "next/image";
import React from "react";
import Info from "../Info/Info";

export const Profile: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-10">
      <div className="w-[200px] h-[200px] bg-primaryColor rounded-full overflow-hidden flex justify-center items-center">
        <Image
          src="/assets/images/profile.png"
          alt="Imagen de perfil"
          width={200}
          height={200}
        />
      </div>
      <Info />
    </div>
  );
};

export default Profile;

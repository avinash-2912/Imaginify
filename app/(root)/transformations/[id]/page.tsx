import { auth } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getImageSize } from "@/lib/utils";

const ImageDetails = async ({ params: { id } }: SearchParamProps) => {
  const { userId } = auth();


  return (
    <>
     
    </>
  );
};

export default ImageDetails;
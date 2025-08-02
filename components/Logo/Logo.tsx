"use client";
import Image from "next/image";
import Link from "next/link";

interface Props {
  width?: number;
  height?: number;
  imgClassName?: string;
  link?: boolean;
  text?:boolean
}

export const Logo = ({
  width = 56,
  height = 56,
  imgClassName = "",
  link = true,
  text = false
}: Props) =>
  link ? (
    <Link href="/" className={imgClassName}>
      <Image
        src="/logo_transparent.png"
        alt="logo wspólnoty świętego Krzysztofa"
        width={width}
        height={height}
        priority
      />
      {text && <p>Monastyr <br/> Świętego Krzysztofa</p>}
    </Link>
  ) : (
    <Image
      src="/logo_transparent.png"
      alt="logo wspólnoty świętego Krzysztofa"
      width={width}
      height={height}
      priority
    />

  );

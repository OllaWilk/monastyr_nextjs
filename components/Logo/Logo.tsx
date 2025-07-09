"use client";
import Image from "next/image";
import Link from "next/link";

interface Props {
  width?: number;
  height?: number;
  imgClassName?: string;
  link?: boolean;
}

export const Logo = ({
  width = 56,
  height = 56,
  imgClassName = "",
  link = true,
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

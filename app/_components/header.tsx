"use client";

import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { signIn, signOut, useSession } from "next-auth/react";
import SideMenu from "./side-menu";

const Header = () => {
  const { data, status } = useSession();

  const handleLogoutClick = () => signOut();

  const handleLoginClick = () => signIn("google");

  return (
    <Card>
      <CardContent className="px-5 py-8 justify-between items-center flex flex-row">
        <Image src="/logo.png" alt="Barber Logo" height={22} width={120} />
        
      </CardContent>
    </Card>
  );
};

export default Header;

"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="relative w-full flex items-center justify-center">
            <NavbarMenu className="top-2" />
        </div>
    )
}

function NavbarMenu({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 mt-10", className)}>
            <Menu setActive={setActive}>
                <MenuItem setActive={setActive} active={active} item="Home">

                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Our Courses">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/courses">All Courses</HoveredLink>
                        <HoveredLink href="/courses">Basic Music Theory</HoveredLink>
                        <HoveredLink href="/courses">Advanced Composition</HoveredLink>
                        <HoveredLink href="/courses">Songwriting</HoveredLink>
                        <HoveredLink href="/courses">Music Production</HoveredLink>
                    </div>
                </MenuItem>
                <Link href={"/contact"}>
                    <MenuItem setActive={setActive} active={active} item="Contact Us"></MenuItem>
                </Link>
            </Menu>
        </div>
    )
}
export default Navbar


import Link from "next/link";
import { Alien, Atom, Horse, User } from "phosphor-react";
import {
  MenuContainer,
  ContentContainer,
  NavLinkContainer,
  NavLink,
} from "./styles";

export function Menu() {
  return (
    <MenuContainer>
      <ContentContainer>
        <Atom size={62} />
        <NavLinkContainer>
          <NavLink href="/users">
            <User size={32} />
          </NavLink>
          <NavLink href="/users">
            <Alien size={32} />
          </NavLink>
          <NavLink href="/users">
            <Horse size={32} />
          </NavLink>
        </NavLinkContainer>
      </ContentContainer>
    </MenuContainer>
  );
}

import {
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem
} from '@heroui/navbar';
import { Link } from '@heroui/link';
import { Button } from '@heroui/button';
import { useState } from 'react';
import { type MenuItem } from '../../libs/definitions';
import { useActiveSection } from '../../hooks/use-active-section';
import { closeMenu } from '../../libs/utils';

export default function NavbarUI() {
  const [isMenuOpen, setIsMenuOpen]: [
    boolean, (isMenuOpen: boolean) => void
  ] = useState(false);

  const menuItems: MenuItem[] = [
    { label: 'Home', href: '#home'},
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills'},
    { label: 'Certifications', href: '#certifications'},
    { label: 'Projects', href: '#projects' }
  ];

  const activeSection = useActiveSection(menuItems, {
    rootMargin: '-64px 0px -80% 0px',
    threshold: 0.1
  })

  const isActive = (href: string): boolean | undefined => {
    const sectionId = href.startsWith('#') ? href.slice(1) : href;
    return sectionId === activeSection;
  };

  return (
    <>
      <Navbar
        onMenuOpenChange={setIsMenuOpen}
        position='sticky'
        classNames={{
        item: 
          [
            "flex",
            "relative",
            "h-full",
            "items-center",
            "data-[active=true]:after:content-['']",
            "data-[active=true]:after:absolute",
            "data-[active=true]:after:bottom-0",
            "data-[active=true]:after:left-0",
            "data-[active=true]:after:right-0",
            "data-[active=true]:after:h-[2px]",
            "data-[active=true]:after:rounded-[2px]",
            "data-[active=true]:after:bg-primary",
          ],
        }}
      >
        <NavbarContent justify='start'>
          <NavbarMenuToggle className='block md:hidden' id='toggle-menu'
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          />
        </NavbarContent>

        <NavbarContent className='hidden sm:flex gap-4' justify='center'>
          {menuItems.map((item: MenuItem, i: number) => (
            <NavbarItem isActive={isActive(item.href)} key={i}>
              <Link
                color='foreground'
                href={item.href}
                size='lg'
              >
                {item.label}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>

        <NavbarContent justify='end'>
          <NavbarItem>
            <Button as={ Link } color='primary' variant='shadow' href='#contact'>
              Contact me
            </Button>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu className='dark'>
          {menuItems.map((item: MenuItem, i: number) => (
            <NavbarMenuItem key={i}>
              <Link
                className='w-full'
                color={
                  isActive(item.href) ? 'primary' : 'foreground'
                }
                href={item.href}
                size='lg'
                onClick={() => closeMenu()}
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </>
  )
}

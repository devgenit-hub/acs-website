'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { mainLogo } from '@/assets';
import Image from 'next/image';

// MUI imports
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Slide from '@mui/material/Slide';
import useScrollTrigger from '@mui/material/useScrollTrigger';

interface Links {
  text: string;
  link: string;
}

const links: Links[] = [
  { text: 'Home Page', link: '/' },
  { text: 'Call For Abstract', link: '/call-for-abstract' },
  { text: 'Important Dates', link: '/important-dates' },
  { text: 'Registration', link: '/registration' },
  { text: 'Abstract Submission', link: '/abstract-submission' },
  { text: 'Video Competition', link: '/video-competition' },
  { text: 'About Us', link: '/about-us' },
];

const muiTheme = createTheme({
  palette: {
    primary: {
      main: '#004b87', // deep-blue
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#e6e6e6', // soft-gray
      contrastText: '#333333',
    },
    text: {
      primary: '#ffffff',
      secondary: '#333333',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'capitalize',
          fontWeight: 500,
          '&:hover': {
            backgroundColor: 'transparent',
          },
        },
      },
    },
  },
});

interface HideOnScrollProps {
  children: React.ReactElement;
}

function HideOnScroll({ children }: HideOnScrollProps) {
  const trigger = useScrollTrigger({
    threshold: 100,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const isActiveRoute = (linkPath: string) => {
    if (!pathname) return false;
    if (linkPath === '/') return pathname === '/';
    return pathname.startsWith(linkPath);
  };

  const NavbarContent = () => (
    <div className="container mx-auto px-4 md:px-6 lg:px-8">
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          py: { xs: 1.5, md: 2 },
        }}
      >
        {/* Logo */}
        <Link
          href="https://acsduyouthsummit2025.org/"
          style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}
        >
          <Image src={mainLogo} width={50} height={50} alt="Main Logo" priority />
        </Link>

        {/* Desktop Links */}
        <Box sx={{ display: { xs: 'none', lg: 'flex' }, gap: 2, alignItems: 'center' }}>
          {links.map((link, idx) => {
            const isActive = isActiveRoute(link.link);
            return (
              <Button
                key={idx}
                component={Link}
                href={link.link}
                sx={{
                  px: 2,
                  py: 1,
                  color: isActive ? '#ffcc00' : '#ffffff',
                  fontWeight: isActive ? 600 : 500,
                  fontSize: isActive ? '0.95rem' : '0.875rem',
                  position: 'relative',
                  '&:hover': {
                    color: '#ffcc00',
                    opacity: 0.9,
                  },
                  transition: 'all 0.3s ease',
                  '&::after': isActive
                    ? {
                        content: '""',
                        position: 'absolute',
                        bottom: 0,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '80%',
                        height: '2px',
                        backgroundColor: '#ffcc00',
                        borderRadius: '2px',
                      }
                    : {},
                }}
              >
                {link.text}
              </Button>
            );
          })}
        </Box>

        {/* Hamburger Icon */}
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerToggle}
          sx={{
            display: { lg: 'none' },
            color: '#ffffff',
          }}
        >
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </Box>
    </div>
  );

  // Mobile drawer content
  const drawer = (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        backgroundColor: '#ffffff',
      }}
      role="presentation"
    >
      <List sx={{ pt: 2 }}>
        {links.map((link, idx) => {
          const isActive = isActiveRoute(link.link);
          return (
            <ListItem key={idx} disablePadding>
              <ListItemButton
                component={Link}
                href={link.link}
                onClick={handleDrawerToggle}
                sx={{
                  py: 2,
                  px: 3,
                  borderLeft: isActive ? '4px solid #ffcc00' : '4px solid transparent',
                  backgroundColor: isActive ? '#ffcc002a' : 'transparent',
                }}
              >
                <ListItemText
                  primary={link.text}
                  primaryTypographyProps={{
                    fontWeight: isActive ? 600 : 500,
                    fontSize: isActive ? '0.95rem' : '0.875rem',
                    color: isActive ? '#004b87' : '#333333',
                  }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

  return (
    <ThemeProvider theme={muiTheme}>
      <Box sx={{ width: '100%', overflow: 'hidden' }}>
        {/* Static Navbar - Hidden on scroll */}
        <HideOnScroll>
          <AppBar
            position="static"
            sx={{
              backgroundColor: '#004b87',
              boxShadow: 3,
              width: '100%',
            }}
          >
            <NavbarContent />
          </AppBar>
        </HideOnScroll>

        {/* Fixed Navbar - Appears on scroll */}
        <Slide direction="down" in={scrolled} mountOnEnter unmountOnExit>
          <AppBar
            position="fixed"
            sx={{
              backgroundColor: '#004b87',
              boxShadow: 4,
              zIndex: 1201,
              width: '100%',
              left: 0,
              right: 0,
            }}
          >
            <NavbarContent />
          </AppBar>
        </Slide>

        {/* Mobile Drawer */}
        <Drawer
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', lg: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: '280px',
              maxWidth: '80vw',
              top: scrolled ? '80px' : '70px',
              height: scrolled ? 'calc(100vh - 80px)' : 'calc(100vh - 70px)',
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </ThemeProvider>
  );
}

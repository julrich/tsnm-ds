import * as React from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  Button,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, AtSignIcon } from '@chakra-ui/icons';

import { Button as KDSButton } from '~/button/src/Button';

const Links = [
  {
    name: 'Music',
    url: '/music',
  },
  {
    name: 'Coding',
    url: '/coding',
  },
  {
    name: "How it's made",
    url: '/how',
  },
];

const NavLink = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={href}
  >
    {children}
  </Link>
);

/**
  The Header component is used to display global navigation
*/
export const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        bg={useColorModeValue(
          'var(--color-primary-darker-3)',
          'var(--color-primary-darker-3)'
        )}
        px={4}
      >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>
              <img
                src="https://i1.sndcdn.com/avatars-000003159261-cat82d-t200x200.jpg"
                alt="tsnm Logo"
                title="tsnm Logo"
                width="50"
                height="50"
              />
            </Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              {Links.map((link) => (
                <NavLink href={link.url} key={link.name}>
                  {link.name}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <KDSButton
              iconBefore={true}
              icon={{ icon: 'twitter', role: 'icon' }}
              variant="outline"
              iconAnmiation={true}
              fillAnimation={true}
              label="Follow"
              size="small"
              newTab={true}
              href="https://twitter.com/intent/follow?screen_name=tsnmp"
            />

            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}
              >
                <Avatar
                  size={'sm'}
                  src={
                    'https://i.ibb.co/f9NKhg7/rsz-jonas-ulrich-1000px-breite.jpg'
                  }
                />
              </MenuButton>
              <MenuList
                bg={useColorModeValue(
                  'var(--color-primary-darker-3)',
                  'var(--color-primary-darker-3)'
                )}
                border={'var(--color-primary-darker-3)'}
              >
                <MenuItem>
                  <a target="_blank" href="https://github.com/julrich">
                    Github
                  </a>
                </MenuItem>
                <MenuItem>
                  <a target="_blank" href="https://twitter.com/tsnmp">
                    Twitter
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/jonas-ulrich-b0a7b0222/"
                  >
                    LinkedIn
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    target="_blank"
                    href="https://www.xing.com/profile/Jonas_Ulrich3/cv"
                  >
                    Xing
                  </a>
                </MenuItem>
                <MenuDivider />
                <MenuItem>
                  <a target="_blank" href="https://soundcloud.com/tsnm">
                    SoundCloud
                  </a>
                </MenuItem>
                <MenuItem>
                  <a target="_blank" href="https://www.mixcloud.com/tsnm">
                    Mixcloud
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    target="_blank"
                    href="https://www.discogs.com/user/tsnm/collection"
                  >
                    Discogs
                  </a>
                </MenuItem>
                <MenuItem>
                  <a target="_blank" href="https://www.last.fm/user/tsusic/">
                    Last.fm
                  </a>
                </MenuItem>
                <MenuItem>
                  <a target="_blank" href="https://bandcamp.com/tsnm">
                    Bandcamp
                  </a>
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink href={link.url} key={link.name}>
                  {link.name}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

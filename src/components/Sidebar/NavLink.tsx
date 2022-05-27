import { ElementType } from 'react'
import Link from 'next/link'
import { Icon, Link as ChakraLink, Text } from '@chakra-ui/react'

type NavLinkProps = {
  icon: ElementType
  title: string
  href?: string
}

export function NavLink({ title, icon, href = ""}: NavLinkProps) {
  return (
    <Link href={href} passHref>
      <ChakraLink display="flex" alignItems="center">
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {title}
        </Text>
      </ChakraLink>
    </Link>
  )
}

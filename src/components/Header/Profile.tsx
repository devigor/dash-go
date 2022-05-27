import { Box, Flex, Text, Avatar } from '@chakra-ui/react'

type ProfileProps = {
  showProfileData?: boolean
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Igor Oliveira</Text>
          <Text color="gray.300" fontSize="small">
            oigor.js@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Igor Oliveira"
        src="https://github.com/devigor.png"
      />
    </Flex>
  )
}

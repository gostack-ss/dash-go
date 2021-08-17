import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean
}
export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData &&
        <Box mr="4">
          <Text>Eu mesmo</Text>
          <Text gray="gray300" fontSize="small">Eumesmo@gmail.com</Text>
        </Box>
      }
      <Avatar size="md" name="eu Mesmo" />
    </Flex>
  )
}
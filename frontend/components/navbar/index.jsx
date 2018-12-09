import Link from 'next/link'
import { Flex, Heading, Button, Text } from '@rebass/emotion'

export default () => (
  <Flex as='nav' p={[3, 4]}>
    <Flex width={1 / 3} alignItems='center'>
      <Link href='/'>
        <a style={{ textDecoration: 'none', color: 'black' }}>
          <Heading fontFamily='inter'>knife</Heading>
        </a>
      </Link>
    </Flex>
    <Flex width={2 / 3} justifyContent='flex-end'>
      <a>
        <Button bg='white' color='black' border='3px solid black'>
          <Text fontFamily='inter'>Sign In</Text>
        </Button>
      </a>
    </Flex>
  </Flex>
)

import Link from 'next/link'
import { Flex, Heading, Button } from '@rebass/emotion'

export default () => (
  <Flex as='nav' p={3}>
    <Flex width={1 / 3} alignItems='center'>
      <Link href='/'>
        <a style={{ textDecoration: 'none', color: 'black' }}>
          <Heading fontFamily='mono'>knife</Heading>
        </a>
      </Link>
    </Flex>
    <Flex width={2 / 3} justifyContent='flex-end'>
      <Link href='/create'>
        <a>
          <Button bg='MediumSpringGreen' mx={3} color='black' border='3px solid black'>
            Create Your Event
          </Button>
        </a>
      </Link>
      <a>
        <Button bg='magenta' color='black' border='3px solid black'>
          Sign In
        </Button>
      </a>
    </Flex>
  </Flex>
)

/* @jsx jsx */
import { Text, Heading, Card, Flex, Button, Box, Image } from '@rebass/emotion'
import { jsx } from '@emotion/core'

const HomePage = () => (
  <Box as='main' px={4} pb={4}>
    <Flex flexDirection={['column', null, 'row']}>
      <Box width={[1, null, 1 / 2]} mx={[null, null, 2, 5]}>
        <Heading fontFamily='sans' fontSize={[5]} my={4}>
          Manage your jam with <Text fontSize={8}>Knife.</Text>
        </Heading>
        <Text fontSize={3} fontFamily='serif'>
          Knife is an open-source platform that makes it easy to start and scale a game jam,
          hackathon, or other creator competition.
        </Text>
      </Box>
      <Flex width={[1, null, 1 / 2]} justifyContent='center' alignItems='center'>
        <Card
          boxShadow={[null, null, '0 2px 16px rgba(0, 0, 0, 0.25)']}
          m={[null, null, 4]}
          p={[null, null, 4]}
          borderRadius={5}
          width={[null, null, 400]}
        >
          <Text fontFamily='serif' mt={[4, 4, 0]}>
            Sign up for our newsletter to stay updated with development:
          </Text>
          <Flex flexDirection={['column']} justifyContent='center' mt={3}>
            {/* <Input type='email' placeholder='awesome.name@your.email' /> */}
            <Card
              as='input'
              type='email'
              placeholder='awesome.name@your.email'
              border='3px solid black'
              borderRadius={5}
              mb={2}
              fontSize={14}
              p={2}
              css={{
                fontFamily: 'Inter UI, sans-serif',
                fontWeight: 500,
                textAlign: 'center'
              }}
            />
            <Button bg='mediumspringgreen' color='black' border='3px solid black'>
              Sign Up
            </Button>
          </Flex>
        </Card>
      </Flex>
    </Flex>
    <Image mt={4} src='../static/screenshots.png' />
  </Box>
)

export default HomePage

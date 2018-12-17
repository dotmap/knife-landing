/* @jsx jsx */
import posed from 'react-pose'
import { Formik } from 'formik'
import { Component } from 'react'
import { lighten } from 'polished'
import { jsx } from '@emotion/core'
import { object, string } from 'yup'
import slugify from '@sindresorhus/slugify'
import { string as str, func } from 'prop-types'
import { Heading, Card, Flex, Text, Button, Box } from '@rebass/emotion'

import theme from '../../theme'

const ValidationSchema = object().shape({
  title: string()
    .trim()
    .min(2, 'Your event name needs to be a bit longer.')
    .required('We need a name for your event!'),
  slug: string()
    .trim()
    .transform(val => slugify(val))
    .min(2, 'Your url handle needs to be a bit longer.')
})

const Form = posed.form({
  enter: { opacity: 1, delay: 200, staggerChildren: 400 },
  exit: { opacity: 0 }
})

const FormSection = posed(Box)({
  enter: { opacity: 1 },
  exit: { opacity: 0 }
})

const ErrorMessage = posed(Text)({
  error: { opacity: 1, height: 'auto', y: 0 },
  ok: { opacity: 0, height: 0, y: -20 }
})

class Creator extends Component {
  state = {
    slugModified: false
  }

  trimTitle (event, setFieldValue) {
    const { value } = event.target

    setFieldValue('title', value.trim())
  }

  formatSlug (event, setFieldValue) {
    const { slugModified } = this.state
    const { value } = event.target

    if (!slugModified) this.setState({ slugModified: true })

    const newSlug = value
      .toLowerCase()
      .split(' ')
      .map(val =>
        val
          .split('-')
          .map(v => slugify(v))
          .join('-')
      )
      .join('-')

    setFieldValue('slug', newSlug)
  }

  trimSlug (event, setFieldValue) {
    const slug = event.target.value
    const newSlug = slug
      .split('-')
      .filter(c => c !== '')
      .join('-')

    setFieldValue('slug', slugify(newSlug))
  }

  render () {
    const { example, onSubmit } = this.props
    const { slugModified } = this.state

    return (
      <Formik
        initialValues={{ title: '', slug: '' }}
        validationSchema={ValidationSchema}
        onSubmit={onSubmit}
      >
        {({
          values,
          touched,
          errors,
          dirty,
          isSubmitting,
          handleChange,
          handleSubmit,
          handleReset,
          setFieldValue
        }) => (
          <Form onSubmit={handleSubmit} initialPose='exit' pose='enter'>
            <FormSection mb={4}>
              <Heading as='label' fontFamily='sans' htmlFor='title'>
                Event Name
              </Heading>
              <Card
                as='input'
                id='title'
                placeholder={example}
                type='text'
                value={values.title}
                onChange={handleChange}
                onBlur={e => this.trimTitle(e, setFieldValue)}
                width={1}
                mt={2}
                p={2}
                border={'three'}
                borderColor={errors.title && touched.title ? 'pink' : 'black'}
                borderRadius={4}
                fontSize={16}
                css={{
                  textAlign: 'center',
                  fontFamily: 'Inter UI, sans-serif'
                }}
              />
              {errors.title && touched.title && (
                <ErrorMessage
                  initialPose='ok'
                  pose='error'
                  fontFamily='sans'
                  color='pink'
                  textAlign='right'
                  mt={2}
                >
                  {errors.title}
                </ErrorMessage>
              )}
            </FormSection>
            <FormSection mb={4}>
              <Heading as='label' fontFamily='sans' htmlFor='slug'>
                Event URL
              </Heading>
              <Flex>
                <Card
                  width={1 / 6}
                  p={2}
                  mt={2}
                  border='three'
                  borderColor={errors.slug && touched.slug ? 'pink' : 'black'}
                  borderRadius='4px 0 0 4px'
                  css={{
                    textAlign: 'center'
                  }}
                  bg={errors.slug && touched.slug ? 'pink' : 'black'}
                >
                  <Text fontFamily='serif' color='white'>
                    https://
                  </Text>
                </Card>
                <Card
                  as='input'
                  id='slug'
                  placeholder={slugify(example)}
                  type='text'
                  value={touched.title && !slugModified ? slugify(values.title) : values.slug}
                  onFocus={e => {
                    ;(!slugModified || e.target.value === '') &&
                      setFieldValue('slug', slugify(values.title))
                  }}
                  onChange={e => this.formatSlug(e, setFieldValue)}
                  onBlur={e => this.trimSlug(e, setFieldValue)}
                  width={1 / 2}
                  fontSize={16}
                  mt={2}
                  p={2}
                  border={'three'}
                  borderColor={errors.slug && touched.slug ? 'pink' : 'black'}
                  color={errors.slug && touched.slug ? 'pink' : 'black'}
                  css={{
                    textAlign: 'center',
                    borderRight: 0,
                    borderLeft: 0,
                    fontFamily: 'Inter UI, sans-serif'
                  }}
                />
                <Card
                  width={1 / 3}
                  p={2}
                  mt={2}
                  border='three'
                  borderColor={errors.slug && touched.slug ? 'pink' : 'black'}
                  borderRadius='0 4px 4px 0'
                  css={{
                    textAlign: 'center'
                  }}
                  bg={errors.slug && touched.slug ? 'pink' : 'black'}
                >
                  <Text fontFamily='serif' color='white'>
                    .knife.sh
                  </Text>
                </Card>
              </Flex>
              {errors.slug && touched.slug && (
                <ErrorMessage
                  initialPose='ok'
                  pose='error'
                  fontFamily='sans'
                  color='pink'
                  textAlign='right'
                  mt={2}
                >
                  {errors.slug}
                </ErrorMessage>
              )}
            </FormSection>
            <FormSection>
              <Flex width={1} justifyContent='flex-end' alignItems='flex-end'>
                <Button
                  onClick={handleReset}
                  disabled={!dirty || isSubmitting}
                  bg='white'
                  mx={1}
                  border='three'
                  color='black'
                  css={{
                    ':disabled': {
                      color: lighten(0.5, theme.colors.black),
                      borderColor: lighten(0.5, theme.colors.black)
                    }
                  }}
                >
                  Reset
                </Button>
                <Button
                  type='submit'
                  disabled={!dirty || isSubmitting}
                  bg='green'
                  border='three'
                  color='black'
                  css={{
                    ':disabled': {
                      backgroundColor: lighten(0.4, theme.colors.green),
                      color: lighten(0.5, theme.colors.black),
                      borderColor: lighten(0.5, theme.colors.black)
                    }
                  }}
                >
                  Submit
                </Button>
              </Flex>
            </FormSection>
          </Form>
        )}
      </Formik>
    )
  }
}

Creator.propTypes = {
  example: str.isRequired,
  onSubmit: func.isRequired
}

export default Creator

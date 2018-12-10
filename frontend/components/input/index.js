import styled from '@emotion/styled'

const Input = styled.input`
  border: 3px solid black;
  border-radius: 5px;
  font-family: 'Inter UI', sans-serif;
  font-weight: 500;
  padding: 5px;
  text-align: center;
  font-size: 14px;
  margin-bottom: 8px;
  height: 2em;

  @media screen and (min-width: 425px) {
    width: 100%;
    height: auto;
    margin-bottom: 0;
  }
`

export default Input

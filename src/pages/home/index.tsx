import tw, {css} from 'twin.macro'

const testStyles = css`
  ${tw`tw-font-bold`}
`

const Home = () => {
  return (
    <>
      <div css={testStyles}>home</div>
    </>
  )
}

export default Home

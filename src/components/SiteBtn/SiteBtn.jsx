import { Button } from "@chakra-ui/react"
import useSiteBtnProps from "./useSiteBtnProps"

const SiteBtn = () => {
  const { onClick } = useSiteBtnProps()
  return (
    <Button as={"button"} type="submit" size={"md"} colorScheme='red' onClick={onClick}>Log Out</Button>
  )
}

export default SiteBtn

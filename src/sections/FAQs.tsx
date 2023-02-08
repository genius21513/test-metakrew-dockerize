
import React, {
  useEffect,
  // useRef,
  useState } from "react"
import { Box, Text } from "theme-ui"
import { useMetaContext } from "../context"
// import gsap, { Power3 } from "gsap"

interface Props {
  FAQ: FAQ
  handleClick: any
  reveal: boolean
}

interface FAQ {
  question: string
  content: string
}

const Question: React.FC<Props> = ({ FAQ, handleClick, reveal}) => {

  /*
  const ref = useRef(null);
  useEffect(() => {
    gsap.to(ref.current, 1.5, {
      opacity: 1,
      ease: Power3.easeOut,
    })
  }, [])
  */
 

  return (
    <>
      <Box onClick={() => { handleClick(FAQ) }} sx={{ mt: ["3rem", "0"], padding: "2rem", width: ["100%", "100%", "30%"], cursor: "pointer", backgroundColor: "#232324", borderRadius: "10px" }}>
        {!reveal ? <Text sx={{ fontSize: "20px", color: "white", fontStyle: "bold", mb: "2rem", fontFamily: "poppins-extralight, poppins, sans-serif", fontWeight: 600, justifyContent: "center" }}>{FAQ.question}</Text> : <Text sx={{ fontSize: "18px", color: "white", fontStyle: "bold", mb: "2rem", fontFamily: "poppins-extralight, poppins, sans-serif", justifyContent: "center" }}>{FAQ.content}</Text>}
      </Box>
    </>
  )
}



export const FAQs: React.FC = () => {
  const [revealFAQ, setRevealFAQ] = useState<FAQ | undefined>(undefined)

  const { MetaState, setState } = useMetaContext()


  const [faqs, setFAQs] = useState<FAQ[]>(MetaState.content.faqs)

  const sets = [
    { set: 0, faqs: faqs.slice(0, 3)},
    { set: 1, faqs: faqs.slice(3, 6)},
    { set: 2, faqs: faqs.slice(6, faqs.length)}
  ]

  const [selection, setSelection] = useState(sets[0])

  useEffect(() => {
    setFAQs(MetaState.content.faqs)
  }, [setState, MetaState.content.faqs])

  const handleClick = (FAQ: FAQ) => {
    if (FAQ === revealFAQ) {
      setRevealFAQ(undefined)
    } else {
      setRevealFAQ(FAQ)
    }
  }

  const handleLeft = () => {
    setSelection(sets[0])
  }

  const handleMiddle = () => {
    setSelection(sets[1])
  }

  const handleRight = () => {
    setSelection(sets[2])
  }


  return (
    <>

      <Box id="faq" variant="layout.section" sx={{ display: ["none", "none", "none", "flex"], flexDirection: "column" }}>
        <Text variant="layout.section.faqs.title">FAQ's</Text>
        <Box variant="layout.section.faqs.container">
          {selection.faqs.map((FAQ: FAQ, i) => <Question key={`faq-${i}`} reveal={revealFAQ !== undefined && revealFAQ === FAQ} handleClick={handleClick} FAQ={FAQ} />)}
        </Box>

        <Box variant="layout.section.faqs.paginationContainer">
          <Box variant="layout.section.faqs.paginationContainer.pageButton" onClick={handleLeft} sx={{
            backgroundColor: selection.set === 0 ? "white" : "transparent"
            }} />
          <Box variant="layout.section.faqs.paginationContainer.pageButton" onClick={handleMiddle} sx={{
            backgroundColor: selection.set === 1 ? "white" : "transparent", mx: "1rem"
            }} />
          <Box variant="layout.section.faqs.paginationContainer.pageButton" onClick={handleRight} sx={{
            backgroundColor: selection.set === 2 ? "white" : "transparent"
            }}/>
        </Box>

      </Box>

    </>
  )
}

export default FAQs
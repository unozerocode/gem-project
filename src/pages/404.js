import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Video from "../components/video"

const videoSrcURL = "https://www.youtube.com/embed/zV2J1esiQM8";
const videoTitle="Official Music Video on YouTube";
const NotFoundPage = () => {

  return(
  <Layout>
    <SEO title="404: Not found" />
    <Container component="section" maxWidth={false} className="section-80 section-md-top-70 bg-white">
      <Container component="div" maxWidth="lg">
        <Box p={2} display="block" justifyContent="center">
          <h1>NOT FOUND</h1>
          <p>You just hit a page that doesn't exist... the sadness.</p>
          <p>May I suggest a video instead?</p>
          <Video videoSrcURL={videoSrcURL} videoTitle={videoTitle} /> 
              
        </Box>
      </Container>
    </Container>

  </Layout>
  )
}
export default NotFoundPage
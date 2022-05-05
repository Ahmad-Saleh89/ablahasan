import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import MediaHero from "../components/media/MediaHero"
import YouTubeChannel from "../components/media/YouTubeChannel"
import Articles from "../components/media/Articles"
import Podcasts from "../components/media/Podcasts"
import Playlist from "../components/media/Playlist"


const MediaPage = () => {
  return (
    <Layout>
      <Seo title="Media" />
      <MediaHero />
      <Playlist />
      <YouTubeChannel />
      <Articles />
      <Podcasts />
    </Layout>
  )
}

export default MediaPage

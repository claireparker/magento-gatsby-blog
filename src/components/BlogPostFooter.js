import React from 'react'

class Bio extends React.Component {
  render() {
    let githubUrl = `https://github.com/claireparker/magento-gatsby-blog/blob/master/src/pages${
      this.props.postUrl
    }index.md`

    return (
      <div>
        <p>
          Comments? Typos? <a href={githubUrl}>Edit this page on Github</a>
        </p>
      </div>
    )
  }
}

export default Bio

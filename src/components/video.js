import React from "react";
import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/lab/Skeleton';



const Video = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      hide:true,
    }
    this.handleLoad = this.handleLoad.bind(this);
    // this.handleHide = this.handleHide.bind(this);
  }

  handleLoad(){
   this.setState({loading:false,hide:false});
  };
  // handleHide(){
  //   this.setState({hide:false});
  //  };
  render() {
    const props = this.props;
    const { loading,hide } = this.state;
    const CreateSkeleton = () => {
      return(
      <Box pt={0.5}>
        <Skeleton variant="text" />
        <Skeleton variant="circle" width={40} height={40} />
        <Skeleton variant="rect" height={100} />
      </Box>
      )
    }

    return (
      <div>
      
          
        { loading ? (
           <CreateSkeleton/>
          ) : null }
        <div className="video" hidden={hide} >
          <iframe
            src={props.videoSrcURL}
            title={props.videoTitle}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            frameBorder="0"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            allowFullScreen
            onLoad={this.handleLoad}
          />
         </div>
      </div>
    )
  }
}
export default Video
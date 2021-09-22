import { useRef, useState } from "react";
import classes from "./FileUpload.module.css"

const FileUpload = () => {
  const [isUpload, setIsUpload] = useState(true);
  const [isDownload, setIsDownload] = useState(false);

  const uploadText = useRef(null);
  const uploadForm = useRef(null);
  const uploadBtn = useRef(null);
  const downloadBtn = useRef(null);
  const downloadLink = useRef(null);

  const uploadBtnHandler = () => {
    setIsUpload(true);
    setIsDownload(false);
  }

  const downloadBtnHandler = () => {
    setIsDownload(true);
    setIsUpload(false);
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes['title-text']}>
        <div className={`${classes.title} ${classes.upload}`} ref={uploadText}>
          Upload Form</div>
        <div className={`${classes.title} ${classes.download}`}>
          Download Form</div>
      </div>
      <div className={classes['form-container']}>
        <div className={classes['slide-controls']}>
          <input type="radio" name="slide" className="uploadId" checked/>
          <input type ="radio" name="slide" className="downloadId"/>
          <label for="upload" className ={`${classes.slide} ${classes.upload}`} ref={uploadBtn} onClick={uploadBtnHandler}>Upload</label>
          <label for="download" className ={`${classes.slide} ${classes.download}`}  ref={downloadBtn} onClick={downloadBtnHandler}>Download</label>
          <div className={classes['slider-tab']}>
          </div>
        </div>
        <div className ={classes['form-inner']}>
          {isUpload &&
          <form action="#" className ={classes.upload} ref={uploadForm}>
          <div className ={classes.field}>
          <input type ="file" placeholder="Choose file" style={{display: "flex", justifyContent: "center"}} required/>
          </div>
          {/* <div className ={classes.field}>
          <input type ="password" placeholder="Password" required/>
          </div> */}
          {/* <div className ={classes['pass-link']}>
          <a href="#download">Forgot password?</a></div> */}
          <div className ={`${classes.field} ${classes.btn}`}>
          <div className ={classes['btn-layer']}>
          </div>
          <input type ="submit" value="Upload"/>
          </div>
          <div className ={classes['download-link']}>
          Not a member?<a href="#download" ref={downloadLink} onClick={downloadBtnHandler} >Download now</a></div>
          </form>}
          {isDownload && <form action="#" className ={classes.download}>
          <div className ={classes.field}>
          <input type ="text" placeholder="Key" required/>
          </div>
          {/* <div className ={classes.field}>
          <input type ="password" placeholder="Password" required/>
          </div>
          <div className ={classes.field}>
          <input type ="password" placeholder="Confirm password" required/>
          </div> */}
          <div className ={`${classes.field} ${classes.btn}`}>
          <div className ={classes['btn-layer']}>
          </div>
          <input type ="submit" value="Download"/>
          </div>
          </form>}

        </div>
      </div>
    </div>
  );
};

export default FileUpload;

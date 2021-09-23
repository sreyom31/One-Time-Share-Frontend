import {Fragment, useState } from "react";
import {useParams,useHistory, Link} from 'react-router-dom'
import classes from "./FileUpload.module.css"
import axios from 'axios'
import LoadingSpinner from "./LoadingSpinner";
import DisplayModal from "./DisplayModal";

const FileUpload = () => {
  const {id} = useParams();
  const history = useHistory();
  const [isUpload, setIsUpload] = useState(id);
  const [filename, setFilename] = useState("Choose File");
  const [file, setFile] = useState(null);
  const [isLoading,setIsLoading] = useState(null);
  const [modal,setModal] = useState(null);
  const [isKey,setKey] = useState('')
 
  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
  };

  const uploadBtnHandler = () => {
    setIsUpload("u");
    history.push('/load/u') 

  }
  const keyChangeHandler=(e)=>{
  setKey(e.target.value)
  }
  const downloadBtnHandler = () => {
    setIsUpload("d");
    history.push('/load/d') 
  }
  const fileChangeHandler=(e)=>{
    if(e.target.files[0].size < 1024*1024*10) {
      setFile(e.target.files[0]);
      setFilename(e.target.files[0].name);
    }
    else {
      window.alert('File Size Exceeded!!!')
    }
  }
  const modalChangeHandler = () => {
    setModal(false);
  };

  const  uploadChangehandler=async(e)=>{
    e.preventDefault();
    const data=new FormData();
    data.append('file',file);
    try{
      setIsLoading(true)
      const res=await axios.post("https://networkplex.herokuapp.com/upload", data,config);
      setKey(res.data.key);
      console.log(res.data)
      setModal(true)
    }catch(error){
      window.alert(error);
    }
    setFilename("Choose File")
    setFile(null)
    setIsLoading(false)
  }

  const  downloadChangehandler=async(e)=>{
    e.preventDefault();
    setIsLoading(true)
    try{
      const response=await axios({
        url: "https://networkplex.herokuapp.com/download/"+isKey,
        method: 'GET',
        responseType: 'blob'
      })
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', isKey);
      document.body.appendChild(link);
      link.click();
    }catch(error){
      window.alert("File Not Found !");
    }
    setIsLoading(false)
    setKey('')
  }

  return (
   <Fragment>
     {isLoading && <LoadingSpinner/>}
     {modal&& <DisplayModal onClose={modalChangeHandler} title={"File Key :-> "} msg={isKey}/>}
    <div className={classes.wrapper}>
      <div className={classes['title-text']}>
        <div className={`${classes.title} ${classes.upload}`}>
          Upload Form</div>
        <div className={`${classes.title} ${classes.download}`}>
          Download Form</div>
      </div>
      <div className={classes['form-container']}>
        <div className={classes['slide-controls']}>
          <input type="radio" name="slide"  checked={isUpload==="u"} readOnly/>
          <input type ="radio" name="slide" checked={isUpload==="d"} readOnly/>
          <label htmlFor="upload" className ={isUpload==="d"?`${classes.slide} ${classes.upload}`:`${classes.slide} ${classes.download}`} onClick={uploadBtnHandler}>Upload</label>
          <label htmlFor="download" className ={isUpload==="u"?`${classes.slide} ${classes.upload}`:`${classes.slide} ${classes.download}`}  onClick={downloadBtnHandler}>Download</label>
          <div className={classes['slider-tab']}>
          </div>
        </div>
        <div className ={classes['form-inner']}>
          {isUpload==="u" &&
          <form className ={classes.upload}>
          <div className ={classes.field}>
          <input type ="file" id="customFile" className={classes.customFileInput} onChange={fileChangeHandler} required/>
          <label htmlFor="customFile">{filename}</label>
          </div>
          <div className ={`${classes.field} ${classes.btn}`}>
          <div className ={classes['btn-layer']}>
          </div>
          <input type ="submit" value="Submit" onClick={uploadChangehandler} disabled={file?false:true}/>
          </div>
          <div className ={classes['download-link']}>
          <Link to="/load/d" onClick={downloadBtnHandler}>Download now</Link></div>
          </form>}
          {isUpload==="d" && <form className ={classes.download}>
          <div className ={classes.field}>
          <input type ="text" placeholder="Key" className={classes.customKeyInput} value={isKey} onChange={keyChangeHandler}/>
          </div>
          <div className ={`${classes.field} ${classes.btn}`}>
          <div className ={classes['btn-layer']}>
          </div>
          <input type ="submit" value="Download" onClick={downloadChangehandler} disabled={isKey?false:true}/>
          </div>
          </form>}

        </div>
      </div>
    </div>
   </Fragment>
  );
};

export default FileUpload;

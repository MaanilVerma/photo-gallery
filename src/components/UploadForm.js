import React, {useState} from 'react';
import ProgressBar from './ProgressBar';

const UploadForm = () => {

    const[file,setFile] = useState(null);                        //Set Current Local Storage of File
    const[error,setError] = useState(null);                     //Set Current Local Storage of Error
    
    const allowedFileType = ["image/png", "image/jpeg"];        //Set array of files which you want for input


    const changeHandler = (event) => {
        let selectedFile = event.target.files[0];              //To grab the first file selected by user

        //Check if selected file and type of file matches the input then Update the value of the file, else error.

        if(selectedFile && allowedFileType.includes(selectedFile.type)){
            setFile(selectedFile);
            setError(' ');
        }
        else{
            setFile(null);
            setError('Please Upload the the required type of file (.png / .jpeg)');
        }
        
        
    }
    return(
        <form>
            <label>
                <input type = "file" onChange = { changeHandler } />
                <span>+</span>
            </label>

            <div className = "output"> 
                { error && <div className = "error"> {error} </div> }          {/* Conditional Rendering */}
                { file && <div>{ file.name }</div>}
                {file && <ProgressBar file = {file} setFile = {setFile} />}
            </div>
        </form>
        
    );
}

export default UploadForm;
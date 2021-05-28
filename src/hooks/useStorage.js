import { useState, useEffect } from 'react';
import { projectStorage, projectFirestore, timestamp } from '../firebase/FirebaseConfig';

const useStorage = (file) => {                      // file parameter comes from state defined in upload form component

    const [ progress, setProgress ] = useState(0);      // Initial state of Progress of Image Upload
    const [error, setError ] = useState(null);          // Initial state of Error during Upload 
    const [ url, setUrl ] = useState(null);             // Inital state of Image url and updates it once image fully uploaded. 

    // projectStorage function from firebase will be used to upload file from user to storage.

    useEffect(() => {
        const storageReference = projectStorage.ref(file.name);  // Creating Referene for uploaded file in Firebase
        const collectionReference = projectFirestore.collection('images'); //Creating Collection Name in firebase 

        storageReference.put(file).on('state_changed',(snap) =>{   // Takes the file and put it in the reference/location.
            let progressPercentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(progressPercentage);           // upload percentage is taken using snap method & progress is updated.
        },
        (err) =>{
            setError(err); // Function if error comes
        },
        async () => {                         // Since this asynchronous process we use asyn await to get the url of image.
            const url = await storageReference.getDownloadURL();
            const createdAt = timestamp();
            collectionReference.add({url, createdAt })
            setUrl(url);    

        });

    }, [file])

    return { progress, url, error}
}

export default useStorage; 


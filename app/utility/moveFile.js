export const moveFile = (FILE, UPLOAD_PATH) => {
    return new Promise((resolve, reject) => {
        FILE.mv(UPLOAD_PATH, error => {
            if(!error){
               return resolve();
            }else{
                return reject();
            }
        })
    })
}
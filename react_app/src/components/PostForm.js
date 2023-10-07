import React from "react";
import { Link } from "react-router-dom";
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import { CKEditor } from '@ckeditor/ckeditor5-react'
import words from "../words";

function uploadAdapter(loader) {
    return {
    upload: () => {
        return new Promise((resolve, reject) => {
        const body = new FormData();
        loader.file.then((file) => {
            body.append("file", file);
            console.log(file)
            // let headers = new Headers();
            // headers.append("Origin", "http://localhost:3000");
            fetch(`${words.api.admin.file.post}`, {
            method: "post",
            body: body
            // mode: "no-cors"
            })
            .then((res) => res.json())
            .then((res) => {
                resolve({
                default: `${words.api.admin.file.get(res.filename)}`
                });
            })
            .catch((err) => {
                reject(err);
            });
        });
        });
    }
    };
}

function uploadPlugin(editor) {
    editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
      return uploadAdapter(loader);
    };
}

const PostForm = ({
    inputs,
    setInputs,
    error,
    hiddenFileInput,
    handleTextChange,
    handleCoverChange,
    handleSubmit,
    handleClick,
    isEdit,
}) => {
    return (
        <div className="admin createNewPost">
        {error ? <p>{words.post.form.errorOccurred} + {error.message}</p> : null}
            {/* <FontAwesomeIcon icon="fa-solid fa-arrow-left" /> */}
            <div style={{marginBottom:"var(--space-s)"}}>
                <Link to={`/admin/blogmanage`} >{words.post.form.back}</Link>
            </div>
            <h2 style={{marginBottom:"var(--space-xl)"}}>{isEdit ? words.post.form.edit.title : words.post.form.create.title}</h2>
            <form onSubmit={handleSubmit} className="flex-row gap-xl">
                <div>
                    <div className="thumbnail"><img src={words.api.admin.file.get(inputs.cover)}/></div>
                    <button type="button" onClick={handleClick} style={{marginTop:"var(--space-s)"}}>
                        {words.post.form.uploadCover}
                        <input hidden accept="image/*" multiple type="file" ref={hiddenFileInput} onChange={handleCoverChange} />
                    </button>
                </div>
                <div style={{width:"676px"}}>
                    <div>
                        <label style={{display:"inline-block",width:"100px"}}>{words.post.form.title}</label>
                        <input type="text" name="title" value={inputs.title} onChange={handleTextChange} style={{width:"calc(100% - 100px)",marginBottom:"var(--space-s)"}}/>
                    </div>
                    <div>
                        <label style={{display:"inline-block",width:"100px"}}>{words.post.form.description}</label>
                        <input type="text" name="description" value={inputs.description} onChange={handleTextChange} style={{width:"calc(100% - 100px)",marginBottom:"var(--space-s)"}}/>
                    </div>
                <CKEditor
                    editor={ Editor }
                    name="content"
                    data={inputs.content}
                    onChange={(event,editor) => {
                        const data = editor.getData();
                        console.log({event,editor,data});
                        setInputs(values => ({...values, ["content"]: data}));
                    }}
                    config={{
                        extraPlugins: [uploadPlugin]
                      }}
                    
                />
                <button type="submit" className="primary" name="add" style={{marginTop:"var(--space-base)"}}>{words.post.form.save}</button>
                </div>
            </form>
    </div>
  );
}

export default PostForm 
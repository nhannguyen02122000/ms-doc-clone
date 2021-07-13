import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { convertFromRaw, convertToRaw, EditorState } from "draft-js";
import { db } from "../firebase";
import { useSession } from "next-auth/client";
import { useRouter } from "next/dist/client/router";
import Login from "./Login";
import { useDocumentOnce } from "react-firebase-hooks/firestore";

const Editor = dynamic(()=> import("react-draft-wysiwyg").then((module)=>module.Editor),{ssr:false})

const TextEditor = () => {
  const [session] = useSession();
  if (!session) return <Login/>
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const router = useRouter()
  const {id} = router.query;
  
  const [snapshot] = useDocumentOnce(db.collection('userDocs').doc(session.user.email).collection('docs').doc(id))

  useEffect(() => {
    if (snapshot?.data()?.editorState) {
      setEditorState(
        EditorState.createWithContent(
          convertFromRaw(snapshot?.data()?.editorState)
        )
      );
    }
  }, [snapshot]);

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);

    db.collection('userDocs').doc(session.user.email).collection('docs').doc(id).set({
      editorState: convertToRaw(editorState.getCurrentContent()),
    },{merge:true});
  };

  return(
    <div className="bg-[#F8F9FA] min-h-screen pb-16">
      <Editor
        editorState={editorState}
        onEditorStateChange={onEditorStateChange}
        toolbarClassName="flex sticky top-0 z-50 !justify-center mx-auto"
        editorClassName="mt-6 p-10 bg-white shadow-lg max-w-5xl mx-auto mb-12 border"
      />
    </div>
  )
}

export default TextEditor;
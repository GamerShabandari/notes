import axios from "axios"
import { useState, useRef, useEffect } from "react"
import { Editor } from "@tinymce/tinymce-react";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export function Home() {

    const editorRef = useRef(null);

    const [userId, setUserId] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [usersNotes, setUsersNotes] = useState([]);
    const [badLogin, setBadLogin] = useState(false);
    const [showDetails, setShowDetails] = useState(false);
    const [detailedNote, setDetailedNote] = useState({
        title: "",
        text: "",
        _id: ""
    });
    const [showEditForm, setShowEditForm] = useState(false);
    const [showCreateNoteContainer, setShowCreateNoteContainer] = useState(false);
    const [showCreateNoteText, setShowCreateNoteText] = useState(false);

    const [newNoteTitle, setNewNoteTitle] = useState("");

    const [showCreatedNoteMessage, setShowCreatedNoteMessage] = useState(false);
    const [showDeletedNoteMessage, setShowDeletedNoteMessage] = useState(false);
    const [showUpdatedNoteMessage, setShowUpdatedNoteMessage] = useState(false);


    useEffect(() => {

        if (userId) {
            fetchUsersNotes(userId);
        }

    }, [showCreatedNoteMessage, showDeletedNoteMessage, showUpdatedNoteMessage, userId])



    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    function login() {

        let user = {
            username: username,
            password: password
        }

        axios.post("http://localhost:3000/login", user, { headers: { "content-type": "application/json" } })
            .then(response => {

                if (response.data.status === "loggedIn") {

                    setUserId(response.data.userId);
                    setUsername("");
                    setPassword("");
                    fetchUsersNotes(response.data.userId);
                    setLoggedIn(true);
                    setBadLogin(false)
                    // localStorage.setItem("myUserId", JSON.stringify(response.data.userID));
                    // localStorage.setItem("subscribtionStatus", JSON.stringify(response.data.subscribed));
                    // localStorage.setItem("yourName", JSON.stringify(username.charAt(0).toUpperCase() + username.slice(1)));

                } else {
                    setBadLogin(true)
                }
            })
            .catch(error => {
                console.log(error);
                alert("fel inlogg, vänligen prova igen")
            })
    }

    function handleUsername(e) {
        setUsername(e.target.value)

    }

    function handlePassword(e) {
        setPassword(e.target.value)

    }

    function fetchUsersNotes(userId) {
        axios.get("http://localhost:3000/notes/" + userId)
            .then(response => {
                setUsersNotes([...response.data])
            })
    }

    function showNoteDetails(note) {

        let noteToView = {
            title: note.title,
            text: note.text,
            _id: note._id
        }
        setShowDetails(true);
        setShowEditForm(false)
        setDetailedNote(noteToView)
    }

    function editNote() {

        setShowEditForm(true);

    }

    function handleNewNoteTitle(e) {
        setNewNoteTitle(e.target.value)
    };


    function saveNewNote() {
        let newNoteToSave = {
            title: newNoteTitle,
            text: editorRef.current.getContent(),
            author: userId
        }

        axios.post("http://localhost:3000/notes", newNoteToSave, { headers: { "content-type": "application/json" } })
            .then(response => {
                setNewNoteTitle("");
                setShowCreateNoteContainer(false);
                setShowCreateNoteText(false)
                setShowCreatedNoteMessage(true);
                setTimeout(() => {
                    setShowCreatedNoteMessage(false)
                }, 2000)

            })
            .catch(error => {
                console.log(error);
                alert("error, vänligen prova igen")
            })
    }

    function deleteNote() {

        axios.delete("http://localhost:3000/notes/" + detailedNote._id)
            .then(response => {
                setDetailedNote({
                    title: "",
                    text: "",
                    _id: ""
                })
                setShowDetails(false);
                setShowDeletedNoteMessage(true);
                setTimeout(() => {
                    setShowDeletedNoteMessage(false)
                }, 2000)
            })
            .catch(error => {
                console.log(error);
                alert("error vid radering");
            })
    }

    function updateNote() {

        let updatedNoteToSave = {
            _id: detailedNote._id,
            title: detailedNote.title,
            text: editorRef.current.getContent(),
            author: userId
        }

        axios.post("http://localhost:3000/notes/update", updatedNoteToSave, { headers: { "content-type": "application/json" } })
            .then(response => {
                setShowDetails(false);
                setShowEditForm(false);
                setShowUpdatedNoteMessage(true);
                setTimeout(() => {
                    setShowUpdatedNoteMessage(false)
                }, 2000)
            })
            .catch(error => {
                console.log(error);
                alert("error, vänligen prova igen")
            })
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    let notesHtml = usersNotes.map((note, i) => {
        return (<li onClick={() => { showNoteDetails(note) }} className="notesListItem" key={i}>
            {note.title}
        </li>)
    })

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    return (<>

        {loggedIn && <>

            <main>

                <button className="createBtn" onClick={() => { setShowCreateNoteContainer(!showCreateNoteContainer); setShowDetails(false); setShowEditForm(false); setNewNoteTitle(""); }}>skapa nytt dokument</button>

                {showCreatedNoteMessage && <h2 className="warning">nytt dokument skapat</h2>}

                {showCreateNoteContainer && <div>

                    {!showCreateNoteText && <>
                        <input type="text" placeholder="titel" value={newNoteTitle} onChange={handleNewNoteTitle} />
                        <button className="saveBtn" disabled={!newNoteTitle} onClick={() => { setShowCreateNoteText(true) }}>spara titel</button>
                    </>}


                    {showCreateNoteText && <>
                        <Editor
                            apiKey='cuat27eyx1ye4b8zm5lz2rm8i81a069dxic2ltp910c93qoj'
                            onInit={(evt, editor) => editorRef.current = editor}
                            initialValue=""
                            init={{
                                height: 500,
                                menubar: false,
                                plugins: [
                                    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                                    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                                    'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                                ],
                                toolbar: 'undo redo | blocks | ' +
                                    'bold italic forecolor | alignleft aligncenter ' +
                                    'alignright alignjustify | bullist numlist outdent indent | ' +
                                    'removeformat | help',
                                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                            }}
                        />
                        <button className="saveBtn" onClick={saveNewNote}>spara dokument</button>
                    </>}

                </div>}


                <aside>
                    <h4>Dina dokument</h4>
                    <ul className="notesList">{notesHtml}</ul>
                </aside>


                {showDeletedNoteMessage && <h3 className="warning">raderat dokument</h3>}
                {showUpdatedNoteMessage && <h3 className="warning">uppdaterat dokument</h3>}

                {showDetails && <>
                    <div className="detailsContainer">
                        <h3 className="cardTitle">{detailedNote.title}</h3>
                        <div dangerouslySetInnerHTML={{ __html: detailedNote.text }}></div>

                        <button className="editBtn" onClick={editNote}>ändra</button>
                        <button className="deleteBtn" onClick={deleteNote}>radera</button>
                    </div>
                </>}

                {showEditForm && <>

                    <Editor
                        apiKey='cuat27eyx1ye4b8zm5lz2rm8i81a069dxic2ltp910c93qoj'
                        onInit={(evt, editor) => editorRef.current = editor}
                        initialValue={detailedNote.text}
                        init={{
                            height: 500,
                            menubar: false,
                            plugins: [
                                'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                                'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                                'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                            ],
                            toolbar: 'undo redo | blocks | ' +
                                'bold italic forecolor | alignleft aligncenter ' +
                                'alignright alignjustify | bullist numlist outdent indent | ' +
                                'removeformat | help',
                            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                        }}
                    />
                    <button className="saveBtn" onClick={updateNote}>spara ändringar</button>
                    <button className="cancelBtn" onClick={() => { setShowEditForm(false) }}>avbryt</button>
                </>}
            </main>
        </>}

        {!loggedIn && <>
            <h3>Välkommen! logga in nedan</h3>
            <input type="text" placeholder="username" onChange={handleUsername} value={username} />
            <input type="password" placeholder="password" onChange={handlePassword} value={password} />
            <button className="saveBtn" disabled={!username || !password} onClick={login}>login</button>
            {badLogin && <h3 className="warning">Fel uppgifter, vänligen prova igen</h3>}
        </>}

    </>)
}
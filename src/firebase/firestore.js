import { db, collection, addDoc, getDocs, onSnapshot, deleteDoc, doc, getDoc, auth, query, where, orderBy, arrayUnion, updateDoc } from "./init.js"

/* SAVE POST DATA */
export const saveTask = contentPost => {
    addDoc(collection(db, "task"), {
        ...contentPost,
        created: new Date(),
        useruid: auth.currentUser.uid,
        username: auth.currentUser.displayName,
        // postId: postId,
        like: 0,
        dislike: 0,
        userlikes: [],
        userdislike: []
    })
};

/* GET POST DATA */
export const getTask = () => {
    return getDocs(collection(db, "task"))
};

/*Order profile post*/
export const getTaskUser = (callback) => {
    const q = query(
        collection(db, "task"),
        where("useruid", "==", auth.currentUser.uid),
        orderBy('created', 'desc')
    );
    return(onSnapshot(q, (callback)))
};

export const getTaskUser2 = () => {
    const q = query(
        collection(db, "task"),
        where("useruid", "==", auth.currentUser.uid),
        orderBy('created', 'desc')
    );
    return(getDocs(q));
};

export const onGetTask2 = () => {
    const q = query(
        collection(db, "task"),
        orderBy('created', 'desc')
    );
    return(getDocs(q));
};
/*Order feed post*/
export const onGetTask = (callback) => {
    const q = query(
        collection(db, "task"),
        orderBy('created', 'desc')
    );
    return(onSnapshot(q, (callback)))
};

//export const onGetTask = (callback) => onSnapshot(collection(db, "task"), callback);

export const deleteTask = (id) => deleteDoc(doc(db, "task", id));

export const getTasks = (id) => getDoc(doc(db, "task", id));

export const UpdateTask = (id, data) => {
    const postDocRef = doc(db, "task", id);
    return updateDoc(postDocRef,data)
}

// const saveUserName = async (data)=> {
//     try {
//         const docRef = await addDoc(collection(db, "user"),dataUser)// data con nombre de usuario y uid
//         console.log("Document written with ID: ", docRef.id);
//     } catch (e) {
//         console.error("Error adding document: ", e);
//     }
// }


// export const likeStatus = async (postId, userUid) => {
//     postId = postId.replace('like-', '');
//     const postInfo = await getPostById(postId);
//     const arrUserLiked = postInfo.postData.UsersWhoLiked;
//     const likeCount = postInfo.postData.LikeCount;
//     if (arrUserLiked.includes(userUid)) {
//       // arrUserLiked: arrayRemove(userUid);
//     await updateDoc(postInfo.docRef, {
//         UsersWhoLiked: arrayRemove(userUid),
//         LikeCount: likeCount - 1,
//     });
//     return true;
//     } else {
//       // arrUserLiked: arrayUnion(userUid);
//         await updateDoc(postInfo.docRef, {
//         UsersWhoLiked: arrayUnion(userUid),
//         LikeCount: likeCount + 1,
//         });
//     return false;
//     }
// };


// export const addLike = async (postId) => {
    
//     const postId = await doc(db, "task", id);
//     console.log(postId);
    

//     // await updateDoc(doc(db, 'task', id)   // });
// };


// export const saveUser = async (name, email, uid) => {
//     addDoc(
//         collection(db, 'user'),
//         {
//         name,
//         email,
//         uid,
//         },
//     );
// };

//   export const removeLike = async (id, uidUser) => {
//     await updateDoc(doc(db, 'task', id), {
//       usersLikes: arrayRemove(uidUser),
//     });
//   };


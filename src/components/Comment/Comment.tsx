import style from './Comment.module.css'

import trash from '../../assets/trash.png'
import user from '../../assets/user.png'

interface props {
    userImage?:string
    content:string
    onDelete:any
}
export function Comment({userImage, content, onDelete}:props){
    function handleDeleteComment(){
        onDelete(content)
    }
    return (
        <div className={style.containerCommentPublished}>
            <img src={(userImage==undefined)?user:userImage} />
            <p>{content}</p>
            <img className={style.icon} onClick={handleDeleteComment} src={trash}/>
        </div>
    )
}
import { ChangeEvent, useState } from 'react'
import phone from '../../assets/phone.png'
import shield from '../../assets/shield.png'
import style from './CommentSection.module.css'
import { Comment } from '../Comment/Comment'
interface props {
    driver:string
    comments:string[]
}


export function CommentSection({driver, comments}:props){

    const [historyComment, setHistoryComment] = useState(comments)
    const [newComment, setComment] = useState('')
    let isNewCommentEmpty = (newComment.length == 0)?true:false

    function handleCommentChange(event:ChangeEvent<HTMLTextAreaElement>){
        setComment(event.target.value)
    }
    function handlePublishButton(){
        setHistoryComment([...historyComment, newComment])
        setComment("")
    }
    function onDeleteComment(commentToDelete:string){

        const newCommentWithoutDeletedOne = historyComment.filter(comment =>{
            if(comment != commentToDelete) return comment
        })
        setHistoryComment(newCommentWithoutDeletedOne)
    }
    return (
        <div className={style.ContainerCommentSection}>
            <form className={style.containerComment}>
                <textarea required onChange={handleCommentChange} className={style.textAreaCommnet} placeholder={`Enviar mensagem para ${driver}...`} value={newComment}/>

                <button  disabled={isNewCommentEmpty} onClick={handlePublishButton}>Publicar</button>
                <img className={style.phoneIcon} src={phone} />
                <img className={style.shieldIcon} src={shield} />
            </form>

            <div className={style.contianerPublishedComments}>
                {
                    historyComment.map(comment =>{
                        return <Comment content={comment} key={Math.random()} onDelete={onDeleteComment} />
                    })
                }
            </div>
  
        </div>
    )
}
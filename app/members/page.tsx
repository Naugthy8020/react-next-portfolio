import Image  from "next/image";
import styles from "./page.module.css"


const date={
    contents:[
        {
            id:"1"
            image:{
                url:"/img-member1.jpg",
                width:240,
                height:240,
            },
            name:"ディビット・チャン",
            position: "CEO",
            profile:"ああああああああああああああ"
        },
        {
            id:"1"
            image:{
                url:"/img-member1.jpg",
                width:240,
                height:240,
            },
            name:"ディビット・チャン",
            position: "CEO",
            profile:"ああああああああああああああ"
        },
        {
            id:"1"
            image:{
                url:"/img-member1.jpg",
                width:240,
                height:240,
            },
            name:"ディビット・チャン",
            position: "CEO",
            profile:"ああああああああああああああ"
        },
        {
            id:"1"
            image:{
                url:"/img-member1.jpg",
                width:240,
                height:240,
            },
            name:"ディビット・チャン",
            position: "CEO",
            profile:"ああああああああああああああ"
        },
    ]
}





export default function Page(){
    return(
        <div className={styles.container}>
            {date.contents.length===0?(
                <p className={styles.empty}>メンバーが登録されていません</p>)
                :(
                    <ul>
                        
                    </ul>
            )}
        </div>
    )
}
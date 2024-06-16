import img from './img.jpg';
import gallary from './gallary.png';
import emoji from './emoji.png';
import video from './video.png';

function Post()
{
     return(
        <>
        <div>
         <img
            src={img}
            style={{ "height": "50px","width":"50px", "borderRadius": "50%","marginBottom":"-20px","marginTop":"6px"}}
         />
        <input type="text" placeholder="What's  happning ?" style={{"color":"red","width":"300px","padding":"14px","paddingLeft":"18px","borderRadius":"12px","marginLeft":"15px" ,"backgroundcolor":"grey"}} />
        </div>
        <div style={{"float":"left","margin":"2px"}}>
         <img
         src={video}
         style={{"height":"25px","width":"20px","float":"left","paddingRight":"3px","marginTop":"15px"}} 
         />
         <p style={{"float":"left","paddingRight":"20px"}}>LiveVideo</p>

         <img
         src={gallary}
         style={{"height":"25px","width":"28px","float":"left","paddingRight":"2px","marginTop":"15px"}}
         />
         <p style={{"float":"left","paddingRight":"20px"}}>Photos</p>

         <img
         src={emoji}
         style={{"height":"23px","width":"25px","float":"left","paddingRight":"3px","marginTop":"15px"}}
         />
         <p style={{"float":"left","paddingRight":"20px"}}>Feeling</p>

         <button style={{"backgroundColor":"rgb(250,78,124)","width":"80px","border":"1px solid","color":"white","marginLeft":"6px","marginTop":"10px","padding":"9px","borderRadius":"8px"}}>Post</button>
        </div>

        </>
     );
}

export default Post;
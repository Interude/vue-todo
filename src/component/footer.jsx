export default{
    data(){
        return {
            author:'xiaochunyuan'
        }
    },
    render(){
    
        return(
            <div style="text-align:center" id="footer">
            <span style="color:red">来自org.xiaocy+{this.author}</span>
            </div>
           
        )
    }
   
}
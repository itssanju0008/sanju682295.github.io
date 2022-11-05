import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";
const Calendery=()=>{

    return ( 
        <div style={{textAlign:"center"}}>
            <h1>GitHub Calender</h1>
<GitHubCalendar
username="sanju682295"
blockSize={15}

fontSize={15}
style={{margin:"auto",marginTop:"80px"}}
>

</GitHubCalendar>
<ReactTooltip delayShow={20} html />

</div>
    )
}
export default Calendery

  

    
 
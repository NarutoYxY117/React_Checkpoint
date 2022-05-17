function FullName(){
    const linkedinProfile = "https://www.linkedin.com/in/naruto-yxy-b9345b234/";
    return (
        <h1 >Naruto YxY 
            <a href={linkedinProfile} target="_blank"> <i style={{color:"blue"}} class="bi bi-linkedin"></i> </a>
        </h1>
    );
}

export default FullName;
import React from "react";

function SocialLink(params) {
    return <div className="footer_social-link">
     <a href=""><img src={params.url} /></a>
    </div>
}

export default SocialLink;
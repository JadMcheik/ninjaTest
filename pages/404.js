import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
const NotFound = () => {



    const router=useRouter();
    useEffect(() => {
        
      
        setTimeout(() => {
            
//router.go(-1)
router.push('/')


        }, 5000);

    }, []);

    return (  


<div className="not-found">

<h1>Oooops....</h1>
<h2>This page cannot be found.</h2>


Go back to the <Link href="/" legacyBehavior>Homepage</Link>

</div>



    );
}
 
export default NotFound;
import { useEffect } from "react";

export default function Logout() {
    useEffect(()=>{
      alert("loggeed out");
      localStorage.removeItem('username')
      window.location.href='/'
    },[])
}

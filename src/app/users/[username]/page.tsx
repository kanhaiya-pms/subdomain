import { headers } from "next/headers";

export default function Users() {
  const headerList = headers();

  const hostname = headerList.get("host");

  const subDomain = hostname?.split(".")[0];
  

  return <> 
  
  <h1 className="text-2xl">Hello from subdomain ---- <span  className="text-2xl font-bold">{subDomain}</span></h1>;
  <h1 className="text-2xl">Hello from subdomain full path ---- <span  className="text-2xl font-bold">{hostname}</span></h1>
  </>
}

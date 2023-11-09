import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(request) {
  console.log("middleware executed");

  const authToken = request.cookies.get("authToken")?.value;

  if(request.nextUrl.pathname==="/api/login" || request.nextUrl.pathname==="/api/users"){
    return;
  }

  const loggedInUserNotAccessPaths =
    request.nextUrl.pathname === "/login" ||
    request.nextUrl.pathname === "/signup";

    if(loggedInUserNotAccessPaths){
        //accessing not secured route
        if(authToken){
            return NextResponse.redirect(new URL("/profile/user",request.url))
        }
    }else {
        //accessing secured route
        if(!authToken){

      if(request.nextUrl.pathname.startsWith("/api")){
        return NextResponse.json({
          message:"Access Denied !!",
          success:false,
        },{
          status:401,
        })
      }

            return NextResponse.redirect(new URL("/login",request.url))
        }else{
            //verify...
            
        }
    }
  console.log(authToken);
}

//See "Matching Paths" below to Learn more
export const config = {
  matcher: [
    "/",
    "/login",
    "/signup",
    "/add-task",
    "/show-tasks",
    "/profile/:path*",
    "/api/:path*",
  ],
};

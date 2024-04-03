import{W as o,j as e,a,d}from"./app-eaf0dc79.js";import{G as l}from"./GuestLayout-0fd13413.js";import{P as m}from"./PrimaryButton-bd26a623.js";import"./ApplicationLogo-7a503e90.js";function x({status:t}){const{post:i,processing:r}=o({}),s=n=>{n.preventDefault(),i(route("verification.send"))};return e.jsxs(l,{children:[e.jsx(a,{title:"Email Verification"}),e.jsx("div",{className:"mb-4 text-sm text-gray-600 dark:text-gray-400",children:"Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another."}),t==="verification-link-sent"&&e.jsx("div",{className:"mb-4 font-medium text-sm text-green-600 dark:text-green-400",children:"A new verification link has been sent to the email address you provided during registration."}),e.jsx("form",{onSubmit:s,children:e.jsxs("div",{className:"mt-4 flex items-center justify-between",children:[e.jsx(m,{disabled:r,children:"Resend Verification Email"}),e.jsx(d,{href:route("logout"),method:"post",as:"button",className:"underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800",children:"Log Out"})]})})]})}export{x as default};
